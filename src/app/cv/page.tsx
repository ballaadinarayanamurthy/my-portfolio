import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowLeft, FileDown } from "lucide-react";
import PrintButton from "@/components/PrintButton";

export const metadata = {
  title: "Curriculum Vitae | B. Adinarayana Murthy",
  description: "Official Curriculum Vitae of B. Adinarayana Murthy - Civil Construction Manager & Project Manager",
};

export default function CVPrintPage() {
  return (
    <div className="min-h-screen bg-white text-black p-6 sm:p-12 max-w-4xl mx-auto font-sans leading-relaxed">
      {/* Print & Download Toolbar (Hidden on Print) */}
      <div className="no-print mb-8 pb-4 border-b border-gray-300 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-700 hover:text-black py-2 focus-visible:outline-2 focus-visible:outline-black"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.cvDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] bg-white border border-gray-400 text-black text-xs font-mono font-bold uppercase tracking-wider hover:border-black transition-colors focus-visible:outline-2 focus-visible:outline-black"
          >
            <FileDown className="w-4 h-4" />
            <span>Download PDF</span>
          </a>

          <PrintButton />
        </div>
      </div>

      {/* CV Header */}
      <div className="text-center pb-6 border-b-2 border-black space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
          {PERSONAL_INFO.name}
        </h1>
        <div className="font-bold text-sm tracking-wide text-gray-900">
          Construction Manager
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-800 pt-1 font-mono">
          <span>
            <strong>Phone:</strong> {PERSONAL_INFO.phone}
          </span>
          <span>|</span>
          <span>
            <strong>Email:</strong> {PERSONAL_INFO.email}
          </span>
          <span>|</span>
          <span>
            <strong>Location:</strong> {PERSONAL_INFO.residentialLocation}
          </span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mt-6 space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5">
          Professional Summary
        </h2>
        <p className="text-xs text-gray-800 leading-relaxed text-justify">
          Experienced Civil Construction Manager with over 30 years of expertise in executing large-scale high-rise residential &amp; commercial towers, industrial complexes, infrastructure, commercial, and EPC projects. Specialized in bored cast-in-situ pile foundations, pile load testing, heavy raft construction, deep excavation, geo-grid works, high-rise RCC superstructure, column/shear wall casting, multi-floor slab cycles, structural steel erection, MEP vertical risers coordination, and finishing. Proven ability in project planning, execution, manpower management, contractor coordination, quality control, safety compliance, and timely project delivery.
        </p>
        <p className="text-xs text-gray-800 leading-relaxed text-justify">
          Strong knowledge of construction methodologies, project scheduling, QA/QC procedures, structural drawings, BOQ management, and site administration. Experienced in handling multidisciplinary teams and coordinating with consultants, clients, vendors, and subcontractors across India and the Kingdom of Saudi Arabia.
        </p>
      </div>

      {/* Core Competencies */}
      <div className="mt-6 space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5">
          Core Competencies
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-gray-800">
          <div>&bull; High-Rise Multi-Storey Buildings</div>
          <div>&bull; Bored Cast-in-Situ Pile Foundations</div>
          <div>&bull; Pile Integrity Tests &amp; Load Testing</div>
          <div>&bull; Heavy Pile Cap &amp; Raft Foundations</div>
          <div>&bull; Shear Wall &amp; Column Casting</div>
          <div>&bull; Multi-Floor Slab Casting &amp; Staging</div>
          <div>&bull; Geo-grid &amp; Soil Stabilization</div>
          <div>&bull; Structural Steel Frame Erection</div>
          <div>&bull; Pre-engineered Buildings (PEB)</div>
          <div>&bull; Industrial &amp; Infrastructure Projects</div>
          <div>&bull; MEP Vertical Risers Coordination</div>
          <div>&bull; Project Planning &amp; Scheduling (CPM)</div>
          <div>&bull; Site Execution &amp; Supervision</div>
          <div>&bull; Quality Assurance / QA-QC (SAES/IS)</div>
          <div>&bull; Quantity Estimation &amp; BOQ</div>
          <div>&bull; Contractor &amp; Vendor Management</div>
          <div>&bull; High-Elevation HSE &amp; Safety</div>
          <div>&bull; Billing &amp; Cost Control</div>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mt-6 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5">
          Professional Experience
        </h2>

        {/* Role 1 */}
        <div className="space-y-1">
          <div className="flex justify-between items-baseline font-bold text-xs">
            <span>Construction Manager &ndash; Civil</span>
            <span>Nov 2020 &ndash; Present</span>
          </div>
          <div className="italic text-xs text-gray-700">Apoorva Projects</div>
          <ul className="list-disc list-outside pl-4 text-xs text-gray-800 space-y-1 pt-1">
            <li>Managed complete civil construction activities for high-rise residential apartment towers, industrial complexes, and infrastructure projects from excavation to commissioning.</li>
            <li>Supervised major pile foundation works, pile caps, raft foundations, and pedestals including bored cast-in-situ piles, pile integrity tests, and load testing for gated community high-rise apartment towers at Rajahmundry.</li>
            <li>Led high-rise superstructure execution including multi-storey RCC frame, columns, shear walls, formwork staging, repetitive floor slab casting cycles, curing, and structural finishing.</li>
            <li>Executed retaining walls, heavy RCC structures and managed geo-grid installation and soil stabilization works for ONGC, GAIL at Narsapur and Cuttak.</li>
            <li>Coordinated erection of structural steel works including columns, beams, trusses, platforms, and roofing systems, warehouse construction at Kuppam Schreiber Dynamix.</li>
            <li>Led slab activities including shuttering, reinforcement, embedded items, concrete pouring, curing, and finishing for industrial buildings at Kuppam Schreiber Dynamix and AP government UPHC buildings at Narsapur, Palakole &amp; Bhimavaram.</li>
            <li>Coordinated with MEP teams for embedded conduits, vertical risers, sleeves, trenches, cable routing, and equipment foundations in tall buildings.</li>
            <li>Controlled subcontractors, manpower, equipment deployment, and daily execution activities and conducted client meetings, progress reviews, and site inspections.</li>
            <li>Ensured compliance with QA/QC standards, approved drawings, vertical plumbness tolerances, and HSE requirements for tall structures.</li>
          </ul>
        </div>

        {/* Role 2 */}
        <div className="space-y-1 pt-2">
          <div className="flex justify-between items-baseline font-bold text-xs">
            <span>Project Manager &ndash; Saudi Aramco Projects, KSA</span>
            <span>Oct 2015 &ndash; Sep 2020</span>
          </div>
          <ul className="list-disc list-outside pl-4 text-xs text-gray-800 space-y-1 pt-1">
            <li>Managed construction and QA/QC activities for major oil and gas projects under Saudi Aramco quality and safety standards.</li>
            <li>Supervised construction crews, field engineers, and specialty subcontractors.</li>
            <li>Conducted project progress meetings with client representatives.</li>
            <li>Ensured compliance with project specifications, quality standards, and safety regulations.</li>
          </ul>
        </div>

        {/* Role 3 */}
        <div className="space-y-1 pt-2">
          <div className="flex justify-between items-baseline font-bold text-xs">
            <span>Construction Manager &ndash; Saudi Aramco &amp; SABIC Projects, KSA</span>
            <span>2009 &ndash; 2014</span>
          </div>
          <ul className="list-disc list-outside pl-4 text-xs text-gray-800 space-y-1 pt-1">
            <li>Supervised civil construction activities for multiple industrial Saudi Aramco projects in Saudi Arabia and executed heavy Pile foundations, pile caps, geogrid, soil stabilization works.</li>
            <li>Executed turnkey construction of high-rise building at Hadeed (SABIC plant) at KSA, managing multi-level steel structure, composite decking, floor slabs, and high-elevation safety compliance.</li>
            <li>Executed erection of Steel structures including heavy columns, beams, braces and roof structures for different Saudi Aramco Projects.</li>
            <li>Coordinated with clients, contractors, and engineering teams on structural alignment, vertical plumbness, and inspections.</li>
            <li>Monitored project progress, ensured quality compliance and handled scheduling, reporting, and contractor coordination.</li>
          </ul>
        </div>

        {/* Role 4 */}
        <div className="space-y-1 pt-2">
          <div className="flex justify-between items-baseline font-bold text-xs">
            <span>QA/QC Engineer &ndash; Saudi Aramco Projects, KSA</span>
            <span>2002 &ndash; 2008</span>
          </div>
          <ul className="list-disc list-outside pl-4 text-xs text-gray-800 space-y-1 pt-1">
            <li>Implemented QA/QC procedures, QC plans, and work instructions for Saudi Aramco projects.</li>
            <li>Prepared inspection test plans (ITPs) and technical method statements.</li>
            <li>Conducted site inspections and incoming material inspections (batching, rebar, compaction).</li>
            <li>Coordinated with client inspectors and consultants for approvals.</li>
          </ul>
        </div>

        {/* Role 5 */}
        <div className="space-y-1 pt-2">
          <div className="flex justify-between items-baseline font-bold text-xs">
            <span>Site Engineer &ndash; Civil Works, KSA</span>
            <span>1996 &ndash; 2001</span>
          </div>
          <ul className="list-disc list-outside pl-4 text-xs text-gray-800 space-y-1 pt-1">
            <li>Supervised civil construction including rebar, formwork, and concreting works.</li>
            <li>Ensured work execution as per drawings and specifications.</li>
            <li>Monitored subcontractor performance, site productivity and verified contractor billing and project progress.</li>
          </ul>
        </div>
      </div>

      {/* Major Projects */}
      <div className="mt-6 space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5">
          Major &amp; High-Rise Projects
        </h2>
        <ul className="list-disc list-outside pl-4 text-xs text-gray-800 space-y-1">
          <li>Gated Community High-Rise Residential Apartments &ndash; Apoorva Projects (Rajahmundry)</li>
          <li>Hadeed Steel Plant Expansion &amp; High-Rise Building &ndash; SABIC (Al-Jubail Industrial City)</li>
          <li>Replace Gas Compression &ndash; Saudi Aramco Abqaiq Plants</li>
          <li>Replace Electrical Equipment &ndash; Southern Area GOSPs (Saudi Aramco)</li>
          <li>Shaybah Crude Stabilization Project &ndash; Abqaiq Plants</li>
          <li>Upgrade Fire Water Piping System &ndash; Saudi Aramco</li>
          <li>Saudi Kayan Petrochemical Complex &ndash; Jubail Industrial City</li>
        </ul>
      </div>

      {/* Education */}
      <div className="mt-6 space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5">
          Education
        </h2>
        <div className="text-xs text-gray-800">
          <strong>B.E. Civil Engineering</strong> &ndash; Osmania University, 1994
        </div>
      </div>
    </div>
  );
}
