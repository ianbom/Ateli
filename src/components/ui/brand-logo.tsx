import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
  inverted?: boolean;
}

export function CrossMark({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("inline-block shrink-0", className)}
      aria-hidden="true"
    >
      {/* Refined 4-bar architectural cross / star mark matching reference aesthetic */}
      <rect x="10" y="2" width="4" height="20" rx="2" />
      <rect x="2" y="10" width="20" height="4" rx="2" />
    </svg>
  );
}

export function FooterCrossEmblem({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className={cn("text-[#F2F0EB]", className)}
      aria-hidden="true"
    >
      <rect x="21" y="4" width="6" height="40" rx="3" />
      <rect x="4" y="21" width="40" height="6" rx="3" />
    </svg>
  );
}

export function BrandLogo({
  className,
  showSubtitle = false,
  inverted = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 transition-opacity hover:opacity-80",
        inverted ? "text-[#0A0A0A]" : "text-[#F2F0EB]",
        className
      )}
    >
      <span className="text-[15px] font-medium tracking-[0.22em] uppercase leading-none font-sans">
        NOIREL
      </span>
      <CrossMark className="w-2.5 h-2.5 opacity-90 transition-transform duration-300 group-hover:rotate-90" />
      {showSubtitle && (
        <span className="hidden sm:inline-block text-[10px] tracking-[0.25em] text-[#A6A39D] font-normal border-l border-[#292929] pl-2.5 ml-0.5 leading-none">
          STUDIO
        </span>
      )}
    </Link>
  );
}
