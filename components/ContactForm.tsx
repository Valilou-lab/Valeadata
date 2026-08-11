"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { cn } from "@/lib/cn";

type FormState = {
  nom: string;
  societe: string;
  telephone: string;
  email: string;
  besoin: string;
};

const initialState: FormState = {
  nom: "",
  societe: "",
  telephone: "",
  email: "",
  besoin: "",
};

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-violet focus:ring-2 focus:ring-violet/20";

export function ContactForm({ className }: { className?: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Ready for API / webhook wiring later
    console.info("[contact-form]", form);
    setStatus("submitted");
    setForm(initialState);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_60px_-40px_rgba(9,10,20,0.35)] sm:p-8",
        className,
      )}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-semibold tracking-[0.08em] text-muted uppercase">
          Nom
          <input
            required
            name="nom"
            autoComplete="name"
            value={form.nom}
            onChange={(e) => update("nom", e.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block text-xs font-semibold tracking-[0.08em] text-muted uppercase">
          Société
          <input
            required
            name="societe"
            autoComplete="organization"
            value={form.societe}
            onChange={(e) => update("societe", e.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block text-xs font-semibold tracking-[0.08em] text-muted uppercase">
          Téléphone
          <input
            required
            name="telephone"
            type="tel"
            autoComplete="tel"
            value={form.telephone}
            onChange={(e) => update("telephone", e.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block text-xs font-semibold tracking-[0.08em] text-muted uppercase">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-4 block text-xs font-semibold tracking-[0.08em] text-muted uppercase">
        Besoin
        <textarea
          required
          name="besoin"
          rows={4}
          placeholder="Secteur, volumes, zones, échéance…"
          value={form.besoin}
          onChange={(e) => update("besoin", e.target.value)}
          className={cn(fieldClass, "resize-y min-h-[120px]")}
        />
      </label>

      <PrimaryButton type="submit" size="lg" className="mt-6 w-full" iconRight={<ArrowRight className="h-4 w-4" />}>
        Envoyer
      </PrimaryButton>

      <p className="mt-4 text-center text-xs leading-relaxed text-muted">
        En envoyant ce formulaire, vous acceptez d&apos;être recontacté par un
        conseiller Valeadata.
      </p>

      {status === "submitted" ? (
        <p className="mt-3 rounded-2xl bg-violet-light px-4 py-3 text-center text-sm font-medium text-violet" role="status">
          Merci — un conseiller vous rappellera rapidement.
        </p>
      ) : null}
    </form>
  );
}
