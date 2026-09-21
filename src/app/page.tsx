import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import CareerTimeline from "@/components/CareerTimeline";
import ProjectManagerSpotlight from "@/components/ProjectManagerSpotlight";
import CurrentRoleCard from "@/components/CurrentRoleCard";
import MajorProjects from "@/components/MajorProjects";
import DrawingsToExecution from "@/components/DrawingsToExecution";
import InternationalMap from "@/components/InternationalMap";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import Education from "@/components/Education";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4EF] text-concrete-900 selection:bg-orange-accent selection:text-white">
      {/* Fixed Sticky Executive Navigation */}
      <Navigation />

      {/* Main Narrative Flow */}
      <main className="flex-1">
        {/* Hero Section: Dominant Person Hierarchy & Subtle CAD Viewer */}
        <Hero />

        {/* Factual Core Statistics */}
        <StatsStrip />

        {/* 01 // Signature Component: Career Progression Timeline */}
        <CareerTimeline />

        {/* Executive Profile: Saudi Aramco Project Management */}
        <ProjectManagerSpotlight />

        {/* 02 // Current Role & Construction Scope Process Diagram */}
        <CurrentRoleCard />

        {/* 03 // Selected International Projects (The 6 Saudi Aramco & SABIC Projects) */}
        <MajorProjects />

        {/* 04 // QA/QC Engineering Protocols */}
        <DrawingsToExecution />

        {/* 05 // Geographical Scope (India • KSA 1996–2020) */}
        <InternationalMap />

        {/* 06 // Technical Core Competencies Matrix */}
        <TechnicalExpertise />

        {/* Academic Qualification (Osmania University 1994) */}
        <Education />

        {/* Recruiter Proposition & Contact Channel */}
        <ContactSection />
      </main>

      {/* Dossier Footer */}
      <Footer />
    </div>
  );
}
