/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22d3ee",   // cyan
        dark: "#0b0f14",      // đen xám
        graysoft: "#94a3b8"
      }
    }
  },
  plugins: []
}