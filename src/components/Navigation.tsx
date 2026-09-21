"use client";

import React, { useState, useEffect, useRef } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { FileDown, Menu, X, Phone, Mail, ArrowRight } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Profile", href: "#profile" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "QA/QC", href: "#qaqc" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F6F4EF]/95 backdrop-blur-md border-b border-concrete-300 py-3 shadow-2xs"
            : "bg-[#F6F4EF]/90 backdrop-blur-xs border-b border-concrete-300/60 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Identity */}
            <a
              href="#profile"
              className="group flex flex-col focus:outline-hidden"
              aria-label="B. Adinarayana Murthy - Home"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-orange-accent" />
                <span className="font-mono text-[10px] text-concrete-600 tracking-widest uppercase font-semibold">
                  CIVIL PORTFOLIO
                </span>
              </div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-concrete-950 group-hover:text-orange-accent transition-colors font-sans">
                B. ADINARAYANA MURTHY
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center space-x-1 font-mono text-xs text-concrete-700"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-xs hover:text-orange-accent hover:bg-concrete-200/60 transition-all focus-visible:outline-2 focus-visible:outline-orange-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={PERSONAL_INFO.cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] text-xs font-mono font-semibold text-concrete-900 bg-white border border-concrete-400 hover:border-orange-accent hover:text-orange-accent transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-orange-accent"
              >
                <FileDown className="w-3.5 h-3.5 text-orange-accent" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] text-xs font-mono font-semibold text-white bg-concrete-900 hover:bg-orange-accent transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-orange-accent"
              >
                <span>Contact</span>
                <span className="text-orange-400">&rarr;</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button (44px min touch target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-concrete-800 hover:text-orange-accent focus-visible:outline-2 focus-visible:outline-orange-accent"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <div
            ref={menuRef}
            className="fixed top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#F6F4EF] border-b border-concrete-300 shadow-2xl p-6 space-y-4"
          >
            <div className="font-mono text-[10px] text-concrete-500 uppercase tracking-widest pb-1 border-b border-concrete-200">
              NAVIGATION
            </div>

            <nav className="grid grid-cols-1 gap-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-3 min-h-[44px] font-mono text-sm font-semibold text-concrete-800 hover:text-orange-accent hover:bg-concrete-200/80 border-l-2 border-transparent hover:border-orange-accent transition-all"
                >
                  <span>{link.label}</span>
                  <span className="text-concrete-400">&rarr;</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-concrete-300 space-y-2.5">
              <a
                href={PERSONAL_INFO.cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] text-xs font-mono font-bold text-concrete-900 bg-white border border-concrete-400 hover:border-orange-accent"
              >
                <FileDown className="w-4 h-4 text-orange-accent" />
                Download CV (PDF)
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] text-xs font-mono font-bold text-white bg-concrete-900 hover:bg-orange-accent"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                Call: {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
