export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  organization: string;
  location: string;
  classification: string;
  country: string;
  documentedContext: string;
}

export interface TimelineEntry {
  period: string;
  yearMarker: string;
  role: string;
  companyOrClient: string;
  location: string;
  country: "KSA" | "India";
  level: "foundation" | "qaqc" | "manager" | "executive-pm" | "current-cm";
  summary: string;
  responsibilities: string[];
  disciplines: string[];
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/my-portfolio" : "");

export const PERSONAL_INFO = {
  name: "B. ADINARAYANA MURTHY",
  title: "Construction Manager & Project Manager",
  eyebrow: "CIVIL ENGINEERING • CONSTRUCTION • PROJECT MANAGEMENT",
  positioning:
    "Civil Construction Manager and Project Manager with 30+ years of experience delivering high-rise residential & commercial towers, industrial complexes, infrastructure, EPC and Saudi Aramco energy projects across India and Saudi Arabia.",
  experienceHighlight: "30+ YEARS CIVIL CONSTRUCTION • HIGH-RISE & INDUSTRIAL EPC",
  careerSpan: "1996 – Present",
  ksaSpan: "1996 – 2020",
  experienceYears: "30+",
  phone: "+91 8790376125",
  email: "bamurty@gmail.com",
  residentialLocation: "Rajahmundry, Andhra Pradesh",
  targetLocation: "Hyderabad / Telangana",
  education: {
    degree: "B.E. Civil Engineering",
    institution: "Osmania University",
    year: "1994",
    location: "Hyderabad, Telangana",
  },
  cvDownloadUrl: `${basePath}/B-Adinarayana-Murthy-CV.pdf`,
};

export const CORE_STATS = [
  {
    value: "30+",
    label: "Years Experience",
    detail: "Civil Construction & Execution",
  },
  {
    value: "1996–Present",
    label: "Career Timeline",
    detail: "Continuous Professional Track",
  },
  {
    value: "HIGH-RISE",
    label: "Tower Construction",
    detail: "Residential Towers & SABIC High-Rise",
  },
  {
    value: "INDIA • KSA",
    label: "Geographical Track",
    detail: "Saudi Aramco & Indian EPC Projects",
  },
];

export const CAREER_TIMELINE: TimelineEntry[] = [
  {
    period: "Nov 2020 — Present",
    yearMarker: "2020",
    role: "Construction Manager — Civil",
    companyOrClient: "Apoorva Projects",
    location: "Andhra Pradesh / Odisha, India",
    country: "India",
    level: "current-cm",
    summary:
      "Managing complete civil construction activities for high-rise residential apartment towers, industrial complexes, and energy infrastructure projects from excavation to commissioning.",
    responsibilities: [
      "Supervised major pile foundation works, pile caps, raft foundations, and pedestals including bored cast-in-situ piles, pile integrity tests, and load testing for gated community high-rise apartment towers at Rajahmundry.",
      "Led high-rise superstructure execution including multi-storey RCC frame, columns, shear walls, staging, formwork cycles, slab casting, curing, and structural finishing.",
      "Executed retaining walls, deep basement excavation, heavy RCC structures and managed geo-grid installation and soil stabilization works for ONGC, GAIL at Narsapur and Cuttak.",
      "Coordinated erection of structural steel works including columns, beams, trusses, platforms, and roofing systems, warehouse construction at Kuppam Schreiber Dynamix.",
      "Led slab activities including shuttering, reinforcement, embedded items, concrete pouring, curing, and finishing for industrial buildings at Kuppam Schreiber Dynamix and AP government UPHC buildings at Narsapur, Palakole & Bhimavaram.",
      "Coordinated with MEP teams for embedded conduits, vertical risers, sleeves, trenches, cable routing, and equipment foundations in tall buildings.",
      "Controlled subcontractors, manpower, equipment deployment, and daily execution activities and conducted client meetings, progress reviews, and site inspections.",
      "Ensured compliance with QA/QC standards, approved drawings, vertical plumbness tolerances, and HSE requirements for tall structures.",
    ],
    disciplines: [
      "High-rise residential towers",
      "Bored cast-in-situ piles",
      "Pile integrity tests & load testing",
      "Raft foundations & pedestals",
      "Multi-floor slab casting & staging",
      "Shear walls & column reinforcement",
      "Retaining walls & heavy RCC",
      "Geo-grid & soil stabilization",
      "Structural steel & roofing systems",
      "MEP vertical risers & embedded services",
    ],
  },
  {
    period: "Oct 2015 — Sep 2020",
    yearMarker: "2015",
    role: "Project Manager — Saudi Aramco Projects",
    companyOrClient: "Saudi Aramco Projects",
    location: "Eastern Province, Kingdom of Saudi Arabia",
    country: "KSA",
    level: "executive-pm",
    summary:
      "Managed construction and QA/QC activities for major oil and gas projects under Saudi Aramco quality and safety standards.",
    responsibilities: [
      "Managed construction and QA/QC activities for major oil and gas projects.",
      "Supervised construction crews and subcontractors.",
      "Conducted project progress meetings with client representatives.",
      "Ensured compliance with project specifications, quality standards, and safety regulations.",
    ],
    disciplines: [
      "Oil and gas projects",
      "Construction crews & subcontractors",
      "Client progress meetings",
      "QA/QC activities management",
      "Project specifications & safety regulations",
    ],
  },
  {
    period: "2009 — 2014",
    yearMarker: "2009",
    role: "Construction Manager — Saudi Aramco & SABIC Projects",
    companyOrClient: "Saudi Aramco & SABIC Projects",
    location: "Eastern Province & Jubail, KSA",
    country: "KSA",
    level: "manager",
    summary:
      "Supervised civil construction activities for multiple industrial Saudi Aramco projects and executed turnkey high-rise building construction at SABIC plant.",
    responsibilities: [
      "Supervised civil construction activities for multiple industrial Saudi Aramco projects in Saudi Arabia and executed heavy Pile foundations, pile caps, geogrid, soil stabilization works.",
      "Executed construction of high-rise building at Hadeed (SABIC plant) at KSA, managing multi-level steel structure, composite decking, floor slabs, and high-elevation safety compliance.",
      "Executed erection of Steel structures including heavy columns, beams, braces and roof structures for different Saudi Aramco Projects.",
      "Coordinated with clients, contractors, and engineering teams on structural alignment, vertical plumbness, and inspections.",
      "Monitored project progress, ensured quality compliance and handled scheduling, reporting, and contractor coordination.",
    ],
    disciplines: [
      "High-rise building at Hadeed (SABIC plant)",
      "Heavy Pile foundations & pile caps",
      "Multi-storey steel structure & decking",
      "Geogrid & soil stabilization",
      "Steel structures (columns, beams, braces, roof)",
      "Quality compliance & contractor coordination",
    ],
  },
  {
    period: "2002 — 2008",
    yearMarker: "2002",
    role: "QA/QC Engineer — Saudi Aramco Projects",
    companyOrClient: "Saudi Aramco Projects",
    location: "Eastern Province, KSA",
    country: "KSA",
    level: "qaqc",
    summary:
      "Implemented QA/QC procedures, QC plans, and inspection test plans for Saudi Aramco projects.",
    responsibilities: [
      "Implemented QA/QC procedures, QC plans, and work instructions.",
      "Prepared inspection test plans and method statements.",
      "Conducted site inspections and material inspections.",
      "Coordinated with client inspectors and consultants for approvals.",
    ],
    disciplines: [
      "QA/QC procedures & QC plans",
      "Inspection test plans & method statements",
      "Site inspections & material inspections",
      "Client inspectors & consultants approvals",
    ],
  },
  {
    period: "1996 — 2001",
    yearMarker: "1996",
    role: "Site Engineer — Civil Works",
    companyOrClient: "Civil Works Infrastructure",
    location: "Kingdom of Saudi Arabia",
    country: "KSA",
    level: "foundation",
    summary:
      "Supervised civil construction including rebar, formwork, and concreting works adhering to drawings and specifications.",
    responsibilities: [
      "Supervised civil construction including rebar, formwork, and concreting works.",
      "Ensured work execution as per drawings and specifications.",
      "Monitored subcontractor performance, site productivity and verified contractor billing and project progress.",
    ],
    disciplines: [
      "Rebar, formwork & concreting works",
      "Drawings and specifications compliance",
      "Subcontractor performance & productivity",
      "Contractor billing & project progress",
    ],
  },
];

export const DOCUMENTED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-01",
    number: "01",
    title: "Replace Gas Compression",
    organization: "Saudi Aramco",
    location: "Abqaiq Plants, Saudi Arabia",
    classification: "Oil & Gas Industrial Facility",
    country: "Saudi Arabia",
    documentedContext: "Documented Saudi Aramco project at Abqaiq Plants.",
  },
  {
    id: "proj-02",
    number: "02",
    title: "Replace Electrical Equipment",
    organization: "Saudi Aramco",
    location: "Southern Area GOSPs, Saudi Arabia",
    classification: "Gas Oil Separation Plants",
    country: "Saudi Arabia",
    documentedContext: "Documented Saudi Aramco project across Southern Area GOSPs.",
  },
  {
    id: "proj-03",
    number: "03",
    title: "Shaybah Crude Stabilization Project",
    organization: "Saudi Aramco",
    location: "Abqaiq Plants, Saudi Arabia",
    classification: "Crude Processing Installation",
    country: "Saudi Arabia",
    documentedContext: "Documented Saudi Aramco project at Abqaiq Plants.",
  },
  {
    id: "proj-04",
    number: "04",
    title: "Upgrade Fire Water Piping System",
    organization: "Saudi Aramco",
    location: "Saudi Arabia Facilities",
    classification: "Plant Infrastructure & Safety Piping",
    country: "Saudi Arabia",
    documentedContext: "Documented Saudi Aramco piping infrastructure upgrade project.",
  },
  {
    id: "proj-05",
    number: "05",
    title: "Hadeed Steel Plant Expansion & High-Rise Building",
    organization: "SABIC",
    location: "Al-Jubail Industrial City, Saudi Arabia",
    classification: "High-Rise Building & Heavy Steel Frame",
    country: "Saudi Arabia",
    documentedContext: "Documented high-rise building and steel plant expansion project for SABIC at Al-Jubail Industrial City, featuring multi-level steel structure, composite decking, floor slabs, and heavy foundations.",
  },
  {
    id: "proj-06",
    number: "06",
    title: "Saudi Kayan Petrochemical Complex",
    organization: "Saudi Kayan / SABIC Affiliate",
    location: "Jubail Industrial City, Saudi Arabia",
    classification: "Petrochemical Complex Civil Infrastructure",
    country: "Saudi Arabia",
    documentedContext: "Documented petrochemical complex project in Jubail Industrial City.",
  },
  {
    id: "proj-07",
    number: "07",
    title: "Gated Community High-Rise Residential Apartments",
    organization: "Apoorva Projects",
    location: "Rajahmundry, Andhra Pradesh, India",
    classification: "High-Rise Residential Towers & Deep Piling",
    country: "India",
    documentedContext: "Supervised bored cast-in-situ pile foundation works, load testing, raft foundations, and multi-storey superstructure execution for high-rise residential apartment towers.",
  },
];

