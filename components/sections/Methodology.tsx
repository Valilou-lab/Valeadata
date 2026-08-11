import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionHeading } from "@/components/SectionHeading";
import { MethodologyJourney } from "@/components/sections/MethodologyJourney";
import { bookingHref } from "@/lib/nav";

export function Methodology() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="MÉTHODOLOGIE"
          title={
            <>
              Du clic à la prise de contact,
              <br className="hidden sm:block" /> en quatre temps.
            </>
          }
        />

        <MethodologyJourney />

        <div className="mt-12 flex justify-center">
          <PrimaryButton
            href={bookingHref}
            size="lg"
            iconRight={<ArrowRight className="h-4 w-4" />}
          >
            Parlons de votre acquisition
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
