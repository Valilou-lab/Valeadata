import { cn } from "@/lib/cn";

type PillProps = {
  children: React.ReactNode;
  tone?: "neutral" | "violet";
  className?: string;
};

export function Pill({ children, tone = "neutral", className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium",
        tone === "violet"
          ? "bg-violet-light text-violet"
          : "bg-[#f1f2f6] text-foreground/80",
        className,
      )}
    >
      {children}
    </span>
  );
}
