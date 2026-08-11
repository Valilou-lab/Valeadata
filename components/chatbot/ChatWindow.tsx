"use client";

import { ChatInput } from "@/components/chatbot/ChatInput";
import { ChatMessage } from "@/components/chatbot/ChatMessage";
import { LeadCapture } from "@/components/chatbot/LeadCapture";
import type { ChatMessage as ChatMessageModel, LeadFields } from "@/lib/chatbot";
import { cn } from "@/lib/cn";

type ChatWindowProps = {
  messages: ChatMessageModel[];
  input: string;
  onInputChange: (value: string) => void;
  onSend: (value: string) => void;
  suggestions?: string[];
  showSuggestions?: boolean;
  showLeadCapture?: boolean;
  leadDraft?: Partial<LeadFields>;
  onLeadSubmit?: (lead: LeadFields) => void;
  isBusy?: boolean;
  compact?: boolean;
  className?: string;
};

export function ChatWindow({
  messages,
  input,
  onInputChange,
  onSend,
  suggestions = [],
  showSuggestions = false,
  showLeadCapture = false,
  leadDraft,
  onLeadSubmit,
  isBusy = false,
  compact = false,
  className,
}: ChatWindowProps) {
  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_24px_80px_-48px_rgba(9,10,20,0.45)]",
        compact ? "h-[420px] flex-col" : "min-h-[520px] flex-col",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-violet px-5 py-4 text-white">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
          V
        </div>
        <div>
          <p className="text-sm font-semibold">Leo · Conseiller IA</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/85">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            En ligne 24/7
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 overflow-y-auto bg-[#fbfbfe] p-4 sm:p-5">
        {messages
          .filter((m) => m.role === "assistant" || m.role === "user")
          .map((message) => (
            <ChatMessage
              key={message.id}
              role={message.role as "assistant" | "user"}
              content={message.content}
            />
          ))}

        {showSuggestions && suggestions.length > 0 ? (
          <div className="mt-auto flex flex-col gap-2 pt-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                disabled={isBusy}
                onClick={() => onSend(suggestion)}
                className="rounded-full border border-border bg-white px-4 py-2.5 text-left text-[13px] font-medium text-foreground/80 transition-colors hover:border-violet/40 hover:bg-violet-light/40 disabled:opacity-60"
              >
                {suggestion}
              </button>
            ))}
          </div>
        ) : null}

        {showLeadCapture ? (
          <LeadCapture
            initial={leadDraft}
            onSubmit={onLeadSubmit}
            className="mt-2"
          />
        ) : null}
      </div>

      <ChatInput
        value={input}
        onChange={onInputChange}
        onSubmit={onSend}
        disabled={isBusy}
      />
    </div>
  );
}
