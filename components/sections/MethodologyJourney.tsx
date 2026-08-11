"use client";

import {
  Check,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Phone,
  MousePointerClick,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

const stages = [
  {
    id: "acquisition",
    label: "Acquisition",
    title: "Le prospect arrive",
    description:
      "Une pub attire le prospect, il remplit le formulaire : le lead entre dans le parcours Valeadata.",
  },
  {
    id: "validation",
    label: "Validation",
    title: "Le consentement est confirmé",
    description:
      "Double Opt-In SMS / WhatsApp et contrôles qualité avant livraison.",
  },
  {
    id: "routing",
    label: "Filtrage",
    title: "Doublons & faux numéros écartés",
    description:
      "Détection des doublons et filtrage des faux numéros avant d’envoyer le lead au bon service.",
  },
  {
    id: "contact",
    label: "Contact",
    title: "Votre équipe reprend la main",
    description:
      "Appel, SMS ou WhatsApp — le prospect est joignable et prêt à convertir.",
  },
] as const;

const STAGE_MS = 3000;

export function MethodologyJourney() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % stages.length);
    }, STAGE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  function goTo(index: number) {
    setActive((index + stages.length) % stages.length);
  }

  function goPrev() {
    goTo(active - 1);
  }

  function goNext() {
    goTo(active + 1);
  }

  return (
    <div
      className="mt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Timeline */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            type="button"
            onClick={() => goTo(index)}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all sm:text-[13px]",
              active === index
                ? "bg-violet text-white shadow-[0_8px_24px_-10px_rgba(138,107,255,0.8)]"
                : "bg-white text-muted border border-border hover:border-violet/40 hover:text-foreground",
            )}
          >
            {index + 1}. {stage.label}
          </button>
        ))}
      </div>

      {/* Stage frame — look "player / video" */}
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-[#0b0b14] text-white shadow-[0_30px_80px_-40px_rgba(9,10,20,0.55)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(138,107,255,0.28),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:36px_36px]" />

        {/* Fake video chrome */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <p className="text-[11px] font-medium tracking-[0.16em] text-white/50 uppercase">
            Live journey · Valeadata
          </p>
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase",
              paused ? "bg-white/10 text-white/60" : "bg-violet/30 text-violet-soft",
            )}
          >
            {paused ? "Pause" : "Play"}
          </span>
        </div>

        <div className="relative z-10 grid gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:py-12">
          <div className="relative min-h-[260px] sm:min-h-[300px]">
            <SceneAcquisition active={active === 0} />
            <SceneValidation active={active === 1} />
            <SceneRouting active={active === 2} />
            <SceneContact active={active === 3} />
          </div>

          <div className="lg:pl-4">
            <p className="text-xs font-bold tracking-[0.18em] text-violet uppercase">
              Étape {active + 1} / {stages.length}
            </p>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {stages[active].title}
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70 sm:text-base">
              {stages[active].description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-violet/50 hover:bg-violet/20"
                aria-label="Étape précédente"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-violet/50 hover:bg-violet/20"
                aria-label="Étape suivante"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <p className="text-xs text-white/45">
                Précédent / suivant · ou cliquez une étape
              </p>
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">
              <div
                key={active}
                className={cn(
                  "h-full rounded-full bg-violet",
                  paused ? "w-full" : "method-progress",
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SceneShell({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center transition-all duration-500",
        active
          ? "z-10 opacity-100 translate-y-0 scale-100"
          : "z-0 pointer-events-none opacity-0 translate-y-3 scale-[0.97]",
      )}
      aria-hidden={!active}
    >
      {children}
    </div>
  );
}

function SceneAcquisition({ active }: { active: boolean }) {
  return (
    <SceneShell active={active}>
      <div className="relative flex w-full max-w-md items-center justify-center gap-3 sm:gap-4">
        {/* Mini AD + formulaire */}
        <div className="relative w-[200px] shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white text-[#0b0b14] shadow-[0_20px_50px_-24px_rgba(138,107,255,0.55)] sm:w-[220px]">
          <div className="flex items-center gap-2 border-b border-black/5 bg-[#f5f5f8] px-3 py-2">
            <span className="rounded bg-violet/15 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-violet uppercase">
              Pub
            </span>
            <span className="text-[10px] font-medium text-black/45">
              Sponsorisé · Meta
            </span>
          </div>

          <div className="relative h-16 bg-gradient-to-br from-violet to-[#5b3fd6] px-3 py-2.5 text-white">
            <p className="text-[11px] font-bold leading-snug">
              Demandez votre étude gratuite
            </p>
            <p className="mt-0.5 text-[9px] text-white/75">
              Réponse sous 24h · Sans engagement
            </p>
            <span className="method-cursor absolute right-3 bottom-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-violet shadow-md">
              <MousePointerClick className="h-3 w-3" />
            </span>
          </div>

          <div className="space-y-1.5 px-3 py-2.5">
            <div className="h-6 rounded-md border border-black/8 bg-[#f8f8fb] px-2 text-[9px] leading-6 text-black/35">
              Prénom
            </div>
            <div className="h-6 rounded-md border border-black/8 bg-[#f8f8fb] px-2 text-[9px] leading-6 text-black/35">
              Téléphone
            </div>
            <div className="h-6 rounded-md border border-black/8 bg-[#f8f8fb] px-2 text-[9px] leading-6 text-black/35">
              Code postal
            </div>
            <div className="method-submit flex h-7 items-center justify-center rounded-md bg-violet text-[10px] font-bold text-white">
              Envoyer ma demande
            </div>
          </div>
        </div>

        {/* Flèche */}
        <div className="relative hidden w-10 shrink-0 items-center justify-center sm:flex">
          <div className="h-px w-full bg-gradient-to-r from-violet/20 via-violet to-violet/20" />
          <span className="absolute method-dot h-2.5 w-2.5 rounded-full bg-violet shadow-[0_0_12px_rgba(138,107,255,0.9)]" />
        </div>

        {/* Lead validé */}
        <div className="method-lead-card flex w-[132px] shrink-0 flex-col items-center gap-2 rounded-2xl border border-emerald-400/35 bg-emerald-400/10 px-3 py-4 text-center backdrop-blur sm:w-[140px]">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 text-[#0b0b14]">
            <span className="absolute inset-0 rounded-full bg-emerald-400/40 method-pulse" />
            <Check className="relative h-5 w-5" strokeWidth={3} />
          </span>
          <div>
            <p className="text-xs font-bold text-emerald-300">Lead entrant</p>
            <p className="mt-0.5 text-[10px] text-white/55">Formulaire validé</p>
          </div>
          <div className="w-full space-y-1 rounded-xl bg-white/5 px-2 py-2 text-left">
            <p className="text-[9px] text-white/75">Thomas · 06 XX XX XX</p>
            <p className="text-[9px] text-white/45">75011 · Solaire</p>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

function SceneValidation({ active }: { active: boolean }) {
  return (
    <SceneShell active={active}>
      <div className="relative flex w-full max-w-sm flex-col items-center">
        <div className="relative w-full rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet/25 text-violet">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Double Opt-In</p>
              <p className="text-xs text-white/50">SMS / WhatsApp</p>
            </div>
          </div>

          <div className="mt-5 space-y-2.5">
            {["Numéro contrôlé", "Consentement confirmé", "Anti-doublon"].map(
              (item, i) => (
                <div
                  key={item}
                  className="method-check-row flex items-center gap-2.5 rounded-xl bg-white/5 px-3 py-2.5 text-sm text-white/85"
                  style={{ animationDelay: `${0.2 + i * 0.25}s` }}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

function SceneRouting({ active }: { active: boolean }) {
  const filters = [
    { label: "Détection doublons", ok: true },
    { label: "Filtrage faux numéros", ok: true },
    { label: "Routage CRM / service", ok: true },
  ];

  return (
    <SceneShell active={active}>
      <div className="relative flex w-full max-w-md flex-col items-center">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex flex-1 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
            <Smartphone className="h-5 w-5 text-violet" />
            <span className="text-xs font-semibold text-white/80">Lead entrant</span>
          </div>

          <div className="relative flex w-10 shrink-0 items-center justify-center sm:w-14">
            <div className="h-px w-full bg-gradient-to-r from-violet/20 via-violet to-violet/20" />
            <span className="absolute method-dot h-2.5 w-2.5 rounded-full bg-violet shadow-[0_0_12px_rgba(138,107,255,0.9)]" />
          </div>

          <div className="flex flex-1 flex-col gap-2">
            {filters.map((item, i) => (
              <div
                key={item.label}
                className="method-check-row flex items-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-2 text-[11px] font-semibold text-emerald-200 sm:text-xs"
                style={{ animationDelay: `${0.15 + i * 0.2}s` }}
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-[#0b0b14]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-violet/40 bg-violet/20 px-4 py-3">
          <Workflow className="h-4 w-4 text-white" />
          <span className="text-xs font-semibold sm:text-sm">
            Lead propre → équipe compétente
          </span>
        </div>
      </div>
    </SceneShell>
  );
}

function SceneContact({ active }: { active: boolean }) {
  const channels = [
    { label: "Appel", icon: Phone },
    { label: "SMS", icon: MessageSquare },
    { label: "WhatsApp", icon: Smartphone },
  ];

  return (
    <SceneShell active={active}>
      <div className="relative flex w-full max-w-md flex-col items-center">
        <div className="grid w-full grid-cols-3 gap-3">
          {channels.map(({ label, icon: Icon }, i) => (
            <div
              key={label}
              className="method-channel flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-2 py-5"
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-violet text-white shadow-[0_0_24px_rgba(138,107,255,0.45)]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold text-white/85">{label}</span>
            </div>
          ))}
        </div>
        <div className="method-call-blink mt-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/40 bg-emerald-400/15 px-4 py-2.5 text-sm font-semibold text-emerald-300">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-[#0b0b14]">
            <span className="absolute inset-0 rounded-full bg-emerald-400/50 method-call-ring" />
            <Phone className="relative h-4 w-4" />
          </span>
          Appeler votre prospect
        </div>
      </div>
    </SceneShell>
  );
}
