import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { TextReveal } from "@/components/motion/text-reveal";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ImageReveal } from "@/components/motion/image-reveal";
import { AnimatedDivider } from "@/components/motion/animated-divider";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#0D0D0D] px-6 md:px-8 py-24 md:py-32">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (1/3 width, 4 of 12 cols): Editorial Text */}
          <div className="lg:col-span-4 space-y-6">
            <ScrollReveal direction="up" distance={10} duration={0.6} threshold={0.15} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#F2F0EB] inline-block" />
              <span className="text-[12px] font-normal tracking-[0.05em] text-[#A6A39D] uppercase">
                {siteConfig.about.tag}
              </span>
            </ScrollReveal>

            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] leading-[1.18] tracking-[-0.02em] font-medium text-[#F2F0EB] space-y-1">
              <TextReveal delay={0.1} duration={0.9} threshold={0.15}>
                {siteConfig.about.headlineMain}
              </TextReveal>
              <TextReveal delay={0.22} duration={0.9} threshold={0.15}>
                <strong className="font-semibold text-[#F2F0EB]">
                  {siteConfig.about.headlineEmphasis}
                </strong>
              </TextReveal>
            </h2>

            <div className="space-y-4 text-[14px] md:text-[15px] leading-relaxed text-[#A6A39D] font-light">
              {siteConfig.about.paragraphs.map((p, idx) => (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  distance={16}
                  duration={0.7}
                  delay={0.25 + idx * 0.1}
                  threshold={0.15}
                >
                  <p>{p}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" distance={12} duration={0.6} delay={0.45} threshold={0.15} className="pt-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase text-[#F2F0EB] hover:text-[#B5A18B] transition-colors py-1"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column (2/3 width, 8 of 12 cols): Studio Atelier Photography */}
          <div className="lg:col-span-8">
            <ImageReveal
              direction="right"
              duration={1.2}
              delay={0.15}
              threshold={0.15}
              className="relative aspect-[16/10] md:aspect-[16/9] w-full bg-[#141414] border border-[#222]"
            >
              <Image
                src={siteConfig.about.studioImage}
                alt="NOIREL STUDIO — Architectural Atelier & Materials"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center brightness-[0.88] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </ImageReveal>
          </div>
        </div>
      </div>

      {/* Hairline Divider */}
      <AnimatedDivider
        origin="left"
        duration={1.2}
        threshold={0.1}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#1A1A1A]"
      />
    </section>
  );
}
