import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Headphones,
  Hammer,
  Nut,
  RefreshCw,
  Shield,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionHeading } from "@/components/SectionHeading";
import { bookingHref } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Leads qualifiés sur-mesure pour l'énergie, la rénovation et les services. Double Opt-In SMS, API de réactivation et conseiller dédié.",
};

const sectors: Array<{
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}> = [
  {
    title: "Énergie",
    description:
      "Photovoltaïque, fournisseurs d'électricité et de gaz, autoconsommation, batteries.",
    points: [
      "Propriétaires éligibles",
      "Projet 0–6 mois",
      "Géolocalisation fine",
    ],
    icon: Nut,
  },
  {
    title: "Rénovation",
    description:
      "Pompe à chaleur, isolation, fenêtres, toiture, salle de bain, rénovation globale, osmoseur.",
    points: ["Propriétaires uniquement", "Budget validé", "Projet immédiat"],
    icon: Hammer,
  },
  {
    title: "Services",
    description:
      "Assurance, mutuelle, télécoms, formation, défiscalisation, services aux entreprises.",
    points: ["B2C & B2B", "Critères sur-mesure", "Exclusivité possible"],
    icon: Headphones,
  },
];

const offerItems: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Double Opt-In SMS",
    description:
      "Chaque lead valide son consentement par SMS avant livraison.",
    icon: Shield,
  },
  {
    title: "API de réactivation",
    description:
      "Relance automatique des prospects non joints par vos équipes.",
    icon: RefreshCw,
  },
  {
    title: "Chatbot IA intégré",
    description:
      "Disponible 24/7 pour qualifier et prendre des rendez-vous.",
    icon: Sparkles,
  },
  {
    title: "Conseiller dédié",
    description:
      "Un interlocuteur unique qui pilote vos performances.",
    icon: Headphones,
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="grid-texture relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-sm text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden />
            Nos solutions
          </div>
          <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            Des leads <span className="text-violet">qualifiés</span>, sur-
            <br className="hidden sm:block" />
            mesure pour chaque secteur.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Énergie, rénovation, services : nous calibrons l&apos;acquisition, la
            validation et la livraison selon votre cahier des charges.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {sectors.map(({ title, description, points, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-border bg-white p-7 shadow-[0_16px_48px_-36px_rgba(9,10,20,0.35)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-light text-violet">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-extrabold tracking-tight">
                  {title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {description}
                </p>
                <ul className="mt-6 space-y-3">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[15px] text-foreground/85"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="CE QUE VOUS OBTENEZ"
            title={
              <>
                Une offre complète, prête à
                <br className="hidden sm:block" /> brancher.
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offerItems.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Prêt à booster votre acquisition ?
          </h2>
          <div className="mt-8 flex justify-center">
            <PrimaryButton
              href={bookingHref}
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              Prendre rendez-vous
            </PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
