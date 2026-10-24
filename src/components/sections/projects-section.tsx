import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { AnimatedDivider } from "@/components/motion/animated-divider";

const CARD_DIRECTIONS: Array<"up" | "right" | "down"> = ["up", "right", "down"];

export function ProjectsSection() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <section className="relative w-full bg-[#0A0A0A] px-6 md:px-8 py-24 md:py-32">
      <div className="w-full max-w-[1920px] mx-auto">
        {/* Section Header */}
        <ScrollReveal
          direction="up"
          distance={16}
          duration={0.7}
          threshold={0.15}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#F2F0EB] inline-block" />
              <span className="text-[12px] font-normal tracking-[0.05em] text-[#A6A39D] uppercase">
                Projects
              </span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] tracking-[-0.02em] font-medium text-[#F2F0EB]">
              Selected works from the studio
            </h2>
          </div>

          <div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase text-[#F2F0EB] hover:text-[#B5A18B] transition-colors py-1"
            >
              <span>SEE ALL</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3-Column Square Grid with Intentional Directional Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              direction={CARD_DIRECTIONS[idx % CARD_DIRECTIONS.length]}
              delay={idx * 0.14}
            />
          ))}
        </div>
      </div>

      {/* Expanding Hairline Divider at bottom */}
      <AnimatedDivider
        origin="left"
        duration={1.2}
        threshold={0.1}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#1A1A1A]"
      />
    </section>
  );
}
