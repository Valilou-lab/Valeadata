/**
 * Types partagés du chatbot Leo (Valeadata).
 * Prêts pour un moteur local mocké puis une API OpenAI / autre LLM.
 */

export type ChatRole = "assistant" | "user" | "system";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
};

/** Champs de qualification progressive du lead */
export type LeadFields = {
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: string;
  societe?: string;
  verticale?: string;
  volume?: string;
  zone?: string;
  besoin?: string;
};

export type QualificationField = keyof LeadFields;

export type ConversationState = {
  lead: LeadFields;
  collectedFields: QualificationField[];
  lastAskedField?: QualificationField;
  /** Phase courte pour piloter le flux sans LLM */
  phase: "greeting" | "discovery" | "qualification" | "handoff" | "closed";
  flags: {
    insultDetected: boolean;
    refusedConfidential: boolean;
    askedForHuman: boolean;
  };
};

export type ChatbotReply = {
  message: string;
  state: ConversationState;
  /** Suggestions affichables sous le message (optionnel) */
  suggestions?: string[];
  /** Afficher le formulaire de capture lead */
  showLeadCapture?: boolean;
};

export type ChatbotContext = {
  state: ConversationState;
  history: ChatMessage[];
};

/**
 * Contrat pour brancher plus tard OpenAI (ou autre).
 * Le moteur mock implémente déjà cette interface.
 */
export type ChatModelProvider = {
  generateReply: (input: {
    systemPrompt: string;
    messages: ChatMessage[];
    knowledgeSummary: string;
    state: ConversationState;
  }) => Promise<{ content: string }>;
};
