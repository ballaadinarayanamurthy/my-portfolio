const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function createAuthenticResumePDF() {
  const pdfDoc = await PDFDocument.create();

  // Load standard fonts
  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const PAGE_WIDTH = 595.28; // A4 width
  const PAGE_HEIGHT = 841.89; // A4 height
  const MARGIN_LEFT = 50;
  const MARGIN_RIGHT = 545;
  const CONTENT_WIDTH = MARGIN_RIGHT - MARGIN_LEFT;

  // Colors
  const black = rgb(0.08, 0.08, 0.08);
  const blueLink = rgb(0.0, 0.2, 0.6);
  const grayLine = rgb(0.7, 0.7, 0.7);

  // Helper to draw text with automatic wrap
  function drawParagraph(page, text, x, y, font, size, maxWidth, lineHeight, color = black) {
    const words = text.split(' ');
    let currentLine = '';
    let currentY = y;

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine ? currentLine + ' ' + word : word;
      const width = font.widthOfTextAtSize(testLine, size);

      if (width > maxWidth && currentLine !== '') {
        page.drawText(currentLine, { x, y: currentY, size, font, color });
        currentLine = word;
        currentY -= lineHeight;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      page.drawText(currentLine, { x, y: currentY, size, font, color });
      currentY -= lineHeight;
    }
    return currentY;
  }

  function drawBullet(page, text, x, y, font, size, maxWidth, lineHeight) {
    page.drawText('•', { x: x, y: y, size: size + 2, font: fontBold, color: black });
    return drawParagraph(page, text, x + 12, y, font, size, maxWidth - 12, lineHeight);
  }

  function drawSectionHeading(page, title, y) {
    page.drawText(title, {
      x: MARGIN_LEFT,
      y: y,
      size: 11,
      font: fontBold,
      color: rgb(0.1, 0.25, 0.5), // Subtle deep navy/slate as in original document
    });
    // Underline
    const textWidth = fontBold.widthOfTextAtSize(title, 11);
    page.drawLine({
      start: { x: MARGIN_LEFT, y: y - 2 },
      end: { x: MARGIN_LEFT + textWidth, y: y - 2 },
      thickness: 0.8,
      color: rgb(0.1, 0.25, 0.5),
    });
    return y - 16;
  }

  // ==========================================
  // PAGE 1
  // ==========================================
  const page1 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - 45;

  // Header - Centered Name
  const name = "B. ADINARAYANA MURTHY";
  const nameWidth = fontBold.widthOfTextAtSize(name, 15);
  page1.drawText(name, {
    x: (PAGE_WIDTH - nameWidth) / 2,
    y: y,
    size: 15,
    font: fontBold,
    color: rgb(0.1, 0.2, 0.4),
  });
  y -= 14;

  // Header - Title & Contact Line
  page1.drawLine({
    start: { x: MARGIN_LEFT, y: y },
    end: { x: MARGIN_RIGHT, y: y },
    thickness: 0.5,
    color: grayLine,
  });
  y -= 16;

  page1.drawText("Construction Manager", {
    x: MARGIN_LEFT,
    y: y,
    size: 10,
    font: fontBold,
    color: black,
  });
  y -= 13;

  page1.drawText("Phone: ", { x: MARGIN_LEFT, y: y, size: 9, font: fontBold, color: black });
  page1.drawText("+91 8790376125", { x: MARGIN_LEFT + 36, y: y, size: 9, font: fontRegular, color: black });
  page1.drawText(" | Email: ", { x: MARGIN_LEFT + 110, y: y, size: 9, font: fontBold, color: black });
  page1.drawText("bamurty@gmail.com", { x: MARGIN_LEFT + 155, y: y, size: 9, font: fontRegular, color: blueLink });
  y -= 13;

  page1.drawText("Location: ", { x: MARGIN_LEFT, y: y, size: 9, font: fontBold, color: black });
  page1.drawText("Rajahmundry, Andhra Pradesh, India", { x: MARGIN_LEFT + 46, y: y, size: 9, font: fontRegular, color: black });
  y -= 22;

  // SECTION: PROFESSIONAL SUMMARY
  y = drawSectionHeading(page1, "PROFESSIONAL SUMMARY", y);

  const summary1 = "Experienced Civil Construction Manager with over 30 years of expertise in executing large-scale industrial, infrastructure, commercial and EPC projects. Specialized in pile foundations, pile cap construction, deep excavation, geo-grid works, RCC structures, steel structure erection, MEP coordination, and slab construction of high-rise buildings. Proven ability in project planning, execution, manpower management, contractor coordination, quality control, safety compliance, and timely project delivery.";
  y = drawParagraph(page1, summary1, MARGIN_LEFT, y, fontRegular, 9, CONTENT_WIDTH, 12);
  y -= 4;

  const summary2 = "Strong knowledge of construction methodologies, project scheduling, QA/QC procedures, structural drawings, BOQ management, and site administration. Experienced in handling multidisciplinary teams and coordinating with consultants, clients, vendors, and subcontractors.";
  y = drawParagraph(page1, summary2, MARGIN_LEFT, y, fontRegular, 9, CONTENT_WIDTH, 12);
  y -= 12;

  // SECTION: CORE COMPETENCIES (Two Columns)
  y = drawSectionHeading(page1, "CORE COMPETENCIES", y);

  const compCol1 = [
    "Pile Foundation Works",
    "Geo-grid & Soil Stabilization",
    "Structural Steel Erection",
    "High rise buildings",
    "MEP Coordination",
    "Site Execution & Supervision",
    "Quantity Estimation & BOQ",
    "HSE & Safety Management",
    "Billing & Cost Control",
  ];

  const compCol2 = [
    "Pile Cap & Raft Foundations",
    "RCC Structures & Slab Casting",
    "Pre-engineered Buildings (PEB)",
    "Industrial & Infrastructure Projects",
    "Project Planning & Scheduling",
    "Quality Assurance / QA-QC",
    "Contractor & Vendor Management",
    "Team Leadership",
  ];

  const colWidth = (CONTENT_WIDTH - 20) / 2;
  const compStartY = y;
  let y1 = compStartY;
  let y2 = compStartY;

  for (const item of compCol1) {
    page1.drawText("•", { x: MARGIN_LEFT, y: y1, size: 10, font: fontBold, color: black });
    page1.drawText(item, { x: MARGIN_LEFT + 10, y: y1, size: 9, font: fontRegular, color: black });
    y1 -= 13;
  }

  for (const item of compCol2) {
    page1.drawText("•", { x: MARGIN_LEFT + colWidth + 20, y: y2, size: 10, font: fontBold, color: black });
    page1.drawText(item, { x: MARGIN_LEFT + colWidth + 30, y: y2, size: 9, font: fontRegular, color: black });
    y2 -= 13;
  }

  y = Math.min(y1, y2) - 10;

  // SECTION: PROFESSIONAL EXPERIENCE
  y = drawSectionHeading(page1, "PROFESSIONAL EXPERIENCE", y);

  // Role 1: Construction Manager – Civil, Apoorva Projects
  page1.drawText("Construction Manager – Civil", {
    x: MARGIN_LEFT,
    y: y,
    size: 9.5,
    font: fontBold,
    color: black,
  });
  y -= 13;

  page1.drawText("Apoorva Projects (Nov 2020 – Present)", {
    x: MARGIN_LEFT,
    y: y,
    size: 9.5,
    font: fontBold,
    color: black,
  });
  y -= 14;

  const role1Bullets = [
    "Managed complete civil construction activities for industrial and infrastructure projects from excavation to commissioning.",
    "Supervised major pile foundation works, pile caps, raft foundations, pedestals including bored cast-in-situ piles, pile integrity tests, and load testing for gated community high raised apartments at Rajahmundry.",
    "Executed retaining walls, heavy RCC structures and managed geo-grid installation and soil stabilization works for ONGC, GAIL at Narsapur and Cuttak.",
    "Coordinated erection of structural steel works including columns, beams, trusses, platforms, and roofing systems, warehouse construction at Kuppam Schreiber Dynamix.",
    "Led slab activities including shuttering, reinforcement, embedded items, concrete pouring, curing, and finishing for industrial buildings at Kuppam Schreiber Dynamix and AP government UPHC buildings at Narsapur, Palakole & Bhimavaram.",
    "Coordinated with MEP teams for embedded conduits, sleeves, trenches, cable routing, and equipment foundations.",
    "Controlled subcontractors, manpower, equipment deployment, and daily execution activities and conducted client meetings, progress reviews, and site inspections.",
  ];

  for (const bullet of role1Bullets) {
    y = drawBullet(page1, bullet, MARGIN_LEFT, y, fontRegular, 8.5, CONTENT_WIDTH, 11.5);
    y -= 3;
  }

  // ==========================================
  // PAGE 2
  // ==========================================
  const page2 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  y = PAGE_HEIGHT - 45;

  // Final bullet of Role 1
  y = drawBullet(page2, "Ensured compliance with QA/QC standards, approved drawings, and HSE requirements.", MARGIN_LEFT, y, fontRegular, 8.5, CONTENT_WIDTH, 11.5);
  y -= 12;

  // Role 2: Project Manager – Saudi Aramco Projects
  page2.drawText("Project Manager – Saudi Aramco Projects, KSA (Oct 2015 – Sep 2020)", {
    x: MARGIN_LEFT,
    y: y,
    size: 9.5,
    font: fontBold,
    color: black,
  });
  y -= 14;

  const role2Bullets = [
    "Managed construction and QA/QC activities for major oil and gas projects.",
    "Supervised construction crews and subcontractors.",
    "Conducted project progress meetings with client representatives.",
    "Ensured compliance with project specifications, quality standards, and safety regulations.",
  ];

  for (const bullet of role2Bullets) {
    y = drawBullet(page2, bullet, MARGIN_LEFT, y, fontRegular, 8.5, CONTENT_WIDTH, 11.5);
    y -= 3;
  }
  y -= 8;

  // Role 3: Construction Manager – Saudi Aramco Projects
  page2.drawText("Construction Manager – Saudi Aramco Projects, KSA (2009 – 2014)", {
    x: MARGIN_LEFT,
    y: y,
    size: 9.5,
    font: fontBold,
    color: black,
  });
  y -= 14;

  const role3Bullets = [
    "Supervised civil construction activities for multiple industrial Saudi Aramco projects in Saudi Arabia and executed heavy Pile foundations, pile caps, geogrid, soil stabilization works",
    "Executed construction of high rise building at Hadeed ( SABIC plant) at KSA",
    "Executed erection of Steel structures including columns, beams, braces and roof structures for different Saudi Aramco Projects.",
    "Coordinated with clients, contractors, and engineering teams",
    "Monitored project progress, ensured quality compliance and handled scheduling, reporting, and contractor coordination.",
  ];

  for (const bullet of role3Bullets) {
    y = drawBullet(page2, bullet, MARGIN_LEFT, y, fontRegular, 8.5, CONTENT_WIDTH, 11.5);
    y -= 3;
  }
  y -= 8;

  // Role 4: QA/QC Engineer – Saudi Aramco Projects
  page2.drawText("QA/QC Engineer – Saudi Aramco Projects, KSA (2002 – 2008)", {
    x: MARGIN_LEFT,
    y: y,
    size: 9.5,
    font: fontBold,
    color: black,
  });
  y -= 14;

  const role4Bullets = [
    "Implemented QA/QC procedures, QC plans, and work instructions.",
    "Prepared inspection test plans and method statements.",
    "Conducted site inspections and material inspections.",
    "Coordinated with client inspectors and consultants for approvals.",
  ];

  for (const bullet of role4Bullets) {
    y = drawBullet(page2, bullet, MARGIN_LEFT, y, fontRegular, 8.5, CONTENT_WIDTH, 11.5);
    y -= 3;
  }
  y -= 8;

  // Role 5: Site Engineer – Civil Works
  page2.drawText("Site Engineer – Civil Works, KSA (1996 – 2001)", {
    x: MARGIN_LEFT,
    y: y,
    size: 9.5,
    font: fontBold,
    color: black,
  });
  y -= 14;

  const role5Bullets = [
    "Supervised civil construction including rebar, formwork, and concreting works.",
    "Ensured work execution as per drawings and specifications.",
    "Monitored subcontractor performance, site productivity and verified contractor billing and project progress.",
  ];

  for (const bullet of role5Bullets) {
    y = drawBullet(page2, bullet, MARGIN_LEFT, y, fontRegular, 8.5, CONTENT_WIDTH, 11.5);
    y -= 3;
  }
  y -= 12;

  // SECTION: MAJOR INTERNATIONAL PROJECTS
  y = drawSectionHeading(page2, "MAJOR INTERNATIONAL PROJECTS", y);

  const intlProjects = [
    "Replace Gas Compression – Saudi Aramco Abqaiq Plants",
    "Replace Electrical Equipment – Southern Area GOSPs (Saudi Aramco)",
    "Shaybah Crude Stabilization Project – Abqaiq Plants",
    "Upgrade Fire Water Piping System – Saudi Aramco",
    "Hadeed Steel Plant Expansion – SABIC",
    "Saudi Kayan Petrochemical Complex – Jubail Industrial City",
  ];

  for (const proj of intlProjects) {
    page2.drawText("•", { x: MARGIN_LEFT, y: y, size: 10, font: fontBold, color: black });
    page2.drawText(proj, { x: MARGIN_LEFT + 12, y: y, size: 8.5, font: fontRegular, color: black });
    y -= 14;
  }
  y -= 8;

  // SECTION: EDUCATION
  y = drawSectionHeading(page2, "EDUCATION", y);
  page2.drawText("B.E. Civil Engineering – Osmania University, 1994", {
    x: MARGIN_LEFT,
    y: y,
    size: 9,
    font: fontRegular,
    color: black,
  });

  // Save the complete authentic PDF
  const pdfBytes = await pdfDoc.save();
  const publicPath = path.join(__dirname, '..', 'public', 'B-Adinarayana-Murthy-CV.pdf');
  fs.writeFileSync(publicPath, pdfBytes);
  console.log('Authentic Resume PDF generated successfully at:', publicPath);
}

createAuthenticResumePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
