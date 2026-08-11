import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  eyebrowClassName,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "text-xs font-bold tracking-[0.14em] uppercase",
          tone === "dark" ? "text-violet" : "text-violet",
          eyebrowClassName,
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
          tone === "dark" ? "text-white" : "text-foreground",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
