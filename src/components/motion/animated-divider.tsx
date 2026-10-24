"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { LUXURY_EASE } from "./motion-tokens";
import { cn } from "@/lib/utils";

interface AnimatedDividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  origin?: "left" | "right" | "center" | "top" | "bottom";
  delay?: number;
  duration?: number;
  threshold?: number;
}

// ponytail: transform scaleX/scaleY instead of SVG path length. Add SVG strokeDasharray when diagonal geometries needed.
export function AnimatedDivider({
  className,
  orientation = "horizontal",
  origin = "left",
  delay = 0,
  duration = 1.0,
  threshold = 0.1,
}: AnimatedDividerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} />;
  }

  const isHorizontal = orientation === "horizontal";

  return (
    <motion.div
      initial={{
        scaleX: isHorizontal ? 0 : 1,
        scaleY: isHorizontal ? 1 : 0,
        opacity: 0.6,
      }}
      whileInView={{
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
      }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      style={{
        transformOrigin: origin,
      }}
      className={cn(className)}
    />
  );
}
