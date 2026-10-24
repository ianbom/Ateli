import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function PrincipalSection() {
  return (
    <section className="w-full bg-[#0A0A0A] px-6 md:px-8 py-24 md:py-32 border-b border-[#1A1A1A]">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (1/3 width, 4 of 12 cols): Adrian Vale Portrait */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden bg-[#141414] border border-[#222]">
              <Image
                src={siteConfig.principal.portraitImage}
                alt="Adrian Vale — Principal & Creative Director, NOIREL STUDIO"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center grayscale contrast-[1.12] brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-[11px] tracking-[0.12em] uppercase text-[#F2F0EB]/80 font-mono">
                ADRIAN VALE / PRINCIPAL
              </div>
            </div>
          </div>

          {/* Right Column (2/3 width, 8 of 12 cols): Biography Narrative */}
          <div className="lg:col-span-8 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#F2F0EB] inline-block" />
              <span className="text-[12px] font-normal tracking-[0.05em] text-[#A6A39D] uppercase">
                {siteConfig.principal.tag}
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] leading-[1.18] tracking-[-0.02em] font-medium text-[#F2F0EB]">
              {siteConfig.principal.headlineMain}{" "}
              <strong className="font-semibold text-[#F2F0EB]">
                {siteConfig.principal.headlineEmphasis}
              </strong>
            </h2>

            <div className="space-y-4 text-[14px] md:text-[15px] leading-relaxed text-[#A6A39D] font-light max-w-3xl">
              {siteConfig.principal.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="border-l-2 border-[#B5A18B]/60 pl-4 py-1 my-6 text-[15px] italic text-[#F2F0EB]/90 font-serif">
              "A room must not entertain; it must hold presence and quiet reverence." — Adrian Vale
            </blockquote>

            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase text-[#F2F0EB] hover:text-[#B5A18B] transition-colors py-1"
              >
                <span>INITIATE COMMISSION</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
