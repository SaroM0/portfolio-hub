/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        "clr-bg": "#111213",
        "clr-surface": "#1F2022",
        "clr-border": "#2C2D2E",
        "clr-text-primary": "#F0E7D8",
        "clr-text-secondary": "#CFC8BA",
        "clr-accent": "#DCCBB4",
        "clr-accent-hover": "#E9DBC5",
        "clr-accent-subtle": "#B8A892",
      },
    },
  },
  plugins: [],
};
