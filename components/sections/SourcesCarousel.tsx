import { LogoCarousel } from "@/components/LogoCarousel";

export function SourcesCarousel() {
  return (
    <section className="bg-background px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xs font-bold tracking-[0.16em] text-violet uppercase">
          Nos sources d&apos;acquisition
        </p>
        <LogoCarousel />
      </div>
    </section>
  );
}
