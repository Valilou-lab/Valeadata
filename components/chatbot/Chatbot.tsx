"use client";

import { useCallback, useState } from "react";
import { ChatWindow } from "@/components/chatbot/ChatWindow";
import {
  DEFAULT_SUGGESTIONS,
  createFreshChatContext,
  createMessage,
  type ChatMessage,
  type ChatbotReply,
  type ConversationState,
  type LeadFields,
} from "@/lib/chatbot";

type ChatbotProps = {
  compact?: boolean;
  className?: string;
};

/**
 * Conteneur logique du chatbot Leo.
 * Les réponses live passent par POST /api/chat (OpenAI côté serveur).
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

  const pushAssistant = useCallback(
    (content: string, showLead?: boolean) => {
      const assistantMessage = createMessage("assistant", content);
      setMessages((prev) => [...prev, assistantMessage]);
      setTypingMessageId(assistantMessage.id);
      if (showLead) setPendingLeadCapture(true);
    },
    [],
  );

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isBusy) return;

      const userMessage = createMessage("user", trimmed);
      const historySnapshot = messages;

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsBusy(true);
      setShowLeadCapture(false);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: trimmed,
            history: historySnapshot,
            state,
          }),
        });

        const payload = (await response.json()) as ChatbotReply & {
          error?: string;
        };

        if (!response.ok) {
          pushAssistant(
            payload.error ??
              "Je n'ai pas pu répondre pour le moment. Réessayez dans un instant, ou écrivez à contact@valeadata.com.",
          );
          return;
        }

        setState(payload.state);

        if (payload.message) {
          pushAssistant(payload.message, payload.showLeadCapture);
          return;
        }

        setIsBusy(false);
        if (payload.showLeadCapture) setShowLeadCapture(true);
      } catch {
        pushAssistant(
          "Petit souci de connexion de mon côté. Réessayez dans un instant — ou contactez contact@valeadata.com.",
        );
      }
    },
    [isBusy, messages, pushAssistant, state],
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
