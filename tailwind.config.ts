import type { Config } from "tailwindcss"

const config: Config = {
  // ✅ Utiliser une chaîne pour darkMode
  darkMode: "class",

  // Chemins à scanner
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      // 🔵 Animation pulse pour le bouton emoji
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.08)", opacity: "0.9" },
        },
      },
      animation: {
        pulse: "pulse 3s ease-in-out infinite",
      },
    },
  },

  plugins: [],
}

export default config
