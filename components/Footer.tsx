import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <Logo size="sm" />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Acquisition de leads exclusifs, Double Opt-In SMS et automatisation
            data pour les acteurs de l&apos;énergie, de la rénovation et des
            services.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-violet uppercase">
            Navigation
          </p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-violet uppercase">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a
                href="mailto:hello@valeadata.com"
                className="hover:text-foreground"
              >
                hello@valeadata.com
              </a>
            </li>
            <li>
              <a href="tel:+34603034938" className="hover:text-foreground">
                +34 603 034 938
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Valeadata. Tous droits réservés.</p>
          <p>Leads exclusifs · Double Opt-In · Chatbot IA</p>
        </div>
      </div>
    </footer>
  );
}
