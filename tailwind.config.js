/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy:     "#0A1628",
        navyCard: "#101E33",
        navyLine: "#1C2E47",
        gold:     "#C9A227",
        goldBright:"#E8C468",
        ice:      "#CADCFC",
        mist:     "#F4F7FB",
        slate:    "#4A5568",
        slateLt:  "#8895A7",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans:    ["'IBM Plex Sans'", "sans-serif"],
        mono:    ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
