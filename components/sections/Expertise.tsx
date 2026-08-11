import { Pill } from "@/components/Pill";
import { SectionHeading } from "@/components/SectionHeading";

const acquisitionPlatforms = [
  "Meta",
  "Google",
  "Bing",
  "TikTok",
  "Pinterest",
  "WhatsApp",
];

const dataStack = [
  "IA",
  "SMS Marketing",
  "API",
  "Lead Management",
  "Qualification",
  "Double Opt-In",
];

export function Expertise() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="NOS EXPERTISES"
          title={
            <>
              Acquisition multicanale &
              <br className="hidden sm:block" /> Data automation.
            </>
          }
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-border bg-white p-7 sm:p-9">
            <p className="text-xs font-bold tracking-[0.14em] text-violet uppercase">
              ACQUISITION
            </p>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight">
              Les meilleures plateformes
            </h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {acquisitionPlatforms.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-border bg-white p-7 sm:p-9">
            <p className="text-xs font-bold tracking-[0.14em] text-violet uppercase">
              DATA & AUTOMATION
            </p>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight">
              Stack technologique
            </h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {dataStack.map((item) => (
                <Pill key={item} tone="violet">
                  {item}
                </Pill>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
