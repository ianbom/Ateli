"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { LUXURY_EASE } from "./motion-tokens";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

// ponytail: single-block line mask with outer observer. Split into AST or per-char lines when letter-level kinetic typography is required.
export function TextReveal({
  children,
  as = "div",
  className,
  delay = 0,
  duration = 0.95,
  threshold = 0.05,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const shouldReduceMotion = useReducedMotion();
  const Tag = motion[as] as any;

  if (shouldReduceMotion) {
    const FallbackTag = as;
    return <FallbackTag className={className}>{children}</FallbackTag>;
  }

  return (
    <span ref={ref} className={cn("overflow-hidden block", className)}>
      <Tag
        initial={{ y: "105%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "105%", opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: LUXURY_EASE,
        }}
        className="block"
      >
        {children}
      </Tag>
    </span>
  );
}