export const CURRENT_ROLE_SCOPES = [
  {
    category: "FOUNDATIONS",
    label: "Deep & Substructure",
    items: [
      "Bored cast-in-situ piles (up to deep strata)",
      "Pile integrity tests (PIT) & static/dynamic load testing",
      "Heavy pile caps & multi-tiered raft foundations",
      "High-rise tower pedestals & shear wall starter foundations (Rajahmundry)",
      "Deep basement excavation & shoring management",
    ],
  },
  {
    category: "HIGH-RISE & RCC",
    label: "Superstructure & Core",
    items: [
      "Multi-storey RCC frame & tower superstructure",
      "High-rise column casting & shear wall core shuttering",
      "Repetitive floor slab casting cycles & staging systems",
      "Heavy structural steel erection: columns, beams, trusses",
      "Warehouse construction (Kuppam Schreiber Dynamix)",
      "Multi-level formwork stripping & propping protocols",
    ],
  },
  {
    category: "SOIL / GEOTECHNICAL",
    label: "Earth & Stabilization",
    items: [
      "Excavation & ground works",
      "Retaining walls & basement earth retention",
      "Geo-grid installation & slope stabilization",
      "Soil stabilization works for ONGC & GAIL (Narsapur & Cuttak)",
    ],
  },
  {
    category: "MEP & RISERS",
    label: "Services Integration",
    items: [
      "Coordination with MEP multidisciplinary teams",
      "Embedded conduits, floor sleeves & vertical plumbing/electrical risers",
      "Cable routing trenches & high-rise service shafts",
      "Heavy equipment foundations & plant bases",
    ],
  },
  {
    category: "SLABS & FINISHING",
    label: "Formwork & Concrete",
    items: [
      "Shuttering, rebar fabrication & high-flow concrete pouring",
      "Multi-floor curing protocols & power trowel finishing",
      "Industrial plant floorings (Kuppam Schreiber Dynamix)",
      "AP Govt UPHC healthcare buildings (Narsapur, Palakole, Bhimavaram)",
    ],
  },
  {
    category: "QA/QC + HSE",
    label: "Compliance & Control",
    items: [
      "Compliance with QA/QC standards & IS/Aramco codes",
      "Execution as per approved structural & architectural drawings",
      "Vertical plumbness, laser leveling & dimensional tolerances",
      "High-elevation safety & HSE compliance",
      "Subcontractors, manpower & heavy crane/equipment deployment",
      "Client meetings, stage sign-offs & progress inspections",
    ],
  },
];

