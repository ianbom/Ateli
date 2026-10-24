"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { LUXURY_EASE } from "./motion-tokens";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  delay?: number;
  duration?: number;
  scaleFrom?: number;
  threshold?: number;
}

const CLIP_MAP = {
  up: {
    initial: "inset(100% 0% 0% 0%)",
    target: "inset(0% 0% 0% 0%)",
  },
  down: {
    initial: "inset(0% 0% 100% 0%)",
    target: "inset(0% 0% 0% 0%)",
  },
  left: {
    initial: "inset(0% 0% 0% 100%)",
    target: "inset(0% 0% 0% 0%)",
  },
  right: {
    initial: "inset(0% 100% 0% 0%)",
    target: "inset(0% 0% 0% 0%)",
  },
  none: {
    initial: "inset(0% 0% 0% 0%)",
    target: "inset(0% 0% 0% 0%)",
  },
};

// ponytail: CSS clip-path inset wiping with ref observation. Add custom canvas shader when liquid water displacement is requested.
export function ImageReveal({
  children,
  direction = "up",
  className,
  delay = 0,
  duration = 1.05,
  scaleFrom = 1.05,
  threshold = 0.1,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn("relative overflow-hidden", className)}>{children}</div>;
  }

  const clip = CLIP_MAP[direction];

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{
          clipPath: clip.initial,
          opacity: direction === "none" ? 0 : 1,
        }}
        animate={
          isInView
            ? { clipPath: clip.target, opacity: 1 }
            : { clipPath: clip.initial, opacity: direction === "none" ? 0 : 1 }
        }
        transition={{
          duration,
          delay,
          ease: LUXURY_EASE,
        }}
        className="w-full h-full"
      >
        <motion.div
          initial={{ scale: scaleFrom }}
          animate={isInView ? { scale: 1 } : { scale: scaleFrom }}
          transition={{
            duration: duration + 0.3,
            delay,
            ease: LUXURY_EASE,
          }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
