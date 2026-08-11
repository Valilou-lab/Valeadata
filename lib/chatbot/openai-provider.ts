import type { ChatMessage, ChatModelProvider } from "./types";

const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const DEFAULT_MODEL = "gpt-4o-mini";

function toOpenAiMessages(
  systemPrompt: string,
  messages: ChatMessage[],
): Array<{ role: "system" | "user" | "assistant"; content: string }> {
  const recent = messages
    .filter((m) => m.role === "user" || m.role === "assistant")
    .slice(-24);

  return [
    { role: "system", content: systemPrompt },
    ...recent.map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  ];
}

/**
 * Provider OpenAI live — à n'utiliser que côté serveur (clé API privée).
 */
export const openaiChatProvider: ChatModelProvider = {
  async generateReply({ systemPrompt, messages, state }) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY manquante");
    }

    const runtimeContext = `
==================================================
CONTEXTE RUNTIME
==================================================

Phase conversationnelle : ${state.phase}
Champs déjà collectés : ${state.collectedFields.join(", ") || "aucun"}
Lead partiel : ${JSON.stringify(state.lead)}
`.trim();

    const fullPrompt = `${systemPrompt}\n\n${runtimeContext}`;
    const model = process.env.OPENAI_MODEL?.trim() || DEFAULT_MODEL;

    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.7,
        messages: toOpenAiMessages(fullPrompt, messages),
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(
        `OpenAI error ${response.status}${detail ? `: ${detail.slice(0, 240)}` : ""}`,
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const content = data.choices?.[0]?.message?.content?.trim();
    if (!content) {
      throw new Error("Réponse OpenAI vide");
    }

    return { content };
  },
};
