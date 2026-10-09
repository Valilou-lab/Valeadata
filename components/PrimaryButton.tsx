import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "white" | "ghost";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-violet text-white hover:bg-[#7a58f5] shadow-[0_8px_24px_-12px_rgba(138,107,255,0.7)]",
  secondary:
    "bg-white text-foreground border border-border hover:border-violet/30 hover:bg-violet-light/40",
  white: "bg-white text-foreground hover:bg-white/90",
  ghost: "bg-transparent text-foreground hover:bg-violet-light/50",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/40 focus-visible:ring-offset-2";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

type LinkExtras = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">;

type AsLink = Common & LinkExtras & { href: string };
type AsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Common> & {
    href?: never;
  };

type LinkRest = LinkExtras & { href: string };
type ButtonRest = Omit<AsButton, keyof Common>;

function isLinkRest(props: LinkRest | ButtonRest): props is LinkRest {
  return "href" in props && typeof props.href === "string";
}

export function PrimaryButton({
  children,
  className,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  ...props
}: AsLink | AsButton) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if (isLinkRest(props)) {
    const { href, target, rel } = props;
    const resolvedRel = target === "_blank" ? (rel ?? "noopener noreferrer") : rel;
    const isExternal = href.startsWith("http://") || href.startsWith("https://");

    if (isExternal) {
      return (
        <a href={href} className={classes} target={target} rel={resolvedRel}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} target={target} rel={resolvedRel}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonRest;

  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
