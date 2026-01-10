import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],

    // ✅ N'exécute QUE tes tests
    include: ["src/**/*.{test,spec}.{ts,tsx}"],

    // ✅ Ignore totalement ce bruit
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "e2e/**",
      "**/*.spec.ts", 
      "src/app/api/chat/route.test.ts",

    ],
  },
})
