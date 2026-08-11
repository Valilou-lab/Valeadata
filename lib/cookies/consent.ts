import type {
  ConsentCategory,
  ConsentPreferences,
  ConsentScriptDefinition,
} from "@/lib/cookies/types";

/** Événement émis par « Gérer mes cookies » (footer) */
export const COOKIE_CONSENT_OPEN_EVENT = "valeadata:open-cookie-preferences";

/** Stockage des préférences après choix explicite de l'utilisateur */
export const CONSENT_STORAGE_KEY = "valeadata_cookie_consent";

export const DEFAULT_CONSENT: ConsentPreferences = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
  updatedAt: null,
};

/**
 * Registre des scripts soumis au consentement.
 * Ajouter ici chaque tracker avant toute injection dans le DOM.
 * Ne jamais appeler `load` sans vérifier `canLoadCategory`.
 */
export const consentScripts: ConsentScriptDefinition[] = [
  // Exemple futur (ne pas activer sans installation réelle) :
  // {
  //   id: "ga4",
  //   category: "analytics",
  //   load: () => { /* injecter */ },
  //   unload: () => { /* retirer */ },
  // },
];

/** True dès qu'au moins un script non essentiel est enregistré */
export function hasNonEssentialTrackers(): boolean {
  return consentScripts.length > 0;
}

export function isCategoryInstrumented(
  category: Exclude<ConsentCategory, "necessary">,
): boolean {
  return consentScripts.some((script) => script.category === category);
}

/**
 * Bannière de première visite : uniquement si des trackers non essentiels
 * sont réellement enregistrés dans `consentScripts`.
 */
export const NON_ESSENTIAL_TRACKERS_ACTIVE = hasNonEssentialTrackers();

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_OPEN_EVENT));
}

export function readConsent(): ConsentPreferences {
  if (typeof window === "undefined") return { ...DEFAULT_CONSENT };

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_CONSENT };
    const parsed = JSON.parse(raw) as Partial<ConsentPreferences>;
    return {
      necessary: true,
      preferences: Boolean(parsed.preferences),
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : null,
    };
  } catch {
    return { ...DEFAULT_CONSENT };
  }
}

export function writeConsent(
  prefs: Omit<ConsentPreferences, "necessary" | "updatedAt"> & {
    updatedAt?: string | null;
  },
): ConsentPreferences {
  const next: ConsentPreferences = {
    necessary: true,
    // Ne jamais activer une catégorie non instrumentée
    preferences: isCategoryInstrumented("preferences")
      ? Boolean(prefs.preferences)
      : false,
    analytics: isCategoryInstrumented("analytics")
      ? Boolean(prefs.analytics)
      : false,
    marketing: isCategoryInstrumented("marketing")
      ? Boolean(prefs.marketing)
      : false,
    updatedAt: prefs.updatedAt ?? new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
  }

  return next;
}

export function canLoadCategory(
  category: keyof Omit<ConsentPreferences, "updatedAt">,
  prefs: ConsentPreferences = readConsent(),
): boolean {
  if (category === "necessary") return true;
  if (!isCategoryInstrumented(category)) return false;
  return Boolean(prefs[category]);
}

/**
 * Applique le consentement : charge les scripts autorisés,
 * décharge ceux dont le consentement a été retiré.
 */
export function applyConsentScripts(prefs: ConsentPreferences = readConsent()) {
  for (const script of consentScripts) {
    if (canLoadCategory(script.category, prefs)) {
      script.load();
    } else {
      script.unload?.();
    }
  }
}
