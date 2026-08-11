import type { Metadata } from "next";
import {
  Bot,
  Brain,
  Cpu,
  MessageSquare,
  Plug,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Chatbot } from "@/components/chatbot";
import { FeatureCard } from "@/components/FeatureCard";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Chatbot IA",
  description:
    "Heyleo, le chatbot IA conversationnel Valeadata : qualification, prise de rendez-vous et hand-off humain 24/7.",
};

const capabilities: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Entraîné sur votre offre",
    description:
      "On nourrit Leo avec votre catalogue, vos FAQ, vos scripts de qualification et vos politiques.",
    icon: Brain,
  },
  {
    title: "Ton de marque sur-mesure",
    description:
      "Tutoiement ou vouvoiement, niveau de langage, signature, emojis : votre voix, pas la nôtre.",
    icon: Sparkles,
  },
  {
    title: "Intégrations natives",
    description:
      "CRM, calendrier, webhook, dialer : Leo pousse les leads qualifiés directement dans vos outils.",
    icon: Plug,
  },
  {
    title: "Multicanal",
    description:
      "Site, WhatsApp, Messenger, Instagram, e-mail. Une même IA, partout où vos prospects sont.",
    icon: MessageSquare,
  },
  {
    title: "Apprentissage continu",
    description:
      "Chaque conversation enrichit le modèle. Vos taux de qualification montent semaine après semaine.",
    icon: Cpu,
  },
  {
    title: "Hand-off humain 24/7",
    description:
      "Quand Leo détecte un signal fort, votre conseiller dédié reprend la main, jour et nuit.",
    icon: Bot,
  },
];

export default function ChatbotPage() {
  return (
    <main>
      <section className="dot-texture relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-light px-3.5 py-1.5 text-xs font-bold tracking-[0.12em] text-violet uppercase">
              <Bot className="h-3.5 w-3.5" />
              CHATBOT IA
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Heyleo, votre IA
              <br />
              conversationnelle,
              <br />
              <span className="text-violet">sur-mesure.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Un chatbot pensé pour <strong className="font-semibold text-foreground">votre</strong> métier :
              entraîné sur vos produits, calibré sur vos critères de
              qualification, branché à vos outils. Et bien sûr, supervisé par un
              conseiller humain 24/7.
            </p>
            <PrimaryButton href="#demo" size="lg" className="mt-8">
              Essayer la démo
            </PrimaryButton>
          </div>

          <div id="demo">
            <Chatbot />
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="CAPACITÉS"
            title={
              <>
                Un assistant adaptable à
                <br className="hidden sm:block" /> chaque client.
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                iconVariant="square"
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
