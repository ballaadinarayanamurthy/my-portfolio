import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        concrete: {
          50: "#FAF9F6",
          100: "#F6F4EF",
          200: "#EFECE4",
          300: "#E2DDD3",
          400: "#C8C2B5",
          500: "#9C9588",
          600: "#6B6863",
          700: "#44423E",
          800: "#2D2B29",
          900: "#151515",
          950: "#0D0D0D",
        },
        orange: {
          accent: "#C65A2E",
          hover: "#B24E25",
          light: "#FDF4EE",
          border: "#E8A88A",
        },
        blueprint: {
          dark: "#0F1722",
          surface: "#17212F",
          border: "#2A3B52",
          grid: "rgba(91, 137, 189, 0.12)",
          cyan: "#38BDF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(200, 194, 181, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 194, 181, 0.25) 1px, transparent 1px)",
        "grid-pattern-dark": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "24px 24px",
        "grid-md": "48px 48px",
      },
    },
  },
  plugins: [],
};
export default config;
