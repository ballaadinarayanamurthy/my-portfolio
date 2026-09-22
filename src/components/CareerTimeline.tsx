"use client";

import React, { useState } from "react";
import { CAREER_TIMELINE } from "@/data/portfolioData";
import { ChevronDown, ChevronUp, Building, MapPin, BookmarkCheck } from "lucide-react";

export default function CareerTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-white border-b border-concrete-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-concrete-300 gap-4">
          <div>
            <div className="font-mono text-xs text-orange-accent font-bold uppercase tracking-widest mb-2">
              01 // CAREER PROGRESSION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 font-sans tracking-tight">
              A career built through progressive responsibility.
            </h2>
          </div>
          <div className="font-mono text-xs text-concrete-600 max-w-sm">
            From foundational site execution and QA/QC management to Saudi Aramco Project Management and civil construction leadership.
          </div>
        </div>

        {/* Milestone Progression Strip */}
        <div className="mb-12 p-4 bg-concrete-100/70 border border-concrete-300 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-concrete-500 font-semibold mr-1">TRACK:</span>
            <span className="px-2.5 py-1 bg-white border border-concrete-300 font-medium">1996 &bull; SITE ENGINEER</span>
            <span className="text-orange-accent">&rarr;</span>
            <span className="px-2.5 py-1 bg-white border border-concrete-300 font-medium">2002 &bull; QA/QC ENGINEER</span>
            <span className="text-orange-accent">&rarr;</span>
            <span className="px-2.5 py-1 bg-white border border-concrete-300 font-medium">2009 &bull; CONSTRUCTION MANAGER</span>
            <span className="text-orange-accent">&rarr;</span>
            <span className="px-2.5 py-1 bg-concrete-900 text-white font-bold flex items-center gap-1">
              <BookmarkCheck className="w-3 h-3 text-orange-accent" />
              2015 &bull; PROJECT MANAGER
            </span>
            <span className="text-orange-accent">&rarr;</span>
            <span className="px-2.5 py-1 bg-orange-accent text-white font-bold">
              2020 &bull; CONSTRUCTION MANAGER
            </span>
          </div>
          <div className="text-[11px] text-concrete-600 hidden xl:block">
            1996&ndash;Present Track Record
          </div>
        </div>

        {/* Vertical Timeline Progression */}
        <div className="space-y-6">
          {CAREER_TIMELINE.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const isCurrent = item.level === "current-cm";
            const isPM = item.level === "executive-pm";

            return (
              <div
                key={index}
                className={`border transition-all ${
                  isCurrent
                    ? "bg-white border-orange-accent shadow-sm ring-1 ring-orange-accent/30"
                    : isPM
                    ? "bg-white border-concrete-400 shadow-2xs"
                    : "bg-[#FAF9F6] border-concrete-300 hover:border-concrete-400"
                }`}
              >
                {/* Accessible Header Button */}
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  className="w-full p-5 sm:p-6 text-left cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none min-h-[44px] focus-visible:outline-2 focus-visible:outline-orange-accent"
                  aria-expanded={isExpanded}
                  aria-controls={`timeline-details-${index}`}
                >
                  <div className="space-y-1.5">
                    {/* Period & Marker */}
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span
                        className={`font-bold px-2 py-0.5 ${
                          isCurrent
                            ? "bg-orange-accent text-white"
                            : isPM
                            ? "bg-concrete-900 text-white"
                            : "bg-concrete-200 text-concrete-800"
                        }`}
                      >
                        {item.period}
                      </span>
                      <span className="text-concrete-500 font-semibold uppercase">
                        [{item.country}]
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-bold text-orange-accent bg-orange-50 px-2 py-0.5 border border-orange-200 uppercase">
                          Current Role
                        </span>
                      )}
                      {isPM && (
                        <span className="text-[10px] font-bold text-concrete-900 bg-concrete-100 px-2 py-0.5 border border-concrete-300 uppercase">
                          Executive Milestone
                        </span>
                      )}
                    </div>

                    {/* Role Title */}
                    <div
                      className={`font-sans font-bold text-concrete-950 ${
                        isCurrent
                          ? "text-xl sm:text-2xl text-concrete-950"
                          : isPM
                          ? "text-xl sm:text-2xl text-concrete-900"
                          : "text-lg sm:text-xl text-concrete-800"
                      }`}
                    >
                      {item.role}
                    </div>

                    {/* Company and Location */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-concrete-600">
                      <span className="flex items-center gap-1.5 font-bold text-concrete-800">
                        <Building className="w-3.5 h-3.5 text-concrete-500" />
                        {item.companyOrClient}
                      </span>
                      <span className="flex items-center gap-1 text-concrete-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Button Affordance */}
                  <div className="flex items-center gap-2 text-xs font-mono text-concrete-600 shrink-0">
                    <span className="hidden sm:inline">{isExpanded ? "Collapse Scope" : "Expand Scope"}</span>
                    <div className="w-8 h-8 bg-concrete-100 flex items-center justify-center border border-concrete-300">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-orange-accent" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Scope Details */}
                {isExpanded && (
                  <div
                    id={`timeline-details-${index}`}
                    className="px-5 sm:px-6 pb-6 pt-2 border-t border-concrete-200 bg-white space-y-4"
                  >
                    <p className="text-sm text-concrete-800 font-sans leading-relaxed">
                      {item.summary}
                    </p>

                    <div>
                      <div className="font-mono text-xs font-bold text-concrete-900 uppercase tracking-wider mb-2">
                        Key Responsibilities &amp; Execution:
                      </div>
                      <ul className="space-y-1.5">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-concrete-700">
                            <span className="text-orange-accent font-bold mt-0.5">&bull;</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <div className="font-mono text-[11px] font-semibold text-concrete-500 uppercase mb-2">
                        Key Disciplines Involved:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.disciplines.map((disc, dIdx) => (
                          <span
                            key={dIdx}
                            className="font-mono text-[11px] px-2.5 py-1 bg-concrete-100 text-concrete-800 border border-concrete-200"
                          >
                            {disc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
