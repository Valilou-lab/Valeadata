import { ArrowRight, Check } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";

const leadsHref = "/contact?demande=leads";
const accompagnementHref = "/contact?demande=accompagnement";

const whiteLabelPoints = [
  "Facturation au lead",
  "Tarifs selon le secteur et la qualification",
  "Indicateurs de conversion sur demande",
] as const;

const ownBrandPoints = [
  "Setup adapté à votre projet",
  "Accompagnement selon les fonctionnalités activées",
  "Outils inclus et budget défini ensemble",
] as const;

export function PricingModels() {
  return (
    <section
      id="tarification"
      aria-labelledby="tarification-title"
      className="scroll-mt-24 bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-violet uppercase">
            Une tarification adaptée à vos objectifs
          </p>
          <h2
            id="tarification-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            Bonne question. Parlons budget !
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Deux façons de travailler ensemble, deux modèles de facturation. Et
            toujours la même règle : vous savez ce que vous payez.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:mt-14">
          <article className="flex h-full flex-col rounded-[1.75rem] border border-border bg-white px-7 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="text-xs font-bold tracking-[0.14em] text-violet uppercase">
              Marque blanche
            </p>
            <h3 className="mt-4 text-[1.55rem] font-extrabold leading-[1.15] tracking-tight text-balance sm:text-[1.7rem]">
              Un lead. Un prix. C&apos;est tout.
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Nos campagnes tournent déjà sur plusieurs secteurs. Vous achetez
              des leads selon vos besoins, avec un tarif défini à l&apos;avance.
            </p>

            <ul className="mt-6 space-y-3 rounded-2xl bg-violet-light px-4 py-4">
              {whiteLabelPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-snug text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet" strokeWidth={2.25} aria-hidden />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <PrimaryButton
                href={leadsHref}
                size="lg"
                className="w-full sm:w-auto"
                iconRight={<ArrowRight className="h-4 w-4" aria-hidden />}
              >
                Connaître nos tarifs
              </PrimaryButton>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-[1.75rem] bg-dark px-7 py-8 text-white sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="text-xs font-bold tracking-[0.14em] text-violet-soft uppercase">
              Marque propre
            </p>
            <h3 className="mt-4 text-[1.55rem] font-extrabold leading-[1.15] tracking-tight text-balance text-white sm:text-[1.7rem]">
              Un accompagnement sur mesure. Pas une facture à rallonge.
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">
              Oui, une stratégie d&apos;acquisition complète demande un
              investissement initial. Mais notre objectif est simple : que
              chaque euro investi serve votre croissance.
            </p>

            <ul className="mt-6 space-y-3 rounded-2xl bg-dark-card px-4 py-4">
              {ownBrandPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-snug text-white/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-soft" strokeWidth={2.25} aria-hidden />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <PrimaryButton
                href={accompagnementHref}
                size="lg"
                className="w-full sm:w-auto"
                iconRight={<ArrowRight className="h-4 w-4" aria-hidden />}
              >
                Obtenir mon devis gratuit
              </PrimaryButton>
            </div>
          </article>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted">
          Pas de frais cachés. Une proposition claire avant tout engagement. Le
          budget publicitaire est défini séparément lorsque nous pilotons vos
          campagnes.
        </p>
      </div>
    </section>
  );
}
