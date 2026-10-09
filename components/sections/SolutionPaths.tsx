import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionHeading } from "@/components/SectionHeading";

const solutionsHref = "/solutions";

export function SolutionPaths() {
  return (
    <section
      id="nos-solutions"
      aria-labelledby="nos-solutions-title"
      className="scroll-mt-24 bg-white px-4 pt-4 pb-16 sm:px-6 sm:pt-6 sm:pb-20 lg:px-8 lg:pt-8 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Nos solutions"
          title={
            <span id="nos-solutions-title">
              Deux approches. Un seul objectif : votre croissance.
            </span>
          }
          description="Vous souhaitez recevoir des opportunités commerciales prêtes à exploiter ou développer votre propre acquisition ? Nous avons la solution adaptée à votre activité."
        />

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:mt-14">
          <article className="relative flex h-full flex-col rounded-[1.75rem] border border-border bg-[#fcfbff] px-7 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="flex items-start justify-between gap-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-violet px-3.5 py-1.5 text-[12px] font-bold tracking-[0.12em] text-white uppercase">
                <span className="text-white/70">01</span>
                Marque blanche
              </p>
              <FlowMark />
            </div>
            <p className="mt-5 text-[15px] font-semibold leading-snug text-foreground">
              Vous recevez des leads. Nous gérons l&apos;acquisition.
            </p>

            <h3 className="mt-6 max-w-sm text-[1.55rem] font-extrabold leading-[1.15] tracking-tight text-balance sm:text-[1.7rem]">
              Vos prochains clients, sans gérer les campagnes.
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
              Nous sourçons, qualifions et transmettons des leads adaptés à vos
              besoins commerciaux.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Secteurs">
              {["Travaux", "Assurance", "Services"].map((item) => (
                <li key={item}>
                  <span className="inline-flex rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-foreground/75">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <p className="text-[13px] leading-snug text-muted">
                Pour les entreprises qui veulent acheter des leads prêts à traiter.
              </p>
              <div className="mt-5">
                <PrimaryButton
                  href={solutionsHref}
                  size="lg"
                  className="w-full sm:w-auto"
                  iconRight={<ArrowRight className="h-4 w-4" aria-hidden />}
                >
                  Découvrir nos leads
                </PrimaryButton>
              </div>
            </div>
          </article>

          <article className="relative flex h-full flex-col rounded-[1.75rem] bg-dark px-7 py-8 text-white sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="flex items-start justify-between gap-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-violet px-3.5 py-1.5 text-[12px] font-bold tracking-[0.12em] text-white uppercase">
                <span className="text-white/70">02</span>
                Marque propre
              </p>
              <GrowthMark />
            </div>
            <p className="mt-5 text-[15px] font-semibold leading-snug text-white">
              Votre marque, nos campagnes, votre croissance.
            </p>

            <h3 className="mt-6 max-w-sm text-[1.55rem] font-extrabold leading-[1.15] tracking-tight text-balance text-white sm:text-[1.7rem]">
              Votre marque. Notre moteur de croissance.
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/65">
              Nous construisons, créons et pilotons votre acquisition pour
              générer des prospects, des rendez-vous et des ventes.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Expertises">
              {["Lead Gen", "Rendez-vous", "E-commerce"].map((item) => (
                <li key={item}>
                  <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <p className="text-[13px] leading-snug text-white/55">
                Pour les entreprises qui veulent développer leur acquisition avec un partenaire.
              </p>
              <div className="mt-5">
                <PrimaryButton
                  href={solutionsHref}
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto"
                  iconRight={<ArrowRight className="h-4 w-4" aria-hidden />}
                >
                  Développer mon acquisition
                </PrimaryButton>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function FlowMark() {
  return (
    <svg viewBox="0 0 72 28" className="mt-0.5 h-6 w-16 shrink-0" aria-hidden>
      <path
        d="M4 6C16 6 18 14 30 14M4 14H30M4 22C16 22 18 14 30 14"
        stroke="#8a6bff"
        strokeOpacity="0.55"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="4" cy="6" r="2" fill="#8a6bff" />
      <circle cx="4" cy="14" r="2" fill="#8a6bff" />
      <circle cx="4" cy="22" r="2" fill="#8a6bff" />
      <rect x="36" y="6" width="32" height="16" rx="8" fill="white" stroke="#8a6bff" strokeOpacity="0.35" />
      <circle cx="48" cy="14" r="2.2" fill="#8a6bff" />
    </svg>
  );
}

function GrowthMark() {
  return (
    <svg viewBox="0 0 72 28" className="mt-0.5 h-6 w-16 shrink-0" aria-hidden>
      <path d="M4 22H68" stroke="white" strokeOpacity="0.16" strokeLinecap="round" />
      <path
        d="M6 20C18 18 24 16 34 13C46 9 54 10 66 5"
        stroke="#8a6bff"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="66" cy="5" r="2.2" fill="#8a6bff" />
    </svg>
  );
}
