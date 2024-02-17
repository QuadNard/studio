import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        dribble: {
          400: "#f377a9",
          500: "#ea4c89",
        },
        symbolist: {
          400: "#f8719d",
          500: "#f1437b",
        },
        twitter: {
          400: "#53bcf9",
          500: "#1da1f2",
        },
        typometer: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
