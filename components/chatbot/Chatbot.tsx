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
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const [pendingLeadCapture, setPendingLeadCapture] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  const userMessageCount = messages.filter((m) => m.role === "user").length;

  const handleTypingComplete = useCallback(() => {
    setTypingMessageId(null);
    setIsBusy(false);
    if (pendingLeadCapture) {
      setShowLeadCapture(true);
      setPendingLeadCapture(false);
    }
  }, [pendingLeadCapture]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isBusy) return;

      const userMessage = createMessage("user", trimmed);

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsBusy(true);
      setShowLeadCapture(false);

      try {
        const reply = await processUserMessage(trimmed, {
          history: messages,
          state,
        });

        setState(reply.state);

        if (reply.message) {
          const assistantMessage = createMessage("assistant", reply.message);
          setMessages((prev) => [...prev, assistantMessage]);
          setTypingMessageId(assistantMessage.id);
          if (reply.showLeadCapture) setPendingLeadCapture(true);
          // isBusy reste true jusqu'à la fin du typewriter
          return;
        }

        setIsBusy(false);
        if (reply.showLeadCapture) setShowLeadCapture(true);
      } catch {
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
    setIsBusy(true);

    const thanks = createMessage(
      "assistant",
      `Merci${lead.prenom ? ` ${lead.prenom}` : ""} ! Un conseiller Valeadata vous rappelle rapidement.`,
    );
    setMessages((prev) => [...prev, thanks]);
    setTypingMessageId(thanks.id);
  }

  return (
    <ChatWindow
      messages={messages}
      input={input}
      onInputChange={setInput}
      onSend={send}
      suggestions={[...DEFAULT_SUGGESTIONS]}
      showSuggestions={userMessageCount === 0 && !isBusy}
      showLeadCapture={showLeadCapture}
      leadDraft={state.lead}
      onLeadSubmit={handleLeadSubmit}
      isBusy={isBusy}
      typingMessageId={typingMessageId}
      onTypingComplete={handleTypingComplete}
      compact={compact}
      className={className}
    />
  );
}
