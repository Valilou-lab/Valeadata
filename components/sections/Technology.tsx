import { Check, RefreshCw, Shield } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";

const techCards = [
  {
    icon: Shield,
    title: "Double Opt-In SMS",
    description:
      "Le prospect valide son consentement via SMS après son inscription.",
    points: [
      "Consentement renforcé",
      "Leads plus engagés",
      "Réduction des faux formulaires",
      "Meilleure joignabilité",
    ],
  },
  {
    icon: RefreshCw,
    title: "API de réactivation",
    description:
      "Notre API permet de relancer automatiquement les prospects que vos équipes n'ont pas réussi à joindre.",
    points: [
      "Seconde chance de conversion",
      "Réengagement automatique",
      "Valorisation maximale du budget acquisition",
    ],
  },
];

export function Technology() {
  return (
    <section className="bg-dark px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tone="dark"
          eyebrow="NOTRE TECHNOLOGIE"
          title={
            <>
              Double Opt-In SMS & API de
              <br className="hidden sm:block" /> réactivation.
            </>
          }
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {techCards.map((card) => (
            <FeatureCard
              key={card.title}
              tone="dark"
              iconVariant="square"
              icon={card.icon}
              title={card.title}
              description={card.description}
            >
              <ul className="mt-6 space-y-3">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[15px] text-white/80"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </FeatureCard>
          ))}
        </div>

        <blockquote className="mx-auto mt-14 max-w-4xl text-center text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-[2.1rem] lg:leading-snug">
          « Chaque lead non contacté représente une opportunité perdue. Notre
          technologie lui donne une{" "}
          <span className="text-violet">seconde vie.</span> »
        </blockquote>
      </div>
    </section>
  );
}
