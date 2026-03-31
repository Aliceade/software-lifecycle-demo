import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // Critical for 'module.exports'
      ecmaVersion: "latest",
      globals: {
        ...globals.node, // Recognizes 'module', 'require', etc.
        ...globals.jest, // Recognizes 'test', 'expect', 'describe'
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off", // Helpful for logging during development
    },
  },
];