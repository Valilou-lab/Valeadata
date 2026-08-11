import Image from "next/image";
import {
  Headphones,
  TrendingUp,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";

type Commitment = {
  title: string;
  description: string;
  icon?: LucideIcon;
  iconNode?: ReactNode;
  iconPlain?: boolean;
};

const commitments: Commitment[] = [
  {
    icon: Headphones,
    title: "Accompagnement personnalisé",
    description:
      "Un interlocuteur unique qui suit vos performances et ajuste les campagnes selon vos objectifs.",
  },
  {
    title: "SMS / WhatsApp intégré sans surcoût",
    description:
      "Tous nos leads peuvent être accompagnés d'un SMS ou WhatsApp de confirmation afin d'améliorer leur joignabilité.",
    iconPlain: true,
    iconNode: (
      <Image
        src="/icon-whatsapp.png"
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 object-contain"
      />
    ),
  },
  {
    icon: TrendingUp,
    title: "Analyse & optimisation continue",
    description:
      "Nous suivons vos retours terrain pour améliorer continuellement la qualité et le ROI.",
  },
  {
    icon: ArrowUpRight,
    title: "Croissance pilotée",
    description:
      "Nous adaptons les volumes et les sources d'acquisition selon vos capacités commerciales.",
  },
];

export function Commitments() {
  return (
    <section className="bg-background px-4 pt-8 pb-8 sm:px-6 sm:pt-10 sm:pb-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          className="max-w-4xl"
          eyebrow="POURQUOI VALEADATA ?"
          title={
            <>
              Quatre engagements qui font
              <br className="hidden sm:block" /> la différence.
            </>
          }
          titleClassName="mt-3 text-3xl sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
          eyebrowClassName="text-base sm:text-lg tracking-[0.18em]"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              iconNode={item.iconNode}
              iconPlain={item.iconPlain}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
