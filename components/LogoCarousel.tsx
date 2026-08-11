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

      <div className="logo-carousel-track flex w-max items-center gap-10 sm:gap-14">
        {track.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex h-14 w-[7.5rem] shrink-0 items-center justify-center sm:h-16 sm:w-36"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={144}
              height={64}
              className="max-h-10 w-auto max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 sm:max-h-12"
              unoptimized={logo.src.endsWith(".svg") || logo.src.endsWith(".avif")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
