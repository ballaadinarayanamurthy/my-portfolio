"use client";

import React from "react";
import { QAQC_PROTOCOLS } from "@/data/portfolioData";
import { ClipboardCheck, ShieldCheck } from "lucide-react";

export default function DrawingsToExecution() {
  return (
    <section id="qaqc" className="py-20 bg-white border-b border-concrete-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-concrete-300 gap-4">
          <div>
            <div className="font-mono text-xs text-orange-accent font-bold uppercase tracking-widest mb-2">
              04 // QA/QC RIGOR
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 font-sans tracking-tight">
              QUALITY / QA-QC
            </h2>
          </div>
          <div className="font-mono text-xs text-concrete-600 max-w-md">
            QA/QC Engineer on Saudi Aramco projects (2002&ndash;2008), implementing quality management systems, inspection test plans, and multi-tier stage verification.
          </div>
        </div>

        {/* 6 Inspection Protocols Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {QAQC_PROTOCOLS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] border border-concrete-300 p-6 flex flex-col justify-between hover:border-orange-accent transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-concrete-200 font-mono text-xs">
                  <span className="font-bold text-orange-accent">PROTOCOL // 0{idx + 1}</span>
                  <span className="text-concrete-500 font-medium">[{item.tag}]</span>
                </div>

                <h3 className="text-lg font-bold text-concrete-950 font-sans mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-concrete-700 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-concrete-200 font-mono text-[10px] text-concrete-500 uppercase flex items-center justify-between">
                <span>VERIFIED REGIME</span>
                <span className="text-concrete-900 font-bold">2002&ndash;2008 KSA</span>
              </div>
            </div>
          ))}
        </div>

        {/* Standards Callout */}
        <div className="mt-8 p-4 bg-concrete-100 border border-concrete-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-concrete-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-accent shrink-0" />
            <span>CORE REGIMES: Inspection Test Plans &bull; Method Statements &bull; QC Plans &bull; Material Inspections</span>
          </div>
          <span className="text-concrete-900 font-bold">SAUDI ARAMCO SAES COMPLIANT</span>
        </div>
      </div>
    </section>
  );
}
