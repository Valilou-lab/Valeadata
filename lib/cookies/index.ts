export {
  NON_ESSENTIAL_TRACKERS_ACTIVE,
  COOKIE_CONSENT_OPEN_EVENT,
  CONSENT_STORAGE_KEY,
  DEFAULT_CONSENT,
  consentScripts,
  hasNonEssentialTrackers,
  isCategoryInstrumented,
  openCookiePreferences,
  readConsent,
  writeConsent,
  canLoadCategory,
  applyConsentScripts,
} from "@/lib/cookies/consent";

export type {
  ConsentCategory,
  ConsentPreferences,
  ConsentScriptDefinition,
} from "@/lib/cookies/types";
