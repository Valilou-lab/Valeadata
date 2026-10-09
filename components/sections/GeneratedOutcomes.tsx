import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

const outcomes: {
  title: string;
  text: string;
  note: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}[] = [
  {
    title: "Leads qualifiés",
    text: "Des prospects réellement intéressés, adaptés à vos critères commerciaux et exploitables par vos équipes.",
    note: "Qualification",
    image: {
      src: "/images/lead-qualifie.png",
      alt: "Prospect consultant une notification sur son smartphone",
      width: 640,
      height: 640,
    },
  },
  {
    title: "Rendez-vous commerciaux",
    text: "Des prises de contact plus avancées, orientées conversion et connectées à votre réalité terrain.",
    note: "Conversion",
    image: {
      src: "/images/rendez-vous.png",
      alt: "Poignée de main entre un prospect et un commercial",
      width: 640,
      height: 625,
    },
  },
  {
    title: "Ventes e-commerce",
    text: "Une acquisition pensée pour générer des commandes, améliorer la rentabilité et soutenir votre croissance.",
    note: "Rentabilité",
    image: {
      src: "/images/ventes-ecommerce.png",
      alt: "Client avec des sacs de shopping",
      width: 640,
      height: 631,
    },
  },
];

export function GeneratedOutcomes() {
  return (
    <section
      id="ce-que-nous-generons"
      aria-labelledby="ce-que-nous-generons-title"
      className="scroll-mt-24 bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Ce que nous générons"
          title={
            <span id="ce-que-nous-generons-title">
              Des résultats pensés pour votre business.
            </span>
          }
          description="Nous ne pilotons pas des campagnes pour faire joli. Notre objectif est de générer de vraies opportunités commerciales, adaptées à votre activité et à vos objectifs."
        />

        <div className="mt-12 grid items-stretch gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {outcomes.map((item) => {
            return (
              <article
                key={item.title}
                className="flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-border bg-white px-7 py-8 text-center"
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 1024px) 16rem, 11rem"
                  className="h-40 w-auto max-w-full shrink-0 object-contain sm:h-32 sm:max-w-[8.5rem] lg:h-44 lg:max-w-none"
                />
                <div className="flex w-full min-w-0 flex-1 flex-col items-center">
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                  <p className="mt-auto pt-6 text-[12px] font-semibold tracking-[0.14em] text-muted uppercase">
                    {item.note}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
