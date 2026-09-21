"use client";

import React from "react";
import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-gray-800"
    >
      <Printer className="w-4 h-4" />
      <span>Print / Save as PDF</span>
    </button>
  );
}
