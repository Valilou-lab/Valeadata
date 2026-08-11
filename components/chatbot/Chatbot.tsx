"use client";

import { useCallback, useState } from "react";
import { ChatWindow } from "@/components/chatbot/ChatWindow";
import {
  DEFAULT_SUGGESTIONS,
  createFreshChatContext,
  createMessage,
  processUserMessage,
  type ChatMessage,
  type ConversationState,
  type LeadFields,
} from "@/lib/chatbot";

type ChatbotProps = {
  compact?: boolean;
  className?: string;
};

/**
 * Conteneur logique du chatbot Leo.
 * Conserve le design via ChatWindow ; la logique vit dans /lib/chatbot.
 */
export function Chatbot({ compact = false, className }: ChatbotProps) {
  const [context] = useState(() => createFreshChatContext());
  const [messages, setMessages] = useState<ChatMessage[]>(context.history);
  const [state, setState] = useState<ConversationState>(context.state);
  const [input, setInput] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  const userMessageCount = messages.filter((m) => m.role === "user").length;

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isBusy) return;

      const userMessage = createMessage("user", trimmed);
      const historyForEngine = [...messages, userMessage];

      setMessages(historyForEngine);
      setInput("");
      setIsBusy(true);

      try {
        const reply = await processUserMessage(trimmed, {
          history: messages,
          state,
        });

        if (reply.message) {
          setMessages((prev) => [
            ...prev,
            createMessage("assistant", reply.message),
          ]);
        }
        setState(reply.state);
        if (reply.showLeadCapture) setShowLeadCapture(true);
      } finally {
        setIsBusy(false);
      }
    },
    [isBusy, messages, state],
  );

  function handleLeadSubmit(lead: LeadFields) {
    setState((prev) => ({
      ...prev,
      lead: { ...prev.lead, ...lead },
      phase: "handoff",
    }));
    setShowLeadCapture(false);
    setMessages((prev) => [
      ...prev,
      createMessage(
        "assistant",
        `Merci${lead.prenom ? ` ${lead.prenom}` : ""} ! Un conseiller Valeadata vous rappelle rapidement.`,
      ),
    ]);
  }

  return (
    <ChatWindow
      messages={messages}
      input={input}
      onInputChange={setInput}
      onSend={send}
      suggestions={[...DEFAULT_SUGGESTIONS]}
      showSuggestions={userMessageCount === 0}
      showLeadCapture={showLeadCapture}
      leadDraft={state.lead}
      onLeadSubmit={handleLeadSubmit}
      isBusy={isBusy}
      compact={compact}
      className={className}
    />
  );
}
