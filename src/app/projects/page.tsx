"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

const CATEGORIES = ["ALL", "RESIDENTIAL", "HOSPITALITY", "COMMERCIAL"] as const;

export default function ProjectsArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter(
          (p) => p.category.toUpperCase() === selectedCategory
        );

  return (
    <div className="w-full min-h-screen bg-[#0A0A0A] pt-36 pb-28 px-6 md:px-8 border-b border-[#1A1A1A]">
      <div className="w-full max-w-[1920px] mx-auto">
        {/* Archive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8 border-b border-[#1C1C1C] pb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#F2F0EB] inline-block" />
              <span className="text-[12px] font-normal tracking-[0.05em] text-[#A6A39D] uppercase">
                Archive
              </span>
            </div>
            <h1 className="text-[34px] sm:text-[42px] md:text-[50px] tracking-[-0.02em] font-medium text-[#F2F0EB] leading-tight">
              Selected Works
            </h1>
            <p className="text-[14px] text-[#777570] font-light mt-2 tracking-wide">
              Interior architecture & spatial commissions (2023 — 2026)
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] font-medium tracking-[0.14em] uppercase px-3.5 py-1.5 border transition-all duration-200 ${
                    active
                      ? "border-[#F2F0EB] bg-[#F2F0EB] text-[#0A0A0A]"
                      : "border-[#242424] text-[#A6A39D] hover:border-[#444] hover:text-[#F2F0EB]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
