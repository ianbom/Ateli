import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProjectBySlug, getOtherProjects } from "@/data/projects";
import { ProjectCarousel } from "@/components/projects/project-carousel";
import { ProjectCard } from "@/components/projects/project-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | NOIREL STUDIO",
    };
  }

  return {
    title: `${project.title} | NOIREL STUDIO`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = getOtherProjects(project.slug, 3);

  return (
    <article className="w-full min-h-screen bg-[#0A0A0A] pt-32 md:pt-36 pb-28 px-6 md:px-8 border-b border-[#1A1A1A]">
      <div className="w-full max-w-[1920px] mx-auto space-y-16 md:space-y-24">
        {/* Back Link & Breadcrumb */}
        <ScrollReveal direction="up" distance={10} duration={0.6}>
          <div className="flex items-center justify-between border-b border-[#1C1C1C] pb-6">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-[#A6A39D] hover:text-[#F2F0EB] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to all projects</span>
            </Link>

            <span className="text-[11px] font-mono tracking-widest text-[#777570] uppercase">
              {project.category} / {project.year}
            </span>
          </div>
        </ScrollReveal>

        {/* Gallery Carousel */}
        <ScrollReveal direction="none" duration={0.8} delay={0.1} className="w-full">
          <ProjectCarousel
            images={project.gallery}
            projectTitle={project.title}
          />
        </ScrollReveal>

        {/* 3-Column Specifications & Editorial Narrative */}
        <div className="pt-8 border-t border-[#1C1C1C]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Col 1: Title & Category (4 cols) */}
            <ScrollReveal direction="up" distance={16} duration={0.7} delay={0.1} threshold={0.1} className="lg:col-span-4 space-y-3">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#B5A18B] font-mono">
                {project.category}
              </div>
              <h1 className="text-[30px] sm:text-[38px] md:text-[44px] tracking-[-0.02em] font-medium text-[#F2F0EB] leading-tight">
                {project.title}
              </h1>
            </ScrollReveal>

            {/* Col 2: Structured Project Data (3 cols) */}
            <ScrollReveal direction="up" distance={16} duration={0.7} delay={0.2} threshold={0.1} className="lg:col-span-3 space-y-6 lg:border-l lg:border-[#1E1E1E] lg:pl-10">
              <div className="space-y-1">
                <div className="text-[10px] tracking-[0.18em] uppercase text-[#777570] font-medium">
                  Location
                </div>
                <div className="text-[14px] text-[#F2F0EB] font-light">
                  {project.location}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] tracking-[0.18em] uppercase text-[#777570] font-medium">
                  Scope
                </div>
                <div className="text-[14px] text-[#F2F0EB] font-light">
                  {project.scope}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] tracking-[0.18em] uppercase text-[#777570] font-medium">
                  Year
                </div>
                <div className="text-[14px] text-[#F2F0EB] font-mono">
                  {project.year}
                </div>
              </div>
            </ScrollReveal>

            {/* Col 3: Narrative & Concept (5 cols) */}
            <ScrollReveal direction="up" distance={16} duration={0.7} delay={0.3} threshold={0.1} className="lg:col-span-5 space-y-4 lg:border-l lg:border-[#1E1E1E] lg:pl-10 text-[14px] md:text-[15px] leading-relaxed text-[#A6A39D] font-light">
              <p>{project.description}</p>
              <p>
                Every surface was custom engineered to preserve the dialogue between
                shadow and daylight. The palette combines mineral lime wash,
                patinated bronze joinery, and honed stone thresholds that celebrate
                tactile honesty and architectural timelessness.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Other Projects / Related Works */}
        <div className="pt-20 border-t border-[#1C1C1C]">
          <ScrollReveal direction="up" distance={12} duration={0.6} threshold={0.1} className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[#F2F0EB] inline-block" />
                <span className="text-[11px] font-normal tracking-[0.08em] text-[#A6A39D] uppercase">
                  Explore More
                </span>
              </div>
              <h2 className="text-[22px] md:text-[28px] font-medium text-[#F2F0EB]">
                Other Selected Works
              </h2>
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase text-[#F2F0EB] hover:text-[#B5A18B] transition-colors py-1"
            >
              <span>ALL PROJECTS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherProjects.map((p, idx) => (
              <ProjectCard
                key={p.id}
                project={p}
                direction={idx === 0 ? "up" : idx === 1 ? "right" : "down"}
                delay={idx * 0.12}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
