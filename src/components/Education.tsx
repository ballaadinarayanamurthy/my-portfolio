"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GraduationCap, Landmark } from "lucide-react";

export default function Education() {
  return (
    <section className="py-12 bg-[#F6F4EF] border-b border-concrete-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-concrete-300 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-concrete-100 rounded-full border border-concrete-200 shrink-0">
              <GraduationCap className="w-6 h-6 text-orange-accent" />
            </div>
            <div>
              <div className="font-mono text-[11px] text-orange-accent font-bold uppercase tracking-wider">
                ACADEMIC QUALIFICATION
              </div>
              <h3 className="text-xl font-bold text-concrete-950 font-sans mt-0.5">
                {PERSONAL_INFO.education.degree}
              </h3>
              <p className="font-mono text-xs text-concrete-700 mt-1">
                {PERSONAL_INFO.education.institution} &bull; Graduated {PERSONAL_INFO.education.year}
              </p>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-concrete-200 pt-4 md:pt-0 md:pl-6 flex flex-col justify-center">
            <div className="font-mono text-[11px] text-concrete-500 uppercase">
              FOUNDATIONAL INSTITUTION
            </div>
            <div className="font-sans text-xs text-concrete-800 font-semibold mt-0.5">
              Osmania University College of Engineering
            </div>
            <div className="font-mono text-[10px] text-concrete-500">
              Hyderabad, Telangana, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
