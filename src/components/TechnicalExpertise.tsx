"use client";

import React, { useState } from "react";
import { TECHNICAL_EXPERTISE_6_CATEGORIES } from "@/data/portfolioData";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function TechnicalExpertise() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <section id="expertise" className="py-20 bg-white border-b border-concrete-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-concrete-300 gap-4">
          <div>
            <div className="font-mono text-xs text-orange-accent font-bold uppercase tracking-widest mb-2">
              06 // ENGINEERING CAPABILITY MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 font-sans tracking-tight">
              Technical Expertise
            </h2>
          </div>
          <div className="font-mono text-xs text-concrete-600 max-w-sm">
            6 core civil engineering categories directly established through 30+ years of large-scale construction management and site execution.
          </div>
        </div>

        {/* 6 High-Level Categories + Interactive Capability Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 6 Category Buttons (Min 44px Touch Targets) */}
          <div className="lg:col-span-5 space-y-2">
            {TECHNICAL_EXPERTISE_6_CATEGORIES.map((cat, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  type="button"
                  key={cat.category}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full p-4 min-h-[44px] text-left border transition-all flex items-center justify-between focus-visible:outline-2 focus-visible:outline-orange-accent ${
                    isSelected
                      ? "bg-concrete-900 text-white border-concrete-900 shadow-2xs"
                      : "bg-[#FAF9F6] text-concrete-900 border-concrete-300 hover:bg-white hover:border-concrete-400"
                  }`}
                  aria-selected={isSelected}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 ${
                        isSelected ? "bg-orange-accent text-white" : "bg-concrete-200 text-concrete-700"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="font-sans font-bold text-sm sm:text-base">
                      {cat.category}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-orange-400 translate-x-1" : "text-concrete-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Competency Grid */}
          <div className="lg:col-span-7 bg-[#FAF9F6] border border-concrete-300 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-concrete-200">
              <div>
                <span className="font-mono text-[10px] text-orange-accent font-bold uppercase">
                  DISCIPLINE // 0{selectedIdx + 1}
                </span>
                <h3 className="text-2xl font-bold text-concrete-950 font-sans mt-0.5">
                  {TECHNICAL_EXPERTISE_6_CATEGORIES[selectedIdx].category}
                </h3>
              </div>
              <span className="font-mono text-xs text-concrete-600 bg-white px-3 py-1 border border-concrete-200">
                AUDITED PRACTICE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TECHNICAL_EXPERTISE_6_CATEGORIES[selectedIdx].skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 bg-white border border-concrete-200 font-mono text-xs text-concrete-800 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-concrete-200 font-mono text-[11px] text-concrete-500 flex justify-between">
              <span>STATUS: SOURCED DIRECTLY FROM CV</span>
              <span className="text-concrete-900 font-bold">VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
