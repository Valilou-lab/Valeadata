"use client";

import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string | null;
  /** Lance l'animation du check (défaut: true sur lg, false sinon) */
  animate?: boolean;
};

const sizes = {
  sm: {
    wrap: "gap-1",
    mark: "h-7 w-7 sm:h-8 sm:w-8",
    word: "h-3.5 w-auto sm:h-4",
    wordWidth: 120,
    wordHeight: 18,
  },
  md: {
    wrap: "gap-1.5",
    mark: "h-10 w-10",
    word: "h-5 w-auto",
    wordWidth: 150,
    wordHeight: 22,
  },
  lg: {
    wrap: "gap-3 sm:gap-4",
    mark: "h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32",
    word: "h-7 w-auto sm:h-8 lg:h-9",
    wordWidth: 280,
    wordHeight: 36,
  },
};

export function Logo({
  className,
  size = "md",
  href = "/",
  animate,
}: LogoProps) {
  const s = sizes[size];
  const shouldAnimate = animate ?? size === "lg";

  const content = (
    <span
      className={cn(
        "inline-flex flex-col items-center",
        s.wrap,
        className,
      )}
    >
      <LogoMark className={s.mark} animate={shouldAnimate} />
      <Image
        src="/logo-wordmark.png"
        alt=""
        width={s.wordWidth}
        height={s.wordHeight}
        className={cn(
          "object-contain",
          s.word,
          shouldAnimate && "logo-wordmark-animate",
        )}
        priority={size === "lg" || size === "sm"}
        aria-hidden
      />
      <span className="sr-only">Valeadata</span>
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      className="inline-flex items-center"
      aria-label="Valeadata — Accueil"
    >
      {content}
    </Link>
  );
}

function LogoMark({
  className,
  animate,
}: {
  className?: string;
  animate: boolean;
}) {
  const gradId = `valeadata-grad-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 overflow-visible", className)}
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="18"
          y1="102"
          x2="102"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B1B78" />
          <stop offset="0.45" stopColor="#7B4DFF" />
          <stop offset="1" stopColor="#D14CFF" />
        </linearGradient>
      </defs>

      <path
        d="M86 22.5 A44 44 0 1 0 98 42"
        stroke={`url(#${gradId})`}
        strokeWidth="11"
        strokeLinecap="round"
        className={animate ? "logo-circle-animate" : undefined}
      />

      <path
        d="M34 60 L52 80 L98 26"
        stroke={`url(#${gradId})`}
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animate ? "logo-check-animate" : undefined}
      />
    </svg>
  );
}
