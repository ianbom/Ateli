"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CrossMark } from "@/components/ui/brand-logo";
import { Project } from "@/data/projects";
import { ImageReveal } from "@/components/motion/image-reveal";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
}

// ponytail: directional clip wipe with desktop hover fade. Add webgl displacement shader if requested.
export function ProjectCard({
  project,
  className,
  direction = "up",
  delay = 0,
}: ProjectCardProps) {
  return (
    <ImageReveal
      direction={direction}
      delay={delay}
      duration={1.0}
      threshold={0.12}
      className={cn("w-full aspect-square", className)}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block w-full h-full overflow-hidden bg-[#141414] border border-[#202020]"
      >
        {/* Background Architectural Layer (revealed on hover) */}
        <div className="absolute inset-0 bg-[#161616] flex flex-col justify-between p-6 z-0">
          {/* Subtle decorative grid/grain layer */}
          <div className="absolute inset-0 bg-[radial-gradient(#292929_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

          {/* Top-Right Logo Mark (revealed on hover) */}
          <div className="relative z-10 flex justify-end">
            <div className="w-8 h-8 rounded-full bg-[#202020]/80 flex items-center justify-center border border-[#2E2E2E] transition-transform duration-300 md:group-hover:rotate-45">
              <CrossMark className="w-3.5 h-3.5 text-[#F2F0EB]" />
            </div>
          </div>

          {/* Bottom Title & Metadata (revealed on hover) */}
          <div className="relative z-10 space-y-1">
            <h3 className="text-[15px] font-medium tracking-[0.04em] uppercase text-[#F2F0EB] leading-tight">
              {project.title}
            </h3>
            <div className="text-[11px] tracking-[0.1em] uppercase text-[#A6A39D] font-light">
              {project.category} / {project.year}
            </div>
          </div>
        </div>

        {/* Primary Project Photograph */}
        <div className="absolute inset-0 z-20 transition-opacity duration-300 md:group-hover:opacity-0 pointer-events-none">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center brightness-[0.92] contrast-[1.05] transition-transform duration-700 ease-out md:group-hover:scale-105"
          />

          {/* Mobile-visible bottom overlay scrim so mobile users can always read title */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:hidden">
            <h3 className="text-[14px] font-medium tracking-[0.04em] uppercase text-[#F2F0EB]">
              {project.title}
            </h3>
            <div className="text-[10px] tracking-[0.1em] uppercase text-[#A6A39D]">
              {project.category} / {project.year}
            </div>
          </div>
        </div>
      </Link>
    </ImageReveal>
  );
}
