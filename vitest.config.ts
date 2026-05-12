import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["lcov", "text"],
      include: [
        "app/**/*.{tsx,ts}",
        "components/**/*.{tsx,ts}",
        "lib/**/*.{ts,tsx}",
      ],
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/*.d.ts",
      ],
    },
  },
});
