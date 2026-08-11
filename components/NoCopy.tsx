"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type NoCopyProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Empêche la sélection et la copie du contenu (navigateur).
 * Contournable via outils avancés — protection UX, pas juridique.
 */
export function NoCopy({ children, className }: NoCopyProps) {
  return (
    <div
      className={cn("select-none", className)}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
}
