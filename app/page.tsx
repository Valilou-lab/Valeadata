import Script from "next/script";
import { AcquisitionScope } from "@/components/sections/AcquisitionScope";
import { CostTransition } from "@/components/sections/CostTransition";
import { FinalCta } from "@/components/sections/FinalCta";
import { GeneratedOutcomes } from "@/components/sections/GeneratedOutcomes";
import { Hero } from "@/components/sections/Hero";
import { PricingModels } from "@/components/sections/PricingModels";
import { SolutionPaths } from "@/components/sections/SolutionPaths";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SolutionPaths />
      <GeneratedOutcomes />
      <AcquisitionScope />
      <CostTransition />
      <PricingModels />
      <FinalCta />
      <Script
        src="https://heyleo.io/api/widget/kh71k3zspqp0ymx0eyekw0nrjn8g081v"
        strategy="afterInteractive"
      />
    </main>
  );
}
