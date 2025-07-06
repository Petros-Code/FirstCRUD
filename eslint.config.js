import js from "@eslint/js";
import globals from "globals";
import { defineConfig,globalIgnores } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  globalIgnores([
        "!node_modules/", // unignore node_modules/ directory
        "node_modules/*", // ignore its content
        "!node_modules/mylibrary/", // unignore node_modules/mylibrary directory
    ]),
]);
