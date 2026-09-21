const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Minimal valid PDF specification format
const pdfData = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 580 >>
stream
BT
/F1 18 Tf
50 740 Td
(B. ADINARAYANA MURTHY) Tj
/F1 12 Tf
0 -22 Td
(Civil Construction Manager | Project Manager) Tj
/F1 10 Tf
0 -18 Td
(Phone: +91 8790376125 | Email: bamurty@gmail.com | Location: Rajahmundry, AP, India) Tj
0 -24 Td
(PROFESSIONAL SUMMARY) Tj
/F1 9 Tf
0 -14 Td
(Experienced Civil Construction Manager with over 30 years of expertise in executing) Tj
0 -12 Td
(large-scale industrial, infrastructure, commercial and EPC projects across India and KSA.) Tj
0 -20 Td
(CAREER TRACK RECORD: Saudi Aramco Projects KSA (1996-2020) | Apoorva Projects (2020-Pres.)) Tj
0 -16 Td
(EDUCATION: B.E. Civil Engineering - Osmania University, 1994) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000236 00000 n 
0000000868 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
944
%%EOF
`;

fs.writeFileSync(path.join(publicDir, 'B-Adinarayana-Murthy-CV.pdf'), pdfData.trim());
console.log('CV PDF generated successfully at public/B-Adinarayana-Murthy-CV.pdf');
