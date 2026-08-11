import type { ReactNode } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { NoCopy } from "@/components/NoCopy";

type LegalPageProps = {
  title: string;
  description: string;
  children?: ReactNode;
  /** Empêche la sélection / copie du contenu de la page */
  noCopy?: boolean;
};

/**
 * Shell commun des pages juridiques.
 * Le contenu légal définitif sera ajouté plus tard — pas de faux texte.
 */
export function LegalPage({
  title,
  description,
  children,
  noCopy = false,
}: LegalPageProps) {
  const content = (
    <main className="bg-background">
      <article className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none sticky top-24 z-20 -mb-10 flex h-0 justify-end">
          <Link
            href="/"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-white/95 text-foreground/65 shadow-sm backdrop-blur-sm transition-colors hover:border-violet/35 hover:text-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/40"
            aria-label="Fermer et revenir à l'accueil"
            title="Fermer"
          >
            <X className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </Link>
        </div>

        <p className="text-xs font-bold tracking-[0.14em] text-violet uppercase">
          Informations légales
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>

        <div className="mt-10 space-y-6 border-t border-border pt-10 text-[15px] leading-relaxed text-foreground/85 sm:mt-12 sm:pt-12">
          {children ?? (
            <p className="rounded-2xl border border-dashed border-border bg-white px-5 py-6 text-muted">
              Contenu juridique à venir. Cette page est prête à recevoir le
              texte définitif.
            </p>
          )}
        </div>
      </article>
    </main>
  );

  return noCopy ? <NoCopy>{content}</NoCopy> : content;
}
