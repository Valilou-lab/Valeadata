import { ArrowUpRight } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";

export function FinalCta() {
  return (
    <section
      id="ensemble"
      aria-labelledby="ensemble-title"
      className="scroll-mt-24 bg-background px-4 pt-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28"
    >
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-dark px-6 py-16 text-center text-white sm:px-12 sm:py-20 lg:px-16 lg:py-24">
        <h2
          id="ensemble-title"
          className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
        >
          Alors, on regarde ce qu&apos;on peut{" "}
          <span className="text-[#d4c8ff]">faire ensemble ?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Un projet, une idée ou simplement quelques questions ? Parlons-en. On
          trouvera ensemble la stratégie adaptée à vos objectifs.
        </p>
        <div className="mt-10">
          <PrimaryButton
            href="/contact"
            size="lg"
            className="w-full sm:w-auto"
            iconRight={<ArrowUpRight className="h-4 w-4" aria-hidden />}
          >
            Je prends contact
          </PrimaryButton>
          <p className="mt-4 text-sm text-white/55">Formulaire de contact</p>
        </div>
      </div>
    </section>
  );
}
