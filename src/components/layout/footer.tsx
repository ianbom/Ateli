import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FooterCrossEmblem } from "@/components/ui/brand-logo";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] text-[#F2F0EB] px-6 md:px-8 pt-20 pb-16 border-t border-[#1C1C1C]">
      <div className="w-full max-w-[1920px] mx-auto">
        {/* Top Half — Get In Touch */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-[#F2F0EB] inline-block" />
            <span className="text-[12px] font-normal tracking-[0.05em] text-[#F2F0EB]">
              {siteConfig.contact.tag}
            </span>
          </div>

          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] tracking-[-0.02em] font-medium mb-10 max-w-3xl">
            {siteConfig.contact.headingLine1}
            <br />
            <span className="font-extralight text-[#A6A39D]">
              {siteConfig.contact.headingLine2}
            </span>
          </h2>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[12px] tracking-[0.14em] font-medium uppercase text-[#F2F0EB] hover:text-[#B5A18B] transition-colors"
            >
              <span>{siteConfig.contact.whatsappText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="group inline-flex items-center gap-2 text-[12px] tracking-[0.14em] font-medium uppercase text-[#A6A39D] hover:text-[#F2F0EB] transition-colors border-l border-[#242424] pl-6"
            >
              <span>EMAIL STUDIO</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#222222] mb-14" />

        {/* Bottom Half — 4-Column Footer Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Col 1: Emblem Cross Logo */}
          <div className="md:col-span-3">
            <Link href="/" aria-label="NOIREL STUDIO Home">
              <FooterCrossEmblem className="w-12 h-12 text-[#F2F0EB] hover:opacity-80 transition-opacity" />
            </Link>
          </div>

          {/* Col 2: General Inquiries */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[10px] tracking-[0.18em] uppercase text-[#777570] font-medium">
              {siteConfig.footerColumns.generalInquiries.title}
            </h5>
            <div className="space-y-1.5">
              <div>
                <a
                  href={`mailto:${siteConfig.footerColumns.generalInquiries.email}`}
                  className="text-[14px] font-light text-[#F2F0EB] hover:text-[#B5A18B] transition-colors block"
                >
                  {siteConfig.footerColumns.generalInquiries.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${siteConfig.footerColumns.generalInquiries.phone}`}
                  className="text-[14px] font-light text-[#A6A39D] hover:text-[#F2F0EB] transition-colors block"
                >
                  {siteConfig.footerColumns.generalInquiries.phone}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#777570] font-light">
                {siteConfig.contact.address}
              </div>
            </div>
          </div>

          {/* Col 3: Social Media */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-[10px] tracking-[0.18em] uppercase text-[#777570] font-medium">
              {siteConfig.footerColumns.socialMedia.title}
            </h5>
            <div className="space-y-1.5">
              {siteConfig.footerColumns.socialMedia.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-light text-[#F2F0EB] hover:text-[#B5A18B] transition-colors block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Menu Links & Copyright */}
          <div className="md:col-span-4 flex flex-col justify-between h-full space-y-8">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {siteConfig.footerColumns.menu.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[10px] tracking-[0.16em] uppercase font-medium text-[#A6A39D] hover:text-[#F2F0EB] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="text-[10px] tracking-[0.08em] text-[#777570] font-light">
              <span className="font-extralight">2026 ©</span> by NOIREL STUDIO. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
