"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  images: string[];
  projectTitle: string;
}

export function ProjectCarousel({ images, projectTitle }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full space-y-4">
      {/* Main Large Viewport */}
      <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/10] overflow-hidden bg-[#121212] border border-[#222]">
        {images.map((img, idx) => (
          <div
            key={img}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            )}
          >
            <Image
              src={img}
              alt={`${projectTitle} — View ${idx + 1}`}
              fill
              priority={idx === 0}
              sizes="(max-width: 1920px) 100vw, 1920px"
              className="object-cover object-center brightness-[0.92] contrast-[1.04]"
            />
          </div>
        ))}

        {/* Counter Overlay (e.g. 01 / 06) */}
        <div className="absolute bottom-5 left-5 z-20 bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-[11px] font-mono tracking-widest text-[#F2F0EB]">
          {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous photograph"
            className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#F2F0EB] hover:text-[#B5A18B] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next photograph"
            className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#F2F0EB] hover:text-[#B5A18B] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Interactive Thumbnail Filmstrip */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
        {images.map((img, idx) => (
          <button
            key={img}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`View slide ${idx + 1}`}
            className={cn(
              "relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 overflow-hidden border transition-all duration-200",
              idx === currentIndex
                ? "border-[#F2F0EB] opacity-100 ring-1 ring-[#F2F0EB]"
                : "border-[#222] opacity-40 hover:opacity-80"
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              sizes="128px"
              className="object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
