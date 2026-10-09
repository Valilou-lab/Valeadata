"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { contactRequests, type ContactRequest } from "@/lib/contact";
import { cn } from "@/lib/cn";

type FormState = {
  nom: string;
  email: string;
  entreprise: string;
  demande: ContactRequest | "";
  projet: string;
  website: string;
};

type FieldErrors = Partial<Record<"nom" | "email" | "entreprise" | "demande", string>>;

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-violet focus:ring-2 focus:ring-violet/20";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.nom.trim()) errors.nom = "Indiquez votre nom.";
  if (!emailPattern.test(form.email.trim())) {
    errors.email = "Indiquez une adresse e-mail valide.";
  }
  if (!form.entreprise.trim()) errors.entreprise = "Indiquez le nom de votre entreprise.";
  if (!form.demande) errors.demande = "Choisissez ce que vous recherchez.";
  return errors;
}

export function ContactForm({
  className,
  initialDemande,
}: {
  className?: string;
  initialDemande?: ContactRequest;
}) {
  const [form, setForm] = useState<FormState>({
    nom: "",
    email: "",
    entreprise: "",
    demande: initialDemande ?? "",
    projet: "",
    website: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key in errors) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          entreprise: form.entreprise,
          demande: form.demande,
          projet: form.projet,
          website: form.website,
        }),
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        setStatus("error");
        setFormError(
          payload?.error ??
            "L'envoi n'a pas abouti. Réessayez dans un instant, ou écrivez-nous à contact@valeadata.com.",
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setFormError(
        "L'envoi n'a pas abouti. Réessayez dans un instant, ou écrivez-nous à contact@valeadata.com.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-[2rem] border border-border bg-white p-6 sm:p-8",
          className,
        )}
        role="status"
      >
        <h2 className="text-2xl font-extrabold tracking-tight">Demande envoyée.</h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Merci. Nous revenons vers vous pour échanger sur votre projet.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative rounded-[2rem] border border-border bg-white p-6 sm:p-8", className)}
      noValidate
    >
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Site web
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) => update("website", event.target.value)}
          />
        </label>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="nom" className="block text-sm font-semibold text-foreground">
            Votre nom
          </label>
          <input
            id="nom"
            name="nom"
            required
            autoComplete="name"
            placeholder="Prénom et nom"
            value={form.nom}
            aria-invalid={errors.nom ? true : undefined}
            aria-describedby={errors.nom ? "nom-error" : undefined}
            onChange={(event) => update("nom", event.target.value)}
            className={cn(fieldClass, errors.nom && "border-red-400 focus:border-red-400 focus:ring-red-200")}
          />
          {errors.nom ? (
            <p id="nom-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.nom}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground">
            Votre adresse e-mail professionnelle
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="vous@entreprise.fr"
            value={form.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(event) => update("email", event.target.value)}
            className={cn(fieldClass, errors.email && "border-red-400 focus:border-red-400 focus:ring-red-200")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="entreprise" className="block text-sm font-semibold text-foreground">
            Nom de votre entreprise
          </label>
          <input
            id="entreprise"
            name="entreprise"
            required
            autoComplete="organization"
            placeholder="Votre entreprise"
            value={form.entreprise}
            aria-invalid={errors.entreprise ? true : undefined}
            aria-describedby={errors.entreprise ? "entreprise-error" : undefined}
            onChange={(event) => update("entreprise", event.target.value)}
            className={cn(
              fieldClass,
              errors.entreprise && "border-red-400 focus:border-red-400 focus:ring-red-200",
            )}
          />
          {errors.entreprise ? (
            <p id="entreprise-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.entreprise}
            </p>
          ) : null}
        </div>

        <fieldset
          aria-invalid={errors.demande ? true : undefined}
          aria-describedby={errors.demande ? "demande-error" : undefined}
        >
          <legend className="text-sm font-semibold text-foreground">Que recherchez-vous ?</legend>
          <div className="mt-2 grid gap-3">
            {(Object.keys(contactRequests) as ContactRequest[]).map((key) => {
              const selected = form.demande === key;
              return (
                <label
                  key={key}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm leading-snug transition-colors",
                    selected
                      ? "border-violet bg-violet-light"
                      : "border-border bg-white hover:border-violet/40",
                  )}
                >
                  <input
                    type="radio"
                    name="demande"
                    value={key}
                    required
                    checked={selected}
                    onChange={() => update("demande", key)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-violet"
                  />
                  <span>{contactRequests[key]}</span>
                </label>
              );
            })}
          </div>
          {errors.demande ? (
            <p id="demande-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.demande}
            </p>
          ) : null}
        </fieldset>

        <div>
          <label htmlFor="projet" className="block text-sm font-semibold text-foreground">
            Dites-nous en plus sur votre projet{" "}
            <span className="font-normal text-muted">— facultatif</span>
          </label>
          <textarea
            id="projet"
            name="projet"
            rows={4}
            placeholder="Votre activité, vos objectifs, vos besoins… Quelques lignes suffisent !"
            value={form.projet}
            onChange={(event) => update("projet", event.target.value)}
            className={cn(fieldClass, "min-h-[120px] resize-y")}
          />
        </div>
      </div>

      {formError ? (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {formError}
        </p>
      ) : null}

      <PrimaryButton
        type="submit"
        size="lg"
        className="mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "sending"}
        iconRight={<ArrowRight className="h-4 w-4" aria-hidden />}
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </PrimaryButton>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Les informations envoyées sont utilisées uniquement pour répondre à votre
        demande.{" "}
        <a href="/politique-confidentialite" className="font-semibold text-violet underline-offset-2 hover:underline">
          Politique de confidentialité
        </a>.
      </p>
    </form>
  );
}
