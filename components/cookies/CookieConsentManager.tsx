"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import {
  COOKIE_CONSENT_OPEN_EVENT,
  DEFAULT_CONSENT,
  applyConsentScripts,
  hasNonEssentialTrackers,
  isCategoryInstrumented,
  readConsent,
  writeConsent,
  type ConsentPreferences,
} from "@/lib/cookies";
import { cn } from "@/lib/cn";

type ToggleCategory = "analytics" | "marketing";

/**
 * Panneau « Gérer mes cookies » — ouvert depuis le Footer.
 * Pas de bannière de première visite tant qu'aucun tracker non essentiel
 * n'est enregistré dans le registre de consentement.
 */
export function CookieConsentManager() {
  const titleId = useId();
  const descriptionId = useId();
  const analyticsId = useId();
  const marketingId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPreferences>(DEFAULT_CONSENT);
  const [bannerVisible, setBannerVisible] = useState(false);

  const analyticsActive = isCategoryInstrumented("analytics");
  const marketingActive = isCategoryInstrumented("marketing");
  const showPreferences = isCategoryInstrumented("preferences");
  const trackersActive = hasNonEssentialTrackers();

  useEffect(() => {
    const bootTimer = window.setTimeout(() => {
      const stored = readConsent();
      setPrefs(stored);

      if (trackersActive && !stored.updatedAt) {
        setBannerVisible(true);
      }

      if (trackersActive && stored.updatedAt) {
        applyConsentScripts(stored);
      }
    }, 0);

    function onOpen() {
      setPrefs(readConsent());
      setOpen(true);
      setBannerVisible(false);
    }

    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, onOpen);
    return () => {
      window.clearTimeout(bootTimer);
      window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, onOpen);
    };
  }, [trackersActive]);

  useEffect(() => {
    if (!open && !bannerVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeRef.current?.focus();
    }, 0);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        // Fermeture ≠ consentement
        if (open) setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, bannerVisible]);

  function persist(next: ConsentPreferences) {
    const saved = writeConsent(next);
    setPrefs(saved);
    applyConsentScripts(saved);
    setBannerVisible(false);
    setOpen(false);
  }

  function acceptAll() {
    persist({
      necessary: true,
      preferences: showPreferences,
      analytics: analyticsActive,
      marketing: marketingActive,
      updatedAt: new Date().toISOString(),
    });
  }

  function refuseAll() {
    persist({
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    });
  }

  function saveChoices() {
    persist({
      ...prefs,
      necessary: true,
      preferences: showPreferences ? prefs.preferences : false,
      analytics: analyticsActive ? prefs.analytics : false,
      marketing: marketingActive ? prefs.marketing : false,
      updatedAt: new Date().toISOString(),
    });
  }

  function toggleCategory(key: ToggleCategory, value: boolean) {
    if (key === "analytics" && !analyticsActive) return;
    if (key === "marketing" && !marketingActive) return;
    setPrefs((prev) => ({ ...prev, [key]: value }));
  }

  const showOverlay = open || bannerVisible;
  if (!showOverlay) return null;

  const canDismiss = open || !bannerVisible;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6"
      role="presentation"
    >
      {canDismiss ? (
        <button
          type="button"
          className="absolute inset-0 bg-dark/50 backdrop-blur-[2px]"
          aria-label="Fermer le panneau cookies"
          onClick={() => setOpen(false)}
        />
      ) : (
        <div className="absolute inset-0 bg-dark/50 backdrop-blur-[2px]" />
      )}

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative z-10 flex max-h-[min(92vh,640px)] w-full max-w-[28rem] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_80px_-28px_rgba(9,10,20,0.55)]"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-border/80 px-5 py-4 sm:px-6">
          <h2
            id={titleId}
            className="text-lg font-extrabold tracking-tight text-foreground sm:text-xl"
          >
            Gérer mes cookies
          </h2>
          {canDismiss ? (
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/80 text-muted transition-colors hover:border-violet/40 hover:text-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/40"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            </button>
          ) : null}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          <p
            id={descriptionId}
            className="text-sm leading-relaxed text-foreground/80"
          >
            Valeadata utilise des technologies nécessaires au bon fonctionnement
            du site et peut, avec votre accord, utiliser d&apos;autres
            technologies pour mesurer son audience ou améliorer ses campagnes.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Vous pouvez modifier vos choix à tout moment.
          </p>

          <div className="mt-5 space-y-3">
            {/* Nécessaires */}
            <section className="rounded-xl border border-border bg-[#fbfbfe] px-4 py-3.5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-bold tracking-wide text-foreground uppercase">
                  Nécessaires
                </h3>
                <span className="shrink-0 rounded-full bg-dark/90 px-2.5 py-1 text-[11px] font-semibold text-white">
                  Toujours actif
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Ces technologies sont indispensables au fonctionnement, à la
                sécurité du site et à la mémorisation de vos préférences. Elles
                ne peuvent pas être désactivées lorsqu&apos;elles sont
                strictement nécessaires.
              </p>
            </section>

            {/* Mesure d'audience */}
            <CategoryRow
              title="Mesure d'audience"
              description="Ces technologies nous permettent de comprendre comment le site est utilisé afin d'en améliorer les performances et l'expérience."
              inactiveNote="Aucun outil de mesure d'audience actuellement actif."
              instrumented={analyticsActive}
              checked={analyticsActive ? prefs.analytics : false}
              toggleId={analyticsId}
              onChange={(value) => toggleCategory("analytics", value)}
            />

            {/* Publicité & acquisition */}
            <CategoryRow
              title="Publicité & acquisition"
              description="Ces technologies peuvent permettre de mesurer l'efficacité de nos campagnes publicitaires, d'attribuer des conversions et d'optimiser nos actions d'acquisition."
              inactiveNote="Aucun outil publicitaire actuellement actif."
              instrumented={marketingActive}
              checked={marketingActive ? prefs.marketing : false}
              toggleId={marketingId}
              onChange={(value) => toggleCategory("marketing", value)}
            />

            {/* Préférences — uniquement si instrumenté */}
            {showPreferences ? (
              <CategoryRow
                title="Préférences"
                description="Ces technologies permettent de mémoriser certains choix afin d'améliorer votre expérience sur le site."
                inactiveNote=""
                instrumented
                checked={prefs.preferences}
                toggleId={`${titleId}-preferences`}
                onChange={(value) =>
                  setPrefs((prev) => ({ ...prev, preferences: value }))
                }
              />
            ) : null}
          </div>

          <div className="mt-5 flex flex-col gap-1.5 text-xs text-muted">
            <Link
              href="/politique-cookies"
              className="font-medium text-violet underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/40 rounded-sm w-fit"
              onClick={() => setOpen(false)}
            >
              En savoir plus sur l&apos;utilisation des cookies
            </Link>
            <Link
              href="/politique-confidentialite"
              className="font-medium text-violet underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/40 rounded-sm w-fit"
              onClick={() => setOpen(false)}
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>

        <div className="grid shrink-0 grid-cols-1 gap-2 border-t border-border/80 bg-white px-5 py-4 sm:grid-cols-3 sm:px-6">
          <button
            type="button"
            onClick={refuseAll}
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-3 text-sm font-semibold text-foreground transition-colors hover:border-dark/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/40"
          >
            Tout refuser
          </button>
          <button
            type="button"
            onClick={saveChoices}
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-3 text-sm font-semibold text-foreground transition-colors hover:border-violet/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/40"
          >
            Enregistrer mes choix
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex h-11 items-center justify-center rounded-full border border-violet bg-violet px-3 text-sm font-semibold text-white transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/40 focus-visible:ring-offset-2"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}

