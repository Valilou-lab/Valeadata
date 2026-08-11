"use client";

import { cn } from "@/lib/cn";

type ChatMessageProps = {
  role: "assistant" | "user";
  content: string;
};

function AssistantText({ text }: { text: string }) {
  const parts = text.split(/(Leo)/g);
  return (
    <>
      {parts.map((part, index) =>
        part === "Leo" ? (
          <strong key={index} className="font-semibold">
            Leo
          </strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "max-w-[92%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed",
        role === "assistant"
          ? "border border-border/70 bg-white text-foreground shadow-sm"
          : "ml-auto bg-violet text-white",
      )}
    >
      {role === "assistant" ? <AssistantText text={content} /> : content}
    </div>
  );
}
