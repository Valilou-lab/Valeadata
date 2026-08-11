import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  iconNode?: ReactNode;
  tone?: "light" | "dark";
  iconVariant?: "circle" | "square";
  /** Icône déjà colorée / ronde : pas de fond violet */
  iconPlain?: boolean;
  children?: ReactNode;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  iconNode,
  tone = "light",
  iconVariant = "circle",
  iconPlain = false,
  children,
  className,
}: FeatureCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl border p-6 sm:p-7",
        isDark
          ? "border-white/8 bg-dark-card text-white"
          : "border-border bg-surface text-foreground",
        className,
      )}
    >
      {(Icon || iconNode) && (
        <div
          className={cn(
            "mb-4 flex h-11 w-11 items-center justify-center overflow-hidden",
            iconPlain
              ? "rounded-full bg-transparent p-0"
              : cn(
                  iconVariant === "circle" ? "rounded-full" : "rounded-2xl",
                  isDark ? "bg-violet text-white" : "bg-violet-light text-violet",
                ),
          )}
        >
          {iconNode ?? (Icon ? <Icon className="h-5 w-5" strokeWidth={2} /> : null)}
        </div>
      )}
      <h3
        className={cn(
          "text-lg font-bold tracking-tight",
          isDark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-2 text-[15px] leading-relaxed",
          isDark ? "text-white/65" : "text-muted",
        )}
      >
        {description}
      </p>
      {children}
    </article>
  );
}
