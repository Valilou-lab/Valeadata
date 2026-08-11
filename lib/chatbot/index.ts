/**
 * Architecture chatbot Valeadata (Leo).
 *
 * Mode live : l'UI appelle POST /api/chat, qui utilise openaiChatProvider.
 */

export * from "./types";
export * from "./system-prompt";
export * from "./knowledge-base";
export * from "./qualification-rules";
export * from "./safety-rules";
export * from "./conversation-state";
export { openaiChatProvider } from "./openai-provider";
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