function CategoryRow({
  title,
  description,
  inactiveNote,
  instrumented,
  checked,
  toggleId,
  onChange,
}: {
  title: string;
  description: string;
  inactiveNote: string;
  instrumented: boolean;
  checked: boolean;
  toggleId: string;
  onChange: (value: boolean) => void;
}) {
  return (
    <section className="rounded-xl border border-border bg-[#fbfbfe] px-4 py-3.5">
      <div className="flex items-start justify-between gap-3">
        <label htmlFor={toggleId} className="min-w-0 cursor-default">
          <span className="block text-sm font-bold tracking-wide text-foreground uppercase">
            {title}
          </span>
        </label>
        <Toggle
          id={toggleId}
          label={title}
          checked={checked}
          disabled={!instrumented}
          onChange={onChange}
        />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      {!instrumented && inactiveNote ? (
        <p className="mt-2 text-xs text-muted/80">{inactiveNote}</p>
      ) : null}
    </section>
  );
}

function Toggle({
  id,
  label,
  checked,
  disabled,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-7 w-12 shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/40 focus-visible:ring-offset-2",
        checked ? "bg-violet" : "bg-border",
        disabled && "cursor-not-allowed opacity-55",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform",
          checked && "translate-x-5",
        )}
      />
    </button>
  );
}
