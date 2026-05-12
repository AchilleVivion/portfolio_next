import path from "node:path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.tsx"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/tests/e2e/**",
      "**/.{idea,git,cache,output,temp}/**",
    ],
    coverage: {
      provider: "istanbul",
      reporter: ["lcov", "text", "text-summary"],
      include: [
        "app/**/*.{tsx,ts}",
        "components/**/*.{tsx,ts}",
        "proxy.ts",
      ],
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/*.d.ts",
        "**/*.config.*",
        "**/tests/**",
      ],
      thresholds: {
        statements: 80,
        branches: 75,
        functions: 80,
        lines: 80,
      },
    },
  },
});
