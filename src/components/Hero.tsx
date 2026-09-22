"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import BlueprintCanvas from "@/components/BlueprintCanvas";
import { FileDown, ArrowRight, BookmarkCheck, ShieldCheck, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="profile"
      className="relative pt-28 pb-16 md:pt-36 md:pb-20 border-b border-concrete-300 engineering-grid-subtle scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Dominant Person Hierarchy (60-65% visual weight) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="font-mono text-[11px] font-semibold text-concrete-600 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-accent" />
              <span>{PERSONAL_INFO.eyebrow}</span>
            </div>

            {/* Very Large Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-concrete-950 font-sans leading-[1.08]">
                B. ADINARAYANA<br />MURTHY
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-orange-accent font-sans">
                {PERSONAL_INFO.title}
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-concrete-800">
                <span className="bg-concrete-200 px-2.5 py-1">
                  30+ YEARS CIVIL CONSTRUCTION
                </span>
                <span className="text-concrete-400">&bull;</span>
                <span className="bg-concrete-200 px-2.5 py-1">
                  HIGH-RISE TOWERS &amp; INDUSTRIAL EPC
                </span>
                <span className="text-concrete-400">&bull;</span>
                <span className="bg-concrete-200 px-2.5 py-1">
                  INDIA &bull; KSA
                </span>
              </div>
            </div>

            {/* Short Executive Positioning */}
            <p className="text-base sm:text-lg text-concrete-700 font-sans leading-relaxed max-w-2xl">
              {PERSONAL_INFO.positioning}
            </p>

            {/* Prominent Career Highlight Marker */}
            <div className="p-4 bg-white border border-concrete-300 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-orange-accent uppercase tracking-wider">
                <BookmarkCheck className="w-4 h-4 text-orange-accent" />
                <span>CAREER HIGHLIGHT</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="font-sans font-bold text-base text-concrete-950">
                  PROJECT MANAGER
                </div>
                <div className="font-mono text-xs text-concrete-600 font-medium">
                  Oct 2015 — Sep 2020
                </div>
              </div>

              <div className="font-mono text-xs text-concrete-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-concrete-500" />
                <span>Saudi Aramco Projects &bull; Kingdom of Saudi Arabia</span>
              </div>

              <div className="pt-2 border-t border-concrete-100 flex items-center justify-between font-mono text-[11px] text-concrete-600">
                <span>Current: Construction Manager &mdash; Civil (Apoorva Projects)</span>
                <span className="text-concrete-900 font-semibold">Nov 2020 &mdash; Present</span>
              </div>
            </div>

            {/* Functional CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-concrete-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-orange-accent transition-all shadow-2xs group focus-visible:outline-2 focus-visible:outline-orange-accent"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4 text-orange-accent group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href={PERSONAL_INFO.cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] bg-white text-concrete-900 border border-concrete-400 font-mono text-xs font-bold uppercase tracking-wider hover:border-orange-accent hover:text-orange-accent transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-orange-accent"
              >
                <FileDown className="w-4 h-4 text-orange-accent" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Opportunity Target Notice */}
            <div className="pt-1 flex flex-wrap items-center gap-y-1 gap-x-4 font-mono text-xs text-concrete-600">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Open to Opportunities: {PERSONAL_INFO.targetLocation}</span>
              </div>
              <span className="text-concrete-300">|</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-concrete-400" />
                <span>Pan-India &bull; International EPC</span>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle CAD Structural Visual */}
          <div className="lg:col-span-5 relative">
            <BlueprintCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
