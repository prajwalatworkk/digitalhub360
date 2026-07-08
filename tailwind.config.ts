import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        surface: "var(--bg-elevated)",
        foreground: "var(--text)",
        muted: "var(--text-muted)",
        border: "var(--border)",
        glass: "var(--glass-bg)",
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          tertiary: "var(--accent-tertiary)"
        }
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "system-ui", "sans-serif"],
        body: ["var(--font-space)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 30px 80px var(--shadow-glow)",
        pulse: "0 0 40px var(--shadow-pulse)"
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
