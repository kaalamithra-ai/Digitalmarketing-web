/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C2185B",
        secondary: "#111827",
        accent: "#FF4D8D",
        brand: {
          50: "#FFF1F6",
          100: "#FFE4EF",
          200: "#FFC7DD",
          300: "#FF9EC4",
          400: "#FF75AB",
          500: "#E91E63",
          600: "#C2185B",
          700: "#9E154A",
          800: "#7D113A",
          900: "#590B2A",
        },
        ink: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#111827",
          900: "#0B0B10",
        },
      },
      boxShadow: {
        glow: "0 16px 38px -22px rgba(194,24,91,0.45)",
        glowStrong: "0 22px 52px -20px rgba(233,30,99,0.55)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
