import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";

const features = [
  "Tarifs",
  "Abonnements",
  "Informations produits",
  "Qualification des besoins",
  "Prise de rendez-vous",
];

export function ChatbotPromo() {
  return (
    <section className="bg-background px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-violet px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold tracking-[0.12em] uppercase">
              <Bot className="h-3.5 w-3.5" />
              CHATBOT IA
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Votre assistant
              <br />
              commercial disponible
              <br />
              24h/24.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
              Notre chatbot intégré répond instantanément aux questions de vos
              prospects et peut être connecté à vos campagnes pour améliorer vos
              taux de conversion.
            </p>
            <PrimaryButton
              href="/chatbot"
              variant="white"
              size="lg"
              className="mt-8"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              Découvrir le chatbot
            </PrimaryButton>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 sm:gap-4">
              {features.filter((_, i) => i % 2 === 0).map((label) => (
                <FeatureChip key={label} label={label} />
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:gap-4">
              {features.filter((_, i) => i % 2 === 1).map((label) => (
                <FeatureChip key={label} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3.5 backdrop-blur-sm">
      <Sparkles className="h-4 w-4 shrink-0 text-white" />
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
