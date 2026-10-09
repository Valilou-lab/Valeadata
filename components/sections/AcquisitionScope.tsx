import {
  AppWindow,
  Bot,
  ChartColumnIncreasing,
  Clapperboard,
  LayoutGrid,
  Scan,
  Target,
  type LucideIcon,
} from "lucide-react";

const expertises: {
  title: string;
  text: string;
  short: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Stratégie",
    text: "Audit, conseil et plan d'acquisition.",
    short: "Audit & conseil",
    icon: Target,
  },
  {
    title: "Tracking & Pixels",
    text: "Installation et suivi des conversions.",
    short: "Suivi des conversions",
    icon: Scan,
  },
  {
    title: "Créations publicitaires",
    text: "Visuels, vidéos et tests créatifs.",
    short: "Visuels & vidéos",
    icon: Clapperboard,
  },
  {
    title: "Landing pages",
    text: "Création et optimisation des parcours.",
    short: "Parcours optimisés",
    icon: AppWindow,
  },
  {
    title: "Chatbot & Automatisation",
    text: "Qualification et parcours intelligents.",
    short: "Qualification des leads",
    icon: Bot,
  },
  {
    title: "Monitoring",
    text: "Suivi des campagnes et performances.",
    short: "Suivi des performances",
    icon: ChartColumnIncreasing,
  },
];

export function AcquisitionScope() {
  return (
    <section
      id="acquisition-de-a-a-z"
      aria-labelledby="acquisition-de-a-a-z-title"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-violet uppercase">
            Votre acquisition, de A à Z
          </p>
          <h2
            id="acquisition-de-a-a-z-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.45rem] lg:leading-[1.15]"
          >
            Vous développez votre business. On s&apos;occupe du reste.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Stratégie, tracking, créations, landing pages, automatisation et
            pilotage : nous réunissons toutes les expertises et les outils
            nécessaires à votre acquisition. Sans multiplier les prestataires,
            ni les frais cachés.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-2 sm:gap-4 lg:mt-14 lg:grid-cols-3">
          {expertises.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.title}
                className="min-w-0 rounded-xl bg-[#f3f3f3] px-3 py-3 sm:rounded-2xl sm:px-6 sm:py-6"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-soft text-violet sm:h-11 sm:w-11 sm:rounded-xl">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-2 text-[13px] leading-tight font-bold tracking-tight text-balance text-foreground sm:mt-4 sm:text-base sm:leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-muted sm:hidden">
                  {item.short}
                </p>
                <p className="mt-1.5 hidden text-sm leading-relaxed text-muted sm:block">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 rounded-[1.75rem] bg-violet-soft px-6 py-10 text-center sm:mt-5 sm:px-10 sm:py-12">
          <LayoutGrid
            className="mx-auto h-5 w-5 text-violet"
            strokeWidth={1.75}
            aria-hidden
          />
          <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-[1.75rem]">
            Un seul cockpit. Toute votre acquisition.
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Campagnes, investissements, leads, rendez-vous et ventes : vos
            données réunies dans un même espace de pilotage partagé.
          </p>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted">
          Nos outils d&apos;accompagnement sont inclus dans notre prestation.
          Aucun coût caché.
        </p>
      </div>
    </section>
  );
}
