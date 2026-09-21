import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B. Adinarayana Murthy | Civil Construction Manager & Project Manager",
  description:
    "Civil Construction Manager and Project Manager with 30+ years of experience in industrial, infrastructure, commercial, and EPC projects across India and Saudi Arabia (Saudi Aramco).",
  keywords: [
    "Civil Construction Manager",
    "Project Manager",
    "Civil Engineer",
    "Saudi Aramco Projects",
    "Hyderabad Civil Construction",
    "EPC Project Management",
    "Pile Foundations",
    "Structural Steel Erection",
    "RCC Structures",
    "QA/QC Saudi Aramco",
  ],
  authors: [{ name: "B. Adinarayana Murthy" }],
  openGraph: {
    title: "B. Adinarayana Murthy | Civil Construction Manager & Project Manager",
    description:
      "Civil Construction Manager and Project Manager with 30+ years of experience delivering industrial, infrastructure, oil & gas, and EPC projects across India and Saudi Arabia.",
    type: "profile",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#F6F4EF] text-[#151515] selection:bg-[#C65A2E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
