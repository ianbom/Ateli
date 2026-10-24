"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { TextReveal } from "@/components/motion/text-reveal";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { LUXURY_EASE } from "@/components/motion/motion-tokens";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[750px] md:min-h-[850px] lg:min-h-[900px] flex items-end overflow-hidden pt-[170px] pb-20 px-6 md:px-8">
      {/* Background Image with Dark Vignette / Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: shouldReduceMotion ? 1 : 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: LUXURY_EASE }}
          className="relative w-full h-full"
        >
          <Image
            src={siteConfig.hero.heroImage}
            alt="NOIREL STUDIO — Interior Architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.85] contrast-[1.05]"
          />
        </motion.div>
        {/* Cinematic gradient overlay to guarantee text legibility while retaining depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/30 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        <div className="max-w-4xl">
          {/* Eyebrow Label */}
          <ScrollReveal
            direction="up"
            distance={10}
            duration={0.6}
            delay={0.15}
            threshold={0.05}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 bg-[#F2F0EB] inline-block" />
            <span className="text-[12px] font-normal tracking-[0.05em] text-[#F2F0EB]/90">
              {siteConfig.hero.tag}
            </span>
          </ScrollReveal>

          {/* Main Headline with Masked Reveals */}
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.14] tracking-[-0.02em] text-[#F2F0EB] font-normal mb-10 max-w-3xl space-y-1">
            <TextReveal delay={0.25} duration={0.95} threshold={0.05}>
              We partner with{" "}
              <strong className="font-semibold text-[#F2F0EB]">
                forward-thinking clients
              </strong>
            </TextReveal>
            <TextReveal delay={0.38} duration={0.95} threshold={0.05}>
              to shape interiors defined by
            </TextReveal>
            <TextReveal delay={0.50} duration={0.95} threshold={0.05}>
              <strong className="font-semibold text-[#F2F0EB]">
                intention, not trend.
              </strong>
            </TextReveal>
          </h1>

          {/* Dual Action Links */}
          <ScrollReveal
            direction="up"
            distance={12}
            duration={0.7}
            delay={0.65}
            threshold={0.05}
            className="flex flex-wrap items-center gap-8 md:gap-10"
          >
            <a
              href={siteConfig.hero.ctaPrimaryHref}
              className="text-[12px] font-medium tracking-[0.14em] uppercase text-[#F2F0EB] hover:text-[#B5A18B] transition-colors py-2"
            >
              {siteConfig.hero.ctaPrimary}
            </a>

            <Link
              href={siteConfig.hero.ctaSecondaryHref}
              className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase text-[#F2F0EB] hover:text-[#B5A18B] transition-colors py-2"
            >
              <span>{siteConfig.hero.ctaSecondary}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
