"use client";

import React, { useState } from "react";
import { CURRENT_ROLE_SCOPES } from "@/data/portfolioData";
import { Building2, MapPin, Calendar, CheckCircle2, ChevronRight, Layers } from "lucide-react";

export default function CurrentRoleCard() {
  const [activeCategory, setActiveCategory] = useState<string>("FOUNDATIONS");

  const activeScope =
    CURRENT_ROLE_SCOPES.find((s) => s.category === activeCategory) || CURRENT_ROLE_SCOPES[0];

  return (
    <section className="py-20 bg-[#F6F4EF] border-b border-concrete-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-concrete-300 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-orange-accent font-bold uppercase tracking-widest mb-2">
              02 // CURRENT EXECUTIVE ENGAGEMENT
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 font-sans tracking-tight">
              Construction Manager — Civil
            </h2>
          </div>
          <div className="font-mono text-xs text-concrete-700 bg-white px-4 py-2.5 border border-concrete-300">
            <strong>MANDATE:</strong> Turnkey civil construction from excavation to commissioning.
          </div>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Role & Organization Profile (4 cols) */}
          <div className="lg:col-span-4 bg-white border border-concrete-300 p-6 sm:p-8 space-y-6 shadow-2xs">
            <div className="space-y-4">
              <div>
                <span className="font-mono text-[10px] text-orange-accent font-bold uppercase tracking-wider block">
                  ROLE
                </span>
                <div className="font-sans font-bold text-xl text-concrete-950 mt-0.5">
                  Construction Manager &mdash; Civil
                </div>
              </div>

              <div className="pt-3 border-t border-concrete-200">
                <span className="font-mono text-[10px] text-concrete-500 uppercase tracking-wider block">
                  COMPANY
                </span>
                <div className="font-sans font-bold text-lg text-concrete-900 mt-0.5">
                  Apoorva Projects
                </div>
              </div>

              <div className="pt-3 border-t border-concrete-200">
                <span className="font-mono text-[10px] text-concrete-500 uppercase tracking-wider block">
                  PERIOD
                </span>
                <div className="font-mono font-bold text-sm text-orange-accent mt-0.5">
                  Nov 2020 &mdash; Present
                </div>
              </div>

              <div className="pt-3 border-t border-concrete-200">
                <span className="font-mono text-[10px] text-concrete-500 uppercase tracking-wider block">
                  DEPLOYMENT SITES
                </span>
                <div className="font-mono text-xs text-concrete-800 mt-0.5">
                  Rajahmundry, Narsapur, Palakole, Bhimavaram (AP) &amp; Cuttak (Odisha)
                </div>
              </div>
            </div>

            <div className="p-4 bg-concrete-100/70 border border-concrete-300 font-mono text-[11px] text-concrete-700 space-y-1">
              <strong className="text-concrete-900 block uppercase">Documented Client Accounts:</strong>
              <div>&bull; ONGC &amp; GAIL Energy Sites</div>
              <div>&bull; Kuppam Schreiber Dynamix</div>
              <div>&bull; Gated High-Rise Residential</div>
              <div>&bull; AP Govt Healthcare Buildings</div>
            </div>
          </div>

          {/* Right Column: Construction Scope Matrix (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-concrete-300 p-6 sm:p-8 shadow-2xs space-y-6">
            <div>
              <div className="font-mono text-xs font-bold text-concrete-600 uppercase tracking-wider mb-3">
                CONSTRUCTION SCOPE (SELECT CATEGORY TO INSPECT RECORD):
              </div>

              {/* Scope Phase Selector Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CURRENT_ROLE_SCOPES.map((scope) => {
                  const isSelected = activeCategory === scope.category;
                  return (
                    <button
                      key={scope.category}
                      onClick={() => setActiveCategory(scope.category)}
                      className={`p-3 text-left border transition-all ${
                        isSelected
                          ? "bg-concrete-900 text-white border-concrete-900 shadow-2xs"
                          : "bg-concrete-50 text-concrete-800 border-concrete-200 hover:border-concrete-400"
                      }`}
                    >
                      <div className="font-sans font-bold text-xs">{scope.category}</div>
                      <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? "text-concrete-300" : "text-concrete-500"}`}>
                        {scope.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Scope Details */}
            <div className="pt-4 border-t border-concrete-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-sans font-bold text-lg text-concrete-950">
                  {activeScope.category} &mdash; <span className="text-orange-accent">{activeScope.label}</span>
                </h3>
                <span className="font-mono text-[11px] text-concrete-500 uppercase">
                  VERIFIED CV SCOPE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeScope.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-concrete-50 border border-concrete-200 font-sans text-xs text-concrete-800 flex items-start gap-2.5"
                  >
                    <span className="text-orange-accent font-bold mt-0.5">&bull;</span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
