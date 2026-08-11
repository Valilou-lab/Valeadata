"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type ChatMessageProps = {
  role: "assistant" | "user";
  content: string;
  /** Effet machine à écrire (réponses Leo) */
  animate?: boolean;
  /** Délai avant de commencer à écrire */
  delayMs?: number;
  onTypingComplete?: () => void;
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

export function ChatMessage({
  role,
  content,
  animate = false,
  delayMs = 1000,
  onTypingComplete,
}: ChatMessageProps) {
  const [displayed, setDisplayed] = useState(() => (animate ? "" : content));
  const [phase, setPhase] = useState<"waiting" | "typing" | "done">(() =>
    animate ? "waiting" : "done",
  );
  const onCompleteRef = useRef(onTypingComplete);

  useEffect(() => {
    onCompleteRef.current = onTypingComplete;
  }, [onTypingComplete]);

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];

    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timers.push(id);
    };

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!animate || reduceMotion) {
      later(() => {
        setDisplayed(content);
        setPhase("done");
        if (animate) onCompleteRef.current?.();
      }, 0);
      return () => {
        cancelled = true;
        timers.forEach((id) => window.clearTimeout(id));
      };
    }

    later(() => {
      setDisplayed("");
      setPhase("waiting");
    }, 0);

    later(() => {
      setPhase("typing");
      let charIndex = 0;
      const speed = content.length > 280 ? 12 : content.length > 140 ? 16 : 20;

      const tick = () => {
        charIndex += 1;
        setDisplayed(content.slice(0, charIndex));

        if (charIndex < content.length) {
          later(tick, speed);
        } else {
          setPhase("done");
          onCompleteRef.current?.();
        }
      };

      later(tick, speed);
    }, delayMs);

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [animate, content, delayMs]);

  const showCursor = phase === "typing";
  const showDots = phase === "waiting";

  return (
    <div
      className={cn(
        "max-w-[92%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed",
        role === "assistant"
          ? "border border-border/70 bg-white text-foreground shadow-sm"
          : "ml-auto bg-violet text-white",
      )}
    >
      {role === "assistant" ? (
        <>
          {showDots ? (
            <span
              className="inline-flex items-center gap-1 text-muted"
              aria-label="Leo écrit"
            >
              <span className="chat-typing-dot h-1.5 w-1.5 rounded-full bg-violet/70" />
              <span className="chat-typing-dot h-1.5 w-1.5 rounded-full bg-violet/70 [animation-delay:0.15s]" />
              <span className="chat-typing-dot h-1.5 w-1.5 rounded-full bg-violet/70 [animation-delay:0.3s]" />
            </span>
          ) : (
            <>
              <AssistantText text={displayed} />
              {showCursor ? (
                <span
                  className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-violet align-middle animate-pulse"
                  aria-hidden
                />
              ) : null}
            </>
          )}
        </>
      ) : (
        content
      )}
    </div>
  );
}
