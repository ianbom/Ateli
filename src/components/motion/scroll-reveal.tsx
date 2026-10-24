"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { LUXURY_EASE } from "./motion-tokens";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

// ponytail: single-child wrapper without deep context propagation. Add StaggerContext when nested tree depths exceed 3 levels.
export function ScrollReveal({
  children,
  direction = "up",
  distance = 20,
  delay = 0,
  duration = 0.8,
  threshold = 0.08,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
