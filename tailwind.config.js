/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: [
    'bg-nexus-dark-brown',
    'bg-nexus-dark',
    'bg-nexus-orange',
    'bg-nexus-green-active',
    'bg-nexus-dark-green',
    'bg-nexus-green-inactive',
    'hover:bg-nexus-dark-brown/80',
    'hover:bg-nexus-dark/80',
    'hover:bg-nexus-orange-hover',
    'hover:bg-nexus-green-hover',
    'hover:bg-nexus-dark-green/80',
    'text-nexus-beige-light',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        nexus: {
          "beige-light": "#ede6d7",
          "beige-light-alt": "#f5f0eb",
          dark: "#2d2d2d",
          "dark-brown": "#2d1810",
          "dark-green": "#0c3623",
          "green-active": "#348e64",
          "green-inactive": "#20583e",
          "green-hover": "#4fb382",
          orange: "#ff6b35",
          "orange-hover": "#ff7b45",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}