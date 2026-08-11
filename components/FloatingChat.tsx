"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Chatbot } from "@/components/chatbot";
import { cn } from "@/lib/cn";

export function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-[60] sm:right-6 sm:bottom-6">
      {open ? (
        <div className="mb-3 w-[min(100vw-2rem,380px)] overflow-hidden rounded-[1.75rem] shadow-[0_24px_80px_-32px_rgba(9,10,20,0.55)]">
          <Chatbot
            compact
            className="h-[min(70vh,480px)] border-0 shadow-none"
          />
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet text-white shadow-[0_12px_32px_-8px_rgba(138,107,255,0.8)] transition-transform hover:scale-[1.03]",
        )}
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
