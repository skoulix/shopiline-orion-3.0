/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./theme/layout/*.html",
    "./theme/templates/**/*.{html,json}",
    "./theme/sections/*.html",
    "./theme/components/*.html",
    "./theme/blocks/*.html",
    "./theme/public/*.js",
    "./src/**/*.{js,vue}",
  ],
  safelist: ["animate-scroll-left", "animate-scroll-right"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // 16px (px-4)
        sm: "1.5rem", // 24px (px-6)
        lg: "2rem", // 32px (px-8)
        xl: "2rem", // Keep consistent
        "2xl": "2rem", // Keep consistent
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1500px", // Set max-width to 1500px
      },
    },
    extend: {
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "fade-out": "fadeOut 0.3s ease-in-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "slide-out-right": "slideOutRight 0.3s ease-in",
        "scroll-left": "scrollLeft var(--scroll-duration, 30s) linear infinite",
        "scroll-right":
          "scrollRight var(--scroll-duration, 30s) linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-25%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
