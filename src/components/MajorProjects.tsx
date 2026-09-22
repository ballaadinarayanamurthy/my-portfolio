"use client";

import React, { useState } from "react";
import { DOCUMENTED_PROJECTS } from "@/data/portfolioData";
import { Building2, MapPin, ChevronRight, FileText } from "lucide-react";

export default function MajorProjects() {
  const [activeProjectModal, setActiveProjectModal] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setActiveProjectModal(activeProjectModal === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-white border-b border-concrete-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-concrete-300 gap-4">
          <div>
            <div className="font-mono text-xs text-orange-accent font-bold uppercase tracking-widest mb-2">
              03 // MAJOR PROJECT DOSSIERS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 font-sans tracking-tight">
              Selected Major &amp; High-Rise Projects
            </h2>
            <p className="text-sm sm:text-base text-concrete-600 font-sans mt-1">
              Documented Saudi Aramco &amp; SABIC industrial projects in KSA, and high-rise residential &amp; infrastructure projects in India.
            </p>
          </div>

          <div className="font-mono text-xs text-concrete-600 bg-concrete-100 p-3 border border-concrete-300">
            <strong>DOCUMENTED RECORD:</strong> Preserving exact project names, organizations, and high-rise structural scope as recorded in CV.
          </div>
        </div>

        {/* 6 Minimalist Project Dossiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENTED_PROJECTS.map((proj) => {
            const isSelected = activeProjectModal === proj.id;
            return (
              <div
                key={proj.id}
                className={`border transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#FAF9F6] border-orange-accent shadow-md ring-1 ring-orange-accent/40"
                    : "bg-concrete-50/50 border-concrete-300 hover:bg-white hover:border-concrete-400"
                }`}
              >
                <div className="p-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-concrete-200 font-mono text-xs">
                    <span className="font-bold text-orange-accent">PROJECT // {proj.number}</span>
                    <span className="text-concrete-600 font-medium">{proj.country}</span>
                  </div>

                  {/* Organization & Title */}
                  <div className="space-y-2">
                    <div className="font-mono text-xs font-bold text-concrete-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-orange-accent" />
                      {proj.organization}
                    </div>

                    <h3 className="text-xl font-bold text-concrete-950 font-sans tracking-tight leading-snug">
                      {proj.title}
                    </h3>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-concrete-600 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-concrete-400 shrink-0" />
                      <span>{proj.location}</span>
                    </div>
                  </div>

                  {/* Classification */}
                  <div className="mt-5 p-2.5 bg-white border border-concrete-200 font-mono text-xs text-concrete-700">
                    <span className="text-[10px] text-concrete-400 uppercase block">CLASSIFICATION</span>
                    <span className="font-bold text-concrete-900">{proj.classification}</span>
                  </div>

                  {/* Documented Record Expansion */}
                  {isSelected && (
                    <div
                      id={`project-record-${proj.id}`}
                      className="mt-4 pt-3 border-t border-concrete-200 text-xs font-mono text-concrete-700 space-y-1 bg-white p-3 border border-concrete-200"
                    >
                      <div className="text-orange-accent font-bold uppercase text-[10px]">VERIFIED CV CONTEXT</div>
                      <p>{proj.documentedContext}</p>
                    </div>
                  )}
                </div>

                {/* Footer Action Button (Accessible min 44px touch target) */}
                <button
                  type="button"
                  onClick={() => toggleProject(proj.id)}
                  className="w-full px-6 py-3.5 min-h-[44px] bg-white border-t border-concrete-200 font-mono text-xs text-concrete-700 hover:text-orange-accent hover:bg-concrete-50 transition-colors flex items-center justify-between focus-visible:outline-2 focus-visible:outline-orange-accent"
                  aria-expanded={isSelected}
                  aria-controls={`project-record-${proj.id}`}
                >
                  <span className="text-concrete-500 font-medium">{proj.organization}</span>
                  <span className="text-orange-accent font-bold flex items-center gap-1">
                    {isSelected ? "CLOSE RECORD" : "VIEW RECORD"}
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "rotate-90" : ""}`} />
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
