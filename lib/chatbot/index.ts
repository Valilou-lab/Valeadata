/**
 * Architecture chatbot Valeadata (Leo).
 *
 * Brancher un LLM externe :
 * 1. Implémenter ChatModelProvider (ex. OpenAI)
 * 2. Appeler setChatModelProvider(openaiProvider)
 * 3. processUserMessage utilisera automatiquement le nouveau provider
 */

export * from "./types";
export * from "./system-prompt";
export * from "./knowledge-base";
export * from "./qualification-rules";
export * from "./safety-rules";
export * from "./conversation-state";
export {
  DEFAULT_SUGGESTIONS,
  WELCOME_MESSAGE,
  createFreshChatContext,
  createMessage,
  getChatModelProvider,
  getFullSystemPrompt,
  mockChatProvider,
  processUserMessage,
  setChatModelProvider,
} from "./engine";
