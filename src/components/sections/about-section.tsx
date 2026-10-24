import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#0D0D0D] px-6 md:px-8 py-24 md:py-32 border-b border-[#1A1A1A]">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (1/3 width, 4 of 12 cols): Editorial Text */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#F2F0EB] inline-block" />
              <span className="text-[12px] font-normal tracking-[0.05em] text-[#A6A39D] uppercase">
                {siteConfig.about.tag}
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] leading-[1.18] tracking-[-0.02em] font-medium text-[#F2F0EB]">
              {siteConfig.about.headlineMain}{" "}
              <strong className="font-semibold text-[#F2F0EB]">
                {siteConfig.about.headlineEmphasis}
              </strong>
            </h2>

            <div className="space-y-4 text-[14px] md:text-[15px] leading-relaxed text-[#A6A39D] font-light">
              {siteConfig.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase text-[#F2F0EB] hover:text-[#B5A18B] transition-colors py-1"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column (2/3 width, 8 of 12 cols): Studio Atelier Photography */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden bg-[#141414] border border-[#222]">
              <Image
                src={siteConfig.about.studioImage}
                alt="NOIREL STUDIO — Architectural Atelier & Materials"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center brightness-[0.88] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
