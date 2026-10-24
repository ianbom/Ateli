import React from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AboutSection } from "@/components/sections/about-section";
import { PrincipalSection } from "@/components/sections/principal-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <PrincipalSection />
    </>
  );
}
