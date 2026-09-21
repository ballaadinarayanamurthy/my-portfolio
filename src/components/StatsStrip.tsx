"use client";

import React from "react";
import { CORE_STATS } from "@/data/portfolioData";

export default function StatsStrip() {
  return (
    <section className="bg-white border-b border-concrete-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-concrete-200">
          {CORE_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="py-6 px-4 sm:px-6 flex flex-col justify-center hover:bg-concrete-50/60 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-concrete-950 font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="font-sans font-bold text-sm text-concrete-900 mt-1">
                {stat.label}
              </div>
              <div className="font-mono text-xs text-concrete-600 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
