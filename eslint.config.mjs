import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      sonarjs,
      unicorn,
    },
    rules: {
      "sonarjs/cognitive-complexity": ["error", 15],
      "sonarjs/no-duplicate-string": "error",
      "sonarjs/no-identical-functions": "error",
      "unicorn/filename-case": ["error", { "cases": { "kebabCase": true, "pascalCase": true } }],
      "unicorn/no-array-for-each": "error",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/no-null": "off",
      "max-lines-per-function": ["error", { 
        "max": 30, 
        "skipBlankLines": true, 
        "skipComments": true,
        "IIFEs": true,
      }],
    },
  }
]);

export default eslintConfig;
