"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import type { LeadFields } from "@/lib/chatbot";
import { cn } from "@/lib/cn";

type LeadCaptureProps = {
  initial?: Partial<LeadFields>;
  onSubmit?: (lead: LeadFields) => void;
  className?: string;
};

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-violet focus:ring-2 focus:ring-violet/20";

/**
 * Formulaire de capture lead — prêt à être affiché quand le flux le demande.
 * Design aligné sur le chat (carte claire), sans changer la fenêtre principale.
 */
export function LeadCapture({
  initial = {},
  onSubmit,
  className,
}: LeadCaptureProps) {
  const [lead, setLead] = useState<LeadFields>({ ...initial });
  const [sent, setSent] = useState(false);

  function update<K extends keyof LeadFields>(key: K, value: string) {
    setLead((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit?.(lead);
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-border bg-violet-light px-4 py-3 text-sm font-medium text-violet",
          className,
        )}
      >
        Merci — un conseiller Valeadata vous recontacte rapidement.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-2xl border border-border bg-white p-4 shadow-sm",
        className,
      )}
    >
      <p className="text-sm font-semibold text-foreground">
        Laissez vos coordonnées
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-xs font-semibold tracking-wide text-muted uppercase">
          Prénom
          <input
            required
            className={fieldClass}
            value={lead.prenom ?? ""}
            onChange={(e) => update("prenom", e.target.value)}
          />
        </label>
        <label className="block text-xs font-semibold tracking-wide text-muted uppercase">
          Société
          <input
            className={fieldClass}
            value={lead.societe ?? ""}
            onChange={(e) => update("societe", e.target.value)}
          />
        </label>
        <label className="block text-xs font-semibold tracking-wide text-muted uppercase">
          Email
          <input
            required
            type="email"
            className={fieldClass}
            value={lead.email ?? ""}
            onChange={(e) => update("email", e.target.value)}
          />
        </label>
        <label className="block text-xs font-semibold tracking-wide text-muted uppercase">
          Téléphone
          <input
            required
            type="tel"
            className={fieldClass}
            value={lead.telephone ?? ""}
            onChange={(e) => update("telephone", e.target.value)}
          />
        </label>
      </div>
      <PrimaryButton
        type="submit"
        size="md"
        className="mt-4 w-full"
        iconRight={<ArrowRight className="h-4 w-4" />}
      >
        Être rappelé
      </PrimaryButton>
    </form>
  );
}
