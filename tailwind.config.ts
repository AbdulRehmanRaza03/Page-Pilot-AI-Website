import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        navy: "#0f172a",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "gradient-x": "gradientX 6s ease infinite",
        blob: "blob 12s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        shine: "shine 2.5s linear infinite",
        "float-slow": "floatSlow 9s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-24px) rotate(2deg)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 20px 60px -15px rgba(79, 70, 229, 0.35)" },
          "50%": { boxShadow: "0 20px 90px -10px rgba(79, 70, 229, 0.6)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%) skewX(-12deg)" },
          "60%, 100%": { transform: "translateX(200%) skewX(-12deg)" },
        },
      },
      boxShadow: {
        "3d": "0 25px 50px -12px rgba(15, 23, 42, 0.25)",
        "3d-lg": "0 40px 80px -20px rgba(15, 23, 42, 0.35)",
        "glow": "0 0 40px -8px rgba(99, 102, 241, 0.5)",
      },
      transitionTimingFunction: {
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
