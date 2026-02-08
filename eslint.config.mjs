import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Strict type-aware rules from typescript-eslint
  ...tseslint.configs.strictTypeChecked,

  // Configure the TypeScript parser to use the project tsconfig
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Custom rules
  {
    rules: {
      // Catch common bugs
      "no-console": "warn",
      "no-debugger": "error",
      "no-duplicate-imports": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "warn",

      // TypeScript strictness
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",

      // Exhaustiveness
      "@typescript-eslint/switch-exhaustiveness-check": "error",

      // Relax a few overly strict rules from strictTypeChecked
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowNumber: true, allowBoolean: true },
      ],
    },
  },

  // Disable type-aware linting for JS config files
  {
    files: ["**/*.mjs"],
    ...tseslint.configs.disableTypeChecked,
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
