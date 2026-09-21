"use client";

import React, { useState } from "react";
import { Layers } from "lucide-react";

export default function BlueprintCanvas() {
  const [activeLayer, setActiveLayer] = useState<"structural" | "piling">("structural");

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
          {(["structural", "piling"] as const).map((layer) => (
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
          SEC: 01 // RCC + STRUCTURAL STEEL // KSA &amp; INDIA
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
          <g className={activeLayer === "structural" || activeLayer === "piling" ? "opacity-100" : "opacity-30"}>
            {/* Bored Piles */}
            <line x1="140" y1="215" x2="140" y2="280" stroke="#C65A2E" strokeWidth="2.5" strokeDasharray="4 2" />
            <line x1="200" y1="215" x2="200" y2="280" stroke="#C65A2E" strokeWidth="2.5" strokeDasharray="4 2" />
            <line x1="300" y1="215" x2="300" y2="280" stroke="#C65A2E" strokeWidth="2.5" strokeDasharray="4 2" />
            <line x1="360" y1="215" x2="360" y2="280" stroke="#C65A2E" strokeWidth="2.5" strokeDasharray="4 2" />

            {/* Pile Caps */}
            <rect x="120" y="200" width="100" height="18" fill="#141E2D" stroke="#38BDF8" strokeWidth="1.2" />
            <rect x="280" y="200" width="100" height="18" fill="#141E2D" stroke="#38BDF8" strokeWidth="1.2" />
            
            {/* Ground Level */}
            <line x1="60" y1="200" x2="440" y2="200" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 2" />
          </g>

          {/* Superstructure Frame */}
          <g className={activeLayer === "structural" ? "opacity-100" : "opacity-40"}>
            {/* Columns */}
            <rect x="160" y="70" width="20" height="130" fill="#141E2D" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="320" y="70" width="20" height="130" fill="#141E2D" stroke="#38BDF8" strokeWidth="1.5" />

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

          {/* Dimension Span */}
          <g stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8">
            <line x1="100" y1="285" x2="400" y2="285" />
            <line x1="100" y1="280" x2="100" y2="290" />
            <line x1="400" y1="280" x2="400" y2="290" />
            <text x="225" y="282" fill="rgba(255, 255, 255, 0.6)" fontSize="8" fontFamily="monospace">
              SPAN 24.0 m
            </text>
          </g>
        </svg>

        <div className="absolute bottom-2 right-3 font-mono text-[9px] text-gray-400">
          SAUDI ARAMCO SAES &bull; IS-456
        </div>
      </div>
    </div>
  );
}
