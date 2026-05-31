/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["'Crimson Pro'", "serif"],
        body:    ["'Sora'", "sans-serif"],
        mono:    ["'IBM Plex Mono'", "monospace"]
      },
      colors: {
        ink: {
          50:  "#f7f6f3",
          100: "#eeeae3",
          200: "#ddd5c6",
          300: "#c9baa5",
          400: "#b39b7e",
          500: "#9e8060",
          600: "#8a6b4e",
          700: "#705541",
          800: "#5c4637",
          900: "#4c3b31"
        }
      },
      animation: {
        "fade-in":   "fadeIn 0.35s ease forwards",
        "slide-up":  "slideUp 0.3s ease forwards"
      },
      keyframes: {
        fadeIn:  { from: { opacity: 0 },                              to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: "translateY(10px)" }, to: { opacity: 1, transform: "translateY(0)" } }
      }
    }
  },
  plugins: []
};
