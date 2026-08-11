import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ManageCookiesButton } from "@/components/ManageCookiesButton";
import { navLinks } from "@/lib/nav";

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  { href: "/politique-cookies", label: "Politique de cookies" },
] as const;

const linkClass =
  "text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm";

const titleClass =
  "text-xs font-bold tracking-[0.14em] text-violet uppercase";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M6.94 8.5H3.75V20h3.19V8.5ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 20h-3.19v-5.86c0-1.63-.58-2.74-2.03-2.74-1.11 0-1.77.75-2.06 1.47-.11.26-.14.62-.14.99V20H9.64s.04-10.3 0-11.5h3.19v1.63c.42-.65 1.18-1.58 2.88-1.58 2.1 0 3.68 1.38 3.68 4.34V20Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:px-8">
        {/* Colonne 1 — Valeadata */}
        <div>
          <Logo size="sm" tone="onDark" orientation="horizontal" />
          <p className="mt-5 text-sm font-semibold text-white">
            Acquisition, data & intelligence conversationnelle.
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
            Des campagnes pensées autour de votre réalité commerciale, de
            l&apos;acquisition à la conversion.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/valentine-damame-20b40b66/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Valentine Damame"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-violet/40 hover:bg-violet/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/50"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:contact@valeadata.com"
              aria-label="Envoyer un email à contact@valeadata.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-violet/40 hover:bg-violet/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/50"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Colonne 2 — Navigation */}
        <div>
          <p className={titleClass}>Navigation</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 — Contact */}
        <div>
          <p className={titleClass}>Nous contacter</p>
          <div className="mt-4 space-y-3 text-sm">
            <p className="font-semibold text-white">VALEADATA SL</p>
            <p>
              <span className="block text-xs tracking-wide text-white/40 uppercase">
                Email
              </span>
              <a href="mailto:contact@valeadata.com" className={linkClass}>
                contact@valeadata.com
              </a>
            </p>
            <p className="text-white/55">
              France · Espagne · Autres marchés sur étude
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-violet transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/50 rounded-sm"
            >
              Parler de mon projet →
            </Link>
          </div>
        </div>
      </div>

      {/* Barre juridique */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8">
          <p className="text-xs text-white/45">
            © 2026 VALEADATA SL — Tous droits réservés.
          </p>
          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`${linkClass} text-xs`}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <ManageCookiesButton
                className={`${linkClass} text-xs cursor-pointer`}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
