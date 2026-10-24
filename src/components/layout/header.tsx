"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { BrandLogo } from "@/components/ui/brand-logo";
import { siteConfig } from "@/data/site-config";
import { LUXURY_EASE } from "@/components/motion/motion-tokens";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[90px] flex items-center px-6 md:px-8",
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#242424]/60"
            : "bg-transparent"
        )}
      >
        <div className="w-full flex items-center justify-between">
          {/* Brand Logo */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: LUXURY_EASE }}
          >
            <BrandLogo showSubtitle={true} />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            {siteConfig.navLinks.map((link, idx) => {
              const isProjects = link.href === "/projects";
              const isActive = isProjects
                ? pathname.startsWith("/projects")
                : pathname === link.href;

              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + idx * 0.06,
                    ease: LUXURY_EASE,
                  }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[10px] tracking-[0.16em] uppercase font-medium transition-colors duration-200",
                      isActive
                        ? "text-[#F2F0EB]"
                        : "text-[#A6A39D] hover:text-[#F2F0EB]"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}

            {/* Instagram Link */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + siteConfig.navLinks.length * 0.06,
                ease: LUXURY_EASE,
              }}
            >
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A6A39D] hover:text-[#F2F0EB] transition-colors pl-2 inline-block"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#F2F0EB] p-2 -mr-2 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-between px-8 py-28 transition-all duration-300 md:hidden",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <nav className="flex flex-col space-y-7">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-light tracking-[0.18em] uppercase text-[#F2F0EB] hover:text-[#B5A18B] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="pt-8 border-t border-[#242424] flex items-center justify-between">
          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-widest text-[#A6A39D] hover:text-[#F2F0EB] transition-colors inline-flex items-center gap-2 uppercase"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Instagram</span>
          </a>
          <span className="text-[10px] tracking-widest text-[#777570] uppercase">
            NOIREL STUDIO
          </span>
        </div>
      </div>
    </>
  );
}