export const QAQC_PROTOCOLS = [
  {
    title: "Inspection Test Plans",
    tag: "ITP",
    desc: "Preparation and execution of Inspection Test Plans across tall building substructures, heavy RCC frames, and industrial steel packages.",
  },
  {
    title: "Method Statements",
    tag: "Procedures",
    desc: "Formulation of technical method statements for deep bored piles, raft foundations, multi-storey staging, and structural steel erection.",
  },
  {
    title: "Site & Vertical Inspections",
    tag: "Stage Verification",
    desc: "Rigorous site inspections for rebar, formwork, embedments, pre-pour checks, core alignment, and vertical plumbness tolerances.",
  },
  {
    title: "Material & Concrete Inspections",
    tag: "Quality Control",
    desc: "Verification of incoming materials, cement, rebar, batching plant mix designs, cube compressive strength tests, and compaction compliance.",
  },
  {
    title: "Client & Consultant Approvals",
    tag: "Sign-Offs",
    desc: "Direct interface with client inspectors and consultants for stage-wise inspection approvals from foundation to superstructure.",
  },
  {
    title: "QC Plans & Work Instructions",
    tag: "Quality Systems",
    desc: "Implementation of comprehensive Quality Control plans and technical work instructions adhering to Saudi Aramco SAES and IS standards.",
  },
];

