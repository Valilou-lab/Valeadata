import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";

const outcomes = [
  "Leads qualifiés",
  "Rendez-vous commerciaux",
  "Ventes e-commerce",
] as const;

const advantages = [
  "Acquisition de A à Z",
  "Pilotage transparent",
  "Résultats mesurables",
] as const;

export function Hero() {
  return (
    <section className="dot-texture relative flex min-h-[calc(100dvh-4.75rem)] flex-col overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl flex-1 content-center items-center gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20 xl:gap-16">
        <div className="hero-fade-up flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="text-[10px] font-bold tracking-[0.12em] text-violet uppercase sm:text-xs sm:tracking-[0.16em]">
            Acquisition digitale · Performance · Transparence
          </p>

          <ul className="mt-4 flex w-full flex-wrap justify-center gap-2 lg:justify-start" aria-label="Résultats générés">
            {outcomes.map((item) => (
              <li key={item}>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-foreground/75 sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden />
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <h1 className="mt-5 text-[1.35rem] font-extrabold leading-[1.15] tracking-tight sm:text-[2rem] md:text-[2.25rem] lg:text-[1.65rem] lg:leading-[1.12] xl:text-[2.05rem]">
            Des clics, c&apos;est bien.
            <br />
            Des prospects, c&apos;est mieux.
            <br />
            <span className="text-violet">Les résultats, c&apos;est notre métier</span>
          </h1>

          <p className="mt-6 w-full max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Fini les campagnes qui tournent dans leur coin. Chez VALEADATA, nous
            réunissons stratégie, outils et expertise pour piloter votre
            acquisition ensemble, en toute transparence. Du premier clic
            jusqu&apos;à la conversion.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <PrimaryButton href="/solutions" size="lg" className="w-full sm:w-auto">
              Découvrir nos solutions
            </PrimaryButton>
            <PrimaryButton
              href="/contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              iconRight={<ArrowUpRight className="h-4 w-4" aria-hidden />}
            >
              Parlons de votre acquisition
            </PrimaryButton>
          </div>

          <ul className="mt-8 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2.5 lg:flex-nowrap lg:justify-start lg:gap-x-3.5">
            {advantages.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[13px] font-semibold whitespace-nowrap text-foreground"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-soft text-violet">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <CockpitVisual />
      </div>
    </section>
  );
}

function CockpitVisual() {
  return (
    <Image
      src="/images/cockpit-demo.png"
      alt="Cockpit démo VALEADATA montrant les performances d’acquisition"
      width={874}
      height={662}
      priority
      sizes="(min-width: 1024px) 36rem, 100vw"
      className="mx-auto h-auto w-full rounded-2xl object-contain [filter:drop-shadow(0_16px_28px_rgba(9,10,20,0.16))]"
    />
  );
}
