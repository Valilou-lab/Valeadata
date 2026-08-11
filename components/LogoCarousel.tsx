import Image from "next/image";
import { cn } from "@/lib/cn";

export const sourceLogos = [
  { src: "/logos-sources/facebook.webp", alt: "Facebook / Meta" },
  { src: "/logos-sources/google.webp", alt: "Google" },
  { src: "/logos-sources/instagram.svg", alt: "Instagram" },
  { src: "/logos-sources/whatsapp.png", alt: "WhatsApp" },
  { src: "/logos-sources/pinterest.webp", alt: "Pinterest" },
  { src: "/logos-sources/snapchat.png", alt: "Snapchat" },
  { src: "/logos-sources/outbrain.png", alt: "Outbrain" },
  { src: "/logos-sources/taboola.png", alt: "Taboola" },
] as const;

type LogoCarouselProps = {
  className?: string;
};

export function LogoCarousel({ className }: LogoCarouselProps) {
  const track = [...sourceLogos, ...sourceLogos];

  return (
    <div
      className={cn(
        "logo-carousel relative w-full overflow-hidden",
        className,
      )}
      aria-label="Sources d'acquisition"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div className="logo-carousel-track flex w-max items-center gap-12 sm:gap-16 lg:gap-20">
        {track.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex h-20 w-40 shrink-0 items-center justify-center sm:h-24 sm:w-48 lg:h-28 lg:w-56"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={224}
              height={112}
              className="max-h-14 w-auto max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 sm:max-h-16 lg:max-h-20"
              unoptimized={logo.src.endsWith(".svg") || logo.src.endsWith(".avif")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
