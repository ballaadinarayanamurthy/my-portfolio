"use client";

import React from "react";
import { Globe2, MapPin, ArrowRightLeft } from "lucide-react";

export default function InternationalMap() {
  return (
    <section className="py-20 bg-[#F6F4EF] border-b border-concrete-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-concrete-300 gap-4">
          <div>
            <div className="font-mono text-xs text-orange-accent font-bold uppercase tracking-widest mb-2">
              05 // GEOGRAPHICAL SCOPE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 font-sans tracking-tight">
              India <span className="text-orange-accent">&bull;</span> Kingdom of Saudi Arabia
            </h2>
          </div>
          <div className="font-mono text-xs text-concrete-600 max-w-sm">
            Proven execution across two distinct engineering environments: Saudi Aramco energy assets (1996&ndash;2020) and prominent Indian industrial &amp; infrastructure EPC.
          </div>
        </div>

        {/* Dual Regional Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* India Block */}
          <div className="lg:col-span-5 bg-white border border-concrete-300 p-8 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-concrete-200">
              <div>
                <span className="font-mono text-[10px] text-orange-accent font-bold uppercase">
                  CURRENT PROFESSIONAL FOCUS
                </span>
                <h3 className="text-2xl font-bold text-concrete-950 font-sans">
                  INDIA
                </h3>
              </div>
              <MapPin className="w-6 h-6 text-orange-accent" />
            </div>

            <ul className="space-y-2 font-mono text-xs text-concrete-800">
              <li className="flex items-start gap-2">
                <span className="text-orange-accent font-bold">&bull;</span>
                <span>Civil Construction &amp; Infrastructure Execution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-accent font-bold">&bull;</span>
                <span>Industrial Warehousing &amp; Plants (Kuppam Schreiber Dynamix)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-accent font-bold">&bull;</span>
                <span>Energy Sector Civil Works (ONGC, GAIL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-accent font-bold">&bull;</span>
                <span>Gated High-Rise Community Residential (Rajahmundry)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-accent font-bold">&bull;</span>
                <span>Government Public Healthcare Infrastructure (AP Govt UPHC)</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-concrete-200 font-mono text-[11px] text-concrete-500 flex justify-between">
              <span>TARGET REGION</span>
              <span className="text-concrete-900 font-bold">Hyderabad / Telangana &amp; Beyond</span>
            </div>
          </div>

          {/* Central Bridge */}
          <div className="lg:col-span-2 flex lg:flex-col items-center justify-center gap-3 py-2 lg:py-0">
            <div className="h-px lg:h-16 w-12 lg:w-px bg-concrete-300" />
            <div className="p-3 bg-concrete-900 text-white rounded-full">
              <ArrowRightLeft className="w-4 h-4 text-orange-accent" />
            </div>
            <div className="font-mono text-[10px] text-center text-concrete-600 font-bold">
              30+ YEARS<br />
              <span className="text-orange-accent">CAREER</span>
            </div>
            <div className="h-px lg:h-16 w-12 lg:w-px bg-concrete-300" />
          </div>

          {/* Saudi Arabia Block */}
          <div className="lg:col-span-5 bg-white border border-concrete-300 p-8 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-concrete-200">
              <div>
                <span className="font-mono text-[10px] text-orange-accent font-bold uppercase">
                  1996 &ndash; 2020 TRACK RECORD
                </span>
                <h3 className="text-2xl font-bold text-concrete-950 font-sans">
                  KINGDOM OF SAUDI ARABIA
                </h3>
              </div>
              <Globe2 className="w-6 h-6 text-orange-accent" />
            </div>

            <ul className="space-y-2 font-mono text-xs text-concrete-800">
              <li className="flex items-start gap-2">
                <span className="text-orange-accent font-bold">&bull;</span>
                <span>Saudi Aramco Projects (Abqaiq, Southern Area GOSPs, Shaybah)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-accent font-bold">&bull;</span>
                <span>SABIC Hadeed Steel Plant Expansion (High-Rise &amp; Heavy Steel)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-accent font-bold">&bull;</span>
                <span>Saudi Kayan Petrochemical Complex (Jubail Industrial City)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-accent font-bold">&bull;</span>
                <span>Project Manager &bull; Construction Manager &bull; QA/QC &bull; Site Engineer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-accent font-bold">&bull;</span>
                <span>Saudi Aramco SAES Engineering Standards &amp; Safety Regulations</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-concrete-200 font-mono text-[11px] text-concrete-500 flex justify-between">
              <span>STANDARDS</span>
              <span className="text-concrete-900 font-bold">Saudi Aramco &bull; SABIC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
