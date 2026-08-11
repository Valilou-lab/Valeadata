import { ArrowRight, CalendarDays } from "lucide-react";
import { Logo } from "@/components/Logo";
import { PrimaryButton } from "@/components/PrimaryButton";
import { bookingHref } from "@/lib/nav";

export function Hero() {
  return (
    <section className="dot-texture relative overflow-hidden">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pt-14 pb-12 text-center sm:px-6 sm:pt-16 sm:pb-14 lg:px-8 lg:pt-16 lg:pb-16">
        <Logo size="lg" href={null} />

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-sm text-muted shadow-[0_1px_0_rgba(9,10,20,0.02)]">
          <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden />
          Assurances – Home – Services
        </div>

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
          Des leads <span className="text-violet">sur-mesure</span>,
          <br />
          validés et optimisés
          <br />
          pour votre croissance.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          De l&apos;acquisition à la conversion, Valeadata déploie vos campagnes
          sur les principales plateformes du marché, avec des parcours
          conformes aux nouvelles exigences européennes. Nos solutions
          conversationnelles s&apos;intègrent à vos campagnes ou directement à
          votre activité pour qualifier et convertir davantage de prospects.
        </p>

        <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
          <PrimaryButton
            href={bookingHref}
            size="lg"
            className="w-full sm:w-auto"
            iconLeft={<CalendarDays className="h-4 w-4" />}
          >
            Prendre rendez-vous
          </PrimaryButton>
          <PrimaryButton
            href="/solutions"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            iconRight={<ArrowRight className="h-4 w-4" />}
          >
            Découvrir nos solutions
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
