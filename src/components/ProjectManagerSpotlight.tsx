"use client";

import React from "react";
import { PM_RESPONSIBILITIES } from "@/data/portfolioData";
import { BookmarkCheck, Briefcase, CalendarCheck, ShieldCheck, Users2 } from "lucide-react";

export default function ProjectManagerSpotlight() {
  const icons = [
    <Briefcase key="1" className="w-4 h-4 text-orange-accent" />,
    <CalendarCheck key="2" className="w-4 h-4 text-orange-accent" />,
    <ShieldCheck key="3" className="w-4 h-4 text-orange-accent" />,
    <Users2 key="4" className="w-4 h-4 text-orange-accent" />,
  ];

  return (
    <section className="py-20 bg-concrete-900 text-white border-b border-concrete-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 pb-8 border-b border-concrete-800">
          <div className="lg:col-span-8 space-y-3">
            <div className="font-mono text-xs text-orange-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4 text-orange-accent" />
              <span>CAREER HIGHLIGHT // PROJECT MANAGEMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
              PROJECT MANAGEMENT EXPERIENCE
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-concrete-300">
              <span className="font-bold text-white">Saudi Aramco Projects</span>
              <span>&bull;</span>
              <span className="text-orange-400 font-semibold">Oct 2015 — Sep 2020</span>
              <span>&bull;</span>
              <span>Kingdom of Saudi Arabia</span>
            </div>
            <p className="text-sm sm:text-base text-concrete-300 font-sans pt-1 leading-relaxed max-w-2xl">
              Managed construction and QA/QC activities for major oil and gas projects, supervised construction crews and subcontractors, and conducted progress meetings with Saudi Aramco client representatives.
            </p>
          </div>

          <div className="lg:col-span-4 bg-concrete-800 p-5 border border-concrete-700 font-mono text-xs text-concrete-300 space-y-1.5">
            <div className="text-white font-bold pb-1.5 border-b border-concrete-700">
              CORE RESPONSIBILITIES &amp; DELIVERABLES:
            </div>
            <p className="text-[11px] leading-relaxed text-concrete-300">
              &bull; Managed construction and QA/QC activities for major oil and gas projects.<br />
              &bull; Supervised construction crews and subcontractors.<br />
              &bull; Conducted project progress meetings with client representatives.<br />
              &bull; Ensured compliance with project specifications, quality standards, and safety regulations.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PM_RESPONSIBILITIES.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-concrete-800/70 p-6 border border-concrete-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-orange-400 px-2 py-0.5 bg-concrete-700">
                    0{idx + 1}
                  </span>
                  {icons[idx]}
                </div>

                <h3 className="text-lg font-bold text-white font-sans mb-3">
                  {pillar.title}
                </h3>

                <ul className="space-y-2 text-xs text-concrete-300 font-sans leading-relaxed">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-orange-accent font-bold mt-0.5">&bull;</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-concrete-700 font-mono text-[10px] text-concrete-400 uppercase flex items-center justify-between">
                <span>STANDARDS</span>
                <span className="text-white font-semibold">SAUDI ARAMCO</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
