"use client";

import { openCookiePreferences } from "@/lib/cookies";

/**
 * Rouvre le gestionnaire de consentement cookies (footer).
 */
export function ManageCookiesButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => openCookiePreferences()}
      className={className}
    >
      Gérer mes cookies
    </button>
  );
}
