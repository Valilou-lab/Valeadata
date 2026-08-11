import { ArrowRight, Rocket, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionHeading } from "@/components/SectionHeading";
import { bookingHref } from "@/lib/nav";

const steps: Array<{
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    step: 1,
    title: "Acquisition",
    description:
      "Nous générons des prospects via les plateformes les plus performantes.",
    icon: Rocket,
  },
  {
    step: 2,
    title: "Validation",
    description: "Double Opt-In SMS et contrôles qualité automatisés.",
    icon: ShieldCheck,
  },
  {
    step: 3,
    title: "Livraison",
    description: "Transmission instantanée via CRM ou API.",
    icon: Zap,
  },
  {
    step: 4,
    title: "Optimisation",
    description:
      "Analyse des retours commerciaux et amélioration continue.",
    icon: TrendingUp,
  },
];

export function Methodology() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="MÉTHODOLOGIE"
          title={
            <>
              Quatre étapes, un seul
              <br className="hidden sm:block" /> objectif : votre ROI.
            </>
          }
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ step, title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-border bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet text-sm font-bold text-white">
                  {step}
                </span>
                <Icon className="h-5 w-5 text-violet" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton
            href={bookingHref}
            size="lg"
            iconRight={<ArrowRight className="h-4 w-4" />}
          >
            Parlons de votre acquisition
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
