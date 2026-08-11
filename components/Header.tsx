"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { PrimaryButton } from "@/components/PrimaryButton";
import { cn } from "@/lib/cn";
import { bookingHref, navLinks } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton href={bookingHref} size="md">
            Prendre rendez-vous
          </PrimaryButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Navigation mobile">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-medium",
                    active ? "bg-violet-light text-violet" : "text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div onClick={closeMenu}>
              <PrimaryButton href={bookingHref} className="mt-3 w-full" size="lg">
                Prendre rendez-vous
              </PrimaryButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
