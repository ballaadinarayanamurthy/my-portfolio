"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Phone, Mail, FileDown, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-concrete-900 text-white border-b border-concrete-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Senior Executive Briefing */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono text-xs text-orange-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-accent" />
              <span>OPPORTUNITIES &amp; ENGAGEMENTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight leading-tight">
              Experienced leadership for complex construction environments.
            </h2>

            <div className="space-y-1 font-mono text-sm text-concrete-300">
              <div className="text-white font-bold">&bull; Construction Management</div>
              <div className="text-white font-bold">&bull; Project Management</div>
              <div className="text-white font-bold">&bull; Civil Engineering Leadership</div>
            </div>

            <p className="text-sm sm:text-base text-concrete-300 font-sans leading-relaxed pt-2">
              Open to relevant construction and project management opportunities in <strong className="text-white">Hyderabad / Telangana</strong>, across India, and with international EPC organizations.
            </p>

            <div className="p-4 bg-concrete-800/80 border border-concrete-700 font-mono text-xs text-concrete-300 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-bold">
                <MapPin className="w-4 h-4 text-orange-accent" />
                <span>TARGET ENGAGEMENT ZONE</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                <strong className="text-orange-400">Open to Opportunities:</strong> {PERSONAL_INFO.targetLocation} &bull; Pan-India &bull; International EPC
              </p>
            </div>
          </div>

          {/* Right Column: Direct Contact Dossier */}
          <div className="lg:col-span-6 bg-concrete-800 border border-concrete-700 p-8 sm:p-10 shadow-xl">
            <div className="border-b border-concrete-700 pb-5 mb-6">
              <div className="font-mono text-xs text-orange-400 uppercase tracking-widest font-semibold">
                DIRECT CONTACT
              </div>
              <h3 className="text-2xl font-bold text-white font-sans mt-1">
                {PERSONAL_INFO.name}
              </h3>
              <p className="font-mono text-xs text-concrete-400 mt-1">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Direct Channels with Min 44px Touch Target */}
            <div className="space-y-4">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-between p-4 min-h-[44px] bg-concrete-900 border border-concrete-700 hover:border-orange-accent transition-all group focus-visible:outline-2 focus-visible:outline-orange-accent"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-concrete-800 group-hover:bg-orange-accent transition-colors">
                    <Phone className="w-4 h-4 text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-concrete-400 uppercase">DIRECT PHONE</div>
                    <div className="font-sans font-bold text-sm text-white">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
                <span className="font-mono text-xs text-orange-400 group-hover:translate-x-1 transition-transform">
                  CALL &rarr;
                </span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-between p-4 min-h-[44px] bg-concrete-900 border border-concrete-700 hover:border-orange-accent transition-all group focus-visible:outline-2 focus-visible:outline-orange-accent"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-concrete-800 group-hover:bg-orange-accent transition-colors">
                    <Mail className="w-4 h-4 text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-concrete-400 uppercase">OFFICIAL EMAIL</div>
                    <div className="font-sans font-bold text-sm text-white">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <span className="font-mono text-xs text-orange-400 group-hover:translate-x-1 transition-transform">
                  EMAIL &rarr;
                </span>
              </a>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-concrete-700 flex flex-wrap gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Construction%20Management%20Opportunity`}
                className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] bg-orange-accent text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-orange-hover transition-all shadow-md group focus-visible:outline-2 focus-visible:outline-orange-accent"
              >
                <span>Discuss an Opportunity</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] bg-concrete-700 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-concrete-600 transition-all border border-concrete-600 focus-visible:outline-2 focus-visible:outline-orange-accent"
              >
                <FileDown className="w-4 h-4 text-orange-400" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
