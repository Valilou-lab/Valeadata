import { getKnowledgeSummary } from "./knowledge-base";
import {
  buildQualificationQuestion,
  getNextFieldToAsk,
  isLeadReadyForHandoff,
} from "./qualification-rules";
import {
  detectConfidentialRequest,
  detectInsult,
  getConfidentialResponse,
  getInsultResponse,
  getSafetyPromptBlock,
  getUnknownFactResponse,
} from "./safety-rules";
import { buildSystemPrompt } from "./system-prompt";
import {
  applyMessageToState,
  createInitialConversationState,
  markFieldAsked,
} from "./conversation-state";
import type {
  ChatMessage,
  ChatModelProvider,
  ChatbotContext,
  ChatbotReply,
  ConversationState,
} from "./types";

/** Suggestions affichées au premier écran (design actuel) */
export const DEFAULT_SUGGESTIONS = [
  "Je veux des leads en rénovation énergétique",
  "Comment fonctionne le Double Opt-In SMS ?",
  "Quels volumes pouvez-vous fournir ?",
] as const;

export const WELCOME_MESSAGE =
  "Bonjour 👋 Je suis Leo, votre conseillère Valeadata.\nQuelle verticale souhaitez-vous explorer — mutuelle, solaire, rénovation, énergie… ?";

/** Réponses mock locales — remplacées par le LLM plus tard */
const MOCK_REPLIES: Record<string, string> = {
  "Je veux des leads en rénovation énergétique":
    "Oui, rénovation c'est une verticale que nous pouvons travailler — actuellement plutôt en exclusivité. Vous cherchez plutôt une campagne nationale ou certaines zones ?",
  "Comment fonctionne le Double Opt-In SMS ?":
    "Aujourd'hui, la validation SMS / Double Opt-In est intégrée à environ 80 % de nos campagnes. Elle ajoute une étape de validation du prospect et s'inscrit dans notre logique de qualité et de traçabilité. Ce n'est pas systématique à 100 % : ça dépend du dispositif et du cahier des charges.",
  "Quels volumes pouvez-vous fournir ?":
    "Nous n'imposons pas le même minimum à tout le monde. Le volume de test recommandé dépend de la verticale et du type de lead — l'idée, c'est d'avoir assez de données pour juger vraiment la performance. Vous souhaitez tester quelle verticale ?",
};

/**
 * Provider mock synchrone/async — même contrat qu'un futur OpenAIProvider.
 */
export const mockChatProvider: ChatModelProvider = {
  async generateReply({ messages }) {
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const text = lastUser?.content.trim() ?? "";
    const content =
      MOCK_REPLIES[text] ??
      "Bonne question. Je préfère cadrer ça proprement plutôt que d'improviser. Donnez-moi votre verticale et votre cible, ou je peux faire passer le besoin à l'équipe Valeadata.";
    return { content };
  },
};

/** Instance active — à remplacer par OpenAIProvider quand prêt */
let activeProvider: ChatModelProvider = mockChatProvider;

export function setChatModelProvider(provider: ChatModelProvider) {
  activeProvider = provider;
}

export function getChatModelProvider() {
  return activeProvider;
}

export function createMessage(
  role: ChatMessage["role"],
  content: string,
): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    content,
    createdAt: new Date().toISOString(),
  };
}

export function getFullSystemPrompt(): string {
  return buildSystemPrompt(
    `${getSafetyPromptBlock()}\n\nBase de connaissances :\n${getKnowledgeSummary()}`,
  );
}

/**
 * Point d'entrée unique pour traiter un message utilisateur.
 * Applique safety → state → (mock/LLM) → qualification.
 */
export async function processUserMessage(
  userText: string,
  context: ChatbotContext,
): Promise<ChatbotReply> {
  const trimmed = userText.trim();
  if (!trimmed) {
    return { message: "", state: context.state };
  }

  let state: ConversationState = applyMessageToState(context.state, trimmed);

  if (detectInsult(trimmed)) {
    state = {
      ...state,
      flags: { ...state.flags, insultDetected: true },
    };
    return { message: getInsultResponse(), state };
  }

  if (detectConfidentialRequest(trimmed)) {
    state = {
      ...state,
      flags: { ...state.flags, refusedConfidential: true },
    };
    return { message: getConfidentialResponse(), state };
  }

  const history: ChatMessage[] = [
    ...context.history,
    createMessage("user", trimmed),
  ];

  const { content } = await activeProvider.generateReply({
    systemPrompt: getFullSystemPrompt(),
    messages: history,
    knowledgeSummary: getKnowledgeSummary(),
    state,
  });

  let message = content;

  // Si le mock n'a pas de réponse dédiée et qu'il manque des infos, poser la prochaine question
  if (!MOCK_REPLIES[trimmed]) {
    const nextField = getNextFieldToAsk(state);
    if (nextField && state.phase !== "closed") {
      state = markFieldAsked(state, nextField);
      message = `${content}\n\n${buildQualificationQuestion(nextField)}`;
    }
  }

  if (isLeadReadyForHandoff(state.lead)) {
    state = { ...state, phase: "handoff" };
    return {
      message,
      state,
      showLeadCapture: false,
    };
  }

  // Garde-fou anti-invention côté moteur local
  if (/€\s*\d|\d+\s*€|tarif exact|prix fixe/i.test(trimmed) && !message) {
    message = getUnknownFactResponse();
  }

  return { message, state };
}

export function createFreshChatContext(): ChatbotContext {
  return {
    state: createInitialConversationState(),
    history: [createMessage("assistant", WELCOME_MESSAGE)],
  };
}
