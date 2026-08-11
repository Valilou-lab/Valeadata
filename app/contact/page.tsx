import type { Metadata } from "next";
import { Bot, Clock3, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlez à un conseiller Valeadata de votre acquisition de leads. Email, téléphone, WhatsApp — réponse rapide 24h/24.",
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M6.94 8.5H3.75V20h3.19V8.5ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 20h-3.19v-5.86c0-1.63-.58-2.74-2.03-2.74-1.11 0-1.77.75-2.06 1.47-.11.26-.14.62-.14.99V20H9.64s.04-10.3 0-11.5h3.19v1.63c.42-.65 1.18-1.58 2.88-1.58 2.1 0 3.68 1.38 3.68 4.34V20Z" />
    </svg>
  );
}

const contactItems: Array<{
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon | typeof LinkedInIcon;
}> = [
  {
    label: "EMAIL",
    value: "hello@valeadata.com",
    href: "mailto:hello@valeadata.com",
    icon: Mail,
  },
  {
    label: "TÉLÉPHONE / WHATSAPP",
    value: "+34 603 034 938",
    href: "tel:+34603034938",
    icon: Phone,
  },
  {
    label: "LINKEDIN",
    value: "https://www.linkedin.com/in/valentine-damame-20b40b66/",
    href: "https://www.linkedin.com/in/valentine-damame-20b40b66/",
    icon: LinkedInIcon,
  },
  {
    label: "DISPONIBILITÉ",
    value: "Conseiller dédié 24h/24, 7j/7",
    icon: Clock3,
  },
  {
    label: "CHAT IA",
    value: "Disponible en bas à droite",
    icon: Bot,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-violet uppercase">
            CONTACT
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            Parlons de votre
            <br />
            <span className="text-violet">acquisition.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Décrivez-nous votre besoin, un conseiller dédié vous rappelle
            rapidement pour cadrer votre campagne.
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
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
