"use client";

import React, { useState } from "react";
import { Layers } from "lucide-react";

export default function BlueprintCanvas() {
  const [activeLayer, setActiveLayer] = useState<"high-rise" | "structural" | "piling">("high-rise");

  return (
    <div className="relative w-full rounded-sm bg-[#0E1520] border border-[#223146] overflow-hidden shadow-xl">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#141E2D] border-b border-[#223146] font-mono text-[11px] text-gray-300">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-orange-accent" />
          <span className="font-semibold tracking-wider text-white">CAD // STRUCTURAL DRAFTING</span>
          <span className="hidden sm:inline text-gray-500">| DWG-BAM-01</span>
        </div>
        <div className="flex items-center gap-1">
          {(["high-rise", "structural", "piling"] as const).map((layer) => (
            <button
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-wider transition-all ${
                activeLayer === layer
                  ? "bg-orange-accent text-white font-bold"
                  : "bg-[#0E1520] text-gray-400 hover:text-white border border-[#223146]"
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative h-[280px] sm:h-[320px] w-full blueprint-canvas-grid flex items-center justify-center p-3">
        <div className="absolute top-2 left-3 font-mono text-[9px] text-sky-400/60 select-none">
          {activeLayer === "high-rise"
            ? "SEC: 01 // MULTI-STOREY HIGH-RISE TOWER // RAJAHMUNDRY & KSA"
            : activeLayer === "structural"
            ? "SEC: 02 // RCC & HEAVY INDUSTRIAL STEEL FRAME"
            : "SEC: 03 // BORED CAST-IN-SITU PILING & RAFT CAP"}
        </div>

        <svg
          viewBox="0 0 500 300"
          className="w-full h-full max-w-[460px] text-sky-400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Grid Axes */}
          <g stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.8" strokeDasharray="2 3">
            <line x1="40" y1="150" x2="460" y2="150" />
            <line x1="250" y1="20" x2="250" y2="280" />
            <circle cx="250" cy="150" r="100" />
          </g>

          {/* Substructure & Piling */}
          <g className={activeLayer === "piling" || activeLayer === "high-rise" || activeLayer === "structural" ? "opacity-100" : "opacity-30"}>
            {/* Bored Piles */}
            <line x1="140" y1="225" x2="140" y2="280" stroke="#C65A2E" strokeWidth="2.5" strokeDasharray="4 2" />
            <line x1="190" y1="225" x2="190" y2="280" stroke="#C65A2E" strokeWidth="2.5" strokeDasharray="4 2" />
            <line x1="250" y1="225" x2="250" y2="280" stroke="#C65A2E" strokeWidth="2.5" strokeDasharray="4 2" />
            <line x1="310" y1="225" x2="310" y2="280" stroke="#C65A2E" strokeWidth="2.5" strokeDasharray="4 2" />
            <line x1="360" y1="225" x2="360" y2="280" stroke="#C65A2E" strokeWidth="2.5" strokeDasharray="4 2" />

            {/* Raft / Pile Caps */}
            <rect x="110" y="210" width="280" height="15" fill="#141E2D" stroke="#38BDF8" strokeWidth="1.2" />
            
            {/* Ground Level */}
            <line x1="40" y1="210" x2="460" y2="210" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 2" />
          </g>

          {/* High-Rise Multi-Storey Tower Superstructure */}
          {activeLayer === "high-rise" && (
            <g className="opacity-100">
              {/* Central Core Shear Wall */}
              <rect x="235" y="30" width="30" height="180" fill="#141E2D" stroke="#38BDF8" strokeWidth="1.5" />
              <line x1="250" y1="30" x2="250" y2="210" stroke="#C65A2E" strokeWidth="1" strokeDasharray="3 3" />

              {/* Multi-Floor Columns */}
              <rect x="140" y="30" width="12" height="180" fill="#141E2D" stroke="#38BDF8" strokeWidth="1.2" />
              <rect x="348" y="30" width="12" height="180" fill="#141E2D" stroke="#38BDF8" strokeWidth="1.2" />

              {/* Multi-Level Floor Slabs */}
              {/* Floor 01 */}
              <line x1="120" y1="170" x2="380" y2="170" stroke="#38BDF8" strokeWidth="2" />
              <text x="75" y="173" fill="rgba(56, 189, 248, 0.7)" fontSize="7" fontFamily="monospace">LVL +4.0m</text>

              {/* Floor 02 */}
              <line x1="120" y1="125" x2="380" y2="125" stroke="#38BDF8" strokeWidth="2" />
              <text x="75" y="128" fill="rgba(56, 189, 248, 0.7)" fontSize="7" fontFamily="monospace">LVL +8.0m</text>

              {/* Floor 03 */}
              <line x1="120" y1="80" x2="380" y2="80" stroke="#38BDF8" strokeWidth="2" />
              <text x="75" y="83" fill="rgba(56, 189, 248, 0.7)" fontSize="7" fontFamily="monospace">LVL +12.0m</text>

              {/* Terrace / Roof Slab */}
              <line x1="120" y1="35" x2="380" y2="35" stroke="#38BDF8" strokeWidth="2.5" />
              <text x="75" y="38" fill="rgba(56, 189, 248, 0.7)" fontSize="7" fontFamily="monospace">ROOF +16.0m</text>

              {/* Parapet & Overhead Water Tank / Lift Machine Room */}
              <rect x="230" y="18" width="40" height="17" fill="#141E2D" stroke="#C65A2E" strokeWidth="1.2" />

              {/* Cross Bracing / Staging indicator */}
              <line x1="152" y1="170" x2="235" y2="125" stroke="rgba(198, 90, 46, 0.4)" strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="265" y1="170" x2="348" y2="125" stroke="rgba(198, 90, 46, 0.4)" strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="152" y1="125" x2="235" y2="80" stroke="rgba(198, 90, 46, 0.4)" strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="265" y1="125" x2="348" y2="80" stroke="rgba(198, 90, 46, 0.4)" strokeWidth="0.8" strokeDasharray="2 2" />
            </g>
          )}

          {/* Standard Structural Frame */}
          {activeLayer === "structural" && (
            <g className="opacity-100">
              {/* Columns */}
              <rect x="160" y="70" width="20" height="140" fill="#141E2D" stroke="#38BDF8" strokeWidth="1.5" />
              <rect x="320" y="70" width="20" height="140" fill="#141E2D" stroke="#38BDF8" strokeWidth="1.5" />

              {/* Floor Beam */}
              <line x1="90" y1="140" x2="410" y2="140" stroke="#38BDF8" strokeWidth="2" />

              {/* Roof Truss */}
              <path d="M 100 70 L 250 20 L 400 70 Z" stroke="#38BDF8" strokeWidth="1.8" fill="rgba(56, 189, 248, 0.02)" />
              <line x1="160" y1="70" x2="250" y2="20" stroke="#C65A2E" strokeWidth="1.2" />
              <line x1="340" y1="70" x2="250" y2="20" stroke="#C65A2E" strokeWidth="1.2" />
              <line x1="250" y1="20" x2="250" y2="70" stroke="#C65A2E" strokeWidth="1.5" />

              {/* Cross Braces */}
              <line x1="180" y1="70" x2="320" y2="140" stroke="rgba(198, 90, 46, 0.5)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="320" y1="70" x2="180" y2="140" stroke="rgba(198, 90, 46, 0.5)" strokeWidth="1" strokeDasharray="3 3" />
            </g>
          )}

          {/* Dimension Span */}
          <g stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8">
            <line x1="110" y1="290" x2="390" y2="290" />
            <line x1="110" y1="285" x2="110" y2="295" />
            <line x1="390" y1="285" x2="390" y2="295" />
            <text x="215" y="287" fill="rgba(255, 255, 255, 0.6)" fontSize="8" fontFamily="monospace">
              RAFT SPAN 28.0 m
            </text>
          </g>
        </svg>

        <div className="absolute bottom-2 right-3 font-mono text-[9px] text-gray-400">
          SAUDI ARAMCO SAES &bull; IS-456 &bull; NBC TALL BUILDINGS
        </div>
      </div>
    </div>
  );
}

