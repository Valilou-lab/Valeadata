"use client";

import { CornerDownLeft } from "lucide-react";

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
};

export function ChatInput({
  value,
  onChange,
  onSubmit,
  disabled = false,
  placeholder = "Écrivez votre besoin…",
}: ChatInputProps) {
  return (
    <form
      className="flex items-center gap-2 border-t border-border bg-white p-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
      }}
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="min-w-0 flex-1 rounded-xl border border-transparent bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted disabled:opacity-60"
        aria-label="Message"
      />
      <button
        type="submit"
        disabled={disabled}
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet text-white transition-colors hover:bg-[#7a58f5] disabled:opacity-60"
        aria-label="Envoyer"
      >
        <CornerDownLeft className="h-4 w-4" />
      </button>
    </form>
  );
}
