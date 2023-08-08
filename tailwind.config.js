/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./fonts/CalibreLight.otf",
  ],
  theme: {
    extend: {
      fontFamily: {
        calibre: [
          "Calibre",
          "Inter",
          "San Francisco",
          "SF Pro Text",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        darkBlack: "#323130",
      },
    },
  },
  plugins: [
  ],
};
