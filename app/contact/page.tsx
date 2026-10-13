import type { Metadata } from "next";
import Image from "next/image";
import { Clock3, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { isContactRequest } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlez-nous de votre projet : accompagnement acquisition ou achat de leads qualifiés.",
};

const contactItems: Array<{
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}> = [
  {
    label: "EMAIL",
    value: "contact@valeadata.com",
    href: "mailto:contact@valeadata.com",
    icon: Mail,
  },
  {
    label: "TÉLÉPHONE / WHATSAPP",
    value: "+34 603 034 938",
    href: "tel:+34603034938",
    icon: Phone,
  },
  {
    label: "DISPONIBILITÉ",
    value: "Conseiller dédié 24h/24, 7j/7",
    icon: Clock3,
  },
];

const team = [
  {
    name: "Valentine Damame",
    role: "Fondatrice · Directrice Commerciale",
    src: "/images/equipe/valentine.png",
  },
  {
    name: "Romain Fiore",
    role: "Directeur Acquisition Digitale",
    src: "/images/equipe/romain.png",
  },
  {
    name: "Paul Damame",
    role: "Community Manager & Influence",
    src: "/images/equipe/paul.png",
  },
] as const;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ demande?: string | string[] }>;
}) {
  const params = await searchParams;
  const rawDemande = Array.isArray(params.demande) ? params.demande[0] : params.demande;
  const initialDemande = isContactRequest(rawDemande) ? rawDemande : undefined;

  return (
    <main className="bg-background">
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-violet uppercase">
            CONTACT
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            Parlons de votre projet.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Quelques informations suffisent pour commencer. Nous reviendrons
            vers vous pour échanger sur vos besoins.
          </p>

          <ul className="mt-10 space-y-5">
            {contactItems.map(({ label, value, href, icon: Icon }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-light text-violet">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold tracking-[0.1em] text-muted uppercase">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="mt-1 block break-words text-[15px] font-semibold text-foreground hover:text-violet"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-[15px] font-semibold text-foreground">
                      {value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 max-w-md border-t border-border pt-10">
            <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
              Une équipe, trois expertises.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
              De l&apos;acquisition à la conversion, chaque levier est piloté en
              interne.
            </p>

            <ul className="mt-6 space-y-3">
              {team.map((person) => (
                <li key={person.name}>
                  <div className="group flex items-center gap-4 rounded-2xl py-1.5 pr-2 transition duration-200 hover:-translate-y-0.5">
                    <Image
                      src={person.src}
                      alt={`Portrait de ${person.name}`}
                      width={320}
                      height={320}
                      className="h-16 w-16 shrink-0 rounded-full object-cover ring-1 ring-violet/15 transition duration-200 group-hover:shadow-[0_0_0_4px_rgba(138,107,255,0.14),0_12px_24px_-16px_rgba(138,107,255,0.85)] lg:h-[5.25rem] lg:w-[5.25rem]"
                    />
                    <div className="min-w-0">
                      <p className="text-[15px] font-bold tracking-tight text-foreground">
                        {person.name}
                      </p>
                      <p className="mt-0.5 text-sm leading-snug text-muted">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-muted">
              Équipe à taille humaine, des échanges directs, pas
              d&apos;intermédiaires.
            </p>
          </div>
        </div>

        <ContactForm initialDemande={initialDemande} />
      </section>
    </main>
  );
}