export const PM_RESPONSIBILITIES = [
  {
    title: "Project Execution",
    points: [
      "Managed construction activities for major oil and gas projects.",
      "Maintained disciplined progress from excavation to completion.",
    ],
  },
  {
    title: "Client Coordination",
    points: [
      "Conducted project progress meetings with client representatives.",
      "Aligned on lookahead schedules, technical clarifications, and site interfaces.",
    ],
  },
  {
    title: "Quality & Compliance",
    points: [
      "Managed QA/QC activities across all project stages.",
      "Ensured compliance with project specifications, quality standards, and safety regulations.",
    ],
  },
  {
    title: "Team & Contractor Management",
    points: [
      "Supervised construction crews and site supervisors.",
      "Controlled specialty subcontractors across all daily site operations.",
    ],
  },
];

export const TECHNICAL_EXPERTISE_6_CATEGORIES = [
  {
    category: "FOUNDATIONS & PILING",
    skills: [
      "Pile Foundation Works for Tall Towers",
      "Bored cast-in-situ piles (deep strata)",
      "Pile integrity tests (PIT) & Load testing",
      "Heavy Pile Caps & Raft Foundations",
      "Pedestals & Deep Excavation Shoring",
      "Geo-grid & Soil Stabilization",
      "Retaining Walls & Earth Retention",
    ],
  },
  {
    category: "HIGH-RISE & STRUCTURES",
    skills: [
      "High-Rise Multi-Storey RCC Towers",
      "Shear Wall & Core Construction",
      "Multi-Floor Slab Casting & Staging",
      "Heavy Structural Steel Frame Erection",
      "Multi-Tier Columns, Beams & Trusses",
      "Composite Decking & Metal Deck Slabs",
      "Pre-Engineered Buildings (PEB)",
      "Vertical Plumbness & Alignment Control",
    ],
  },
  {
    category: "SITE EXECUTION",
    skills: [
      "Turnkey Site Execution & Supervision",
      "Project Planning & Scheduling (CPM/LOB)",
      "Manpower & Crew Allocation",
      "Equipment & Tower Crane Deployment",
      "Subcontractor Coordination",
      "Daily Execution Activities",
      "Site Inspections & Pre-Pour Audits",
      "Excavation to Commissioning",
    ],
  },
  {
    category: "QA/QC + HSE",
    skills: [
      "QA/QC Procedures & QC Plans",
      "Inspection Test Plans (ITP)",
      "Method Statements Formulation",
      "High-Elevation Safety & HSE Management",
      "Site Inspections & Material Testing",
      "Client & Consultant Approvals",
      "Structural Drawings & BBS Review",
    ],
  },
  {
    category: "PROJECT CONTROLS",
    skills: [
      "Quantity Estimation & BOQ",
      "Billing & Cost Control",
      "Subcontractor Billing Verification",
      "Progress Reviews & Milestone Tracking",
      "Bar Bending Schedule (BBS) Verification",
    ],
  },
  {
    category: "COORDINATION",
    skills: [
      "MEP Coordination & Vertical Risers",
      "Embedded Conduits, Sleeves & Trenches",
      "Equipment Foundations",
      "Client Progress Meetings",
      "Consultant & Vendor Coordination",
      "Multidisciplinary Team Leadership",
    ],
  },
];
