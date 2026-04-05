import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f1c",
        nocturne: "#07090f",
        neon: "#22d3ee",
        flare: "#f43f5e",
        glow: "#0ea5e9"
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "system-ui", "sans-serif"],
        body: ["var(--font-space)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 30px 80px rgba(14, 165, 233, 0.2)",
        pulse: "0 0 40px rgba(34, 211, 238, 0.35)"
      },
      keyframes: {
        orbit: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg) translateX(220px)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg) translateX(220px)" }
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        }
      },
      animation: {
        orbit: "orbit 12s linear infinite",
        spinSlow: "spinSlow 36s linear infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
