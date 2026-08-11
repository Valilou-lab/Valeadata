export type ConsentCategory =
  | "necessary"
  | "preferences"
  | "analytics"
  | "marketing";

export type ConsentPreferences = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string | null;
};

export type ConsentScriptDefinition = {
  id: string;
  category: Exclude<ConsentCategory, "necessary">;
  /** Charge le script uniquement après consentement de la catégorie */
  load: () => void;
  /** Retire / désactive le script si le consentement est retiré */
  unload?: () => void;
};
