/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        // Salesforce-inspired brand palette extensions
        salesforce: {
          50: "#e8f0fe",
          100: "#c6dbfc",
          200: "#a0c4f9",
          300: "#7aacf5",
          400: "#5e9af2",
          500: "#4285f0",
          600: "#3c7ae0",
          700: "#336acc",
          800: "#2b5ab9",
          900: "#1d3e99",
        },
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        glow: "0 0 40px -10px rgba(59, 130, 246, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
