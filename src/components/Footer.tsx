"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, FileDown, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerNavLinks = [
    { label: "Profile", href: "#profile" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "QA/QC", href: "#qaqc" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-concrete-950 text-concrete-400 py-12 border-t border-concrete-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-concrete-800">
          {/* Brand & Identity */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-orange-accent" />
              <span className="font-sans font-bold text-lg text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="font-mono text-xs text-concrete-300">
              Civil Construction Manager | Project Manager
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-concrete-400 pt-1">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                className="hover:text-orange-accent transition-colors flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-orange-accent"
              >
                <Phone className="w-3.5 h-3.5 text-orange-accent" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-orange-accent transition-colors flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-orange-accent"
              >
                <Mail className="w-3.5 h-3.5 text-orange-accent" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links & Action */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-concrete-300">
              {footerNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-orange-accent transition-colors py-1 focus-visible:outline-2 focus-visible:outline-orange-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] bg-concrete-800 text-concrete-200 hover:text-white hover:bg-concrete-700 border border-concrete-700 transition-colors font-mono text-xs focus-visible:outline-2 focus-visible:outline-orange-accent"
              >
                <FileDown className="w-3.5 h-3.5 text-orange-accent" />
                <span>Download CV</span>
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 min-h-[44px] bg-concrete-900 text-concrete-300 hover:text-white border border-concrete-800 hover:border-orange-accent transition-colors font-mono text-xs focus-visible:outline-2 focus-visible:outline-orange-accent"
                aria-label="Scroll to top of page"
              >
                <span>TOP</span>
                <ArrowUp className="w-3.5 h-3.5 text-orange-accent" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Technical Stamp */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-concrete-400">
          <div>
            &copy; 2026 B. Adinarayana Murthy. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-concrete-400">
            <span>Hyderabad &bull; Pan-India &bull; Saudi Arabia</span>
            <span>&bull;</span>
            <span>Osmania University &apos;94</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
