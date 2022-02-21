module.exports = {
    "parserOptions": {
      "project": "./tsconfig.eslint.json",
    },
    "extends": [
      "@lasalefamine/eslint-config",
      "@lasalefamine/eslint-config/hooks",
      "@lasalefamine/eslint-config/a11y",
      "plugin:tailwindcss/recommended"
    ],
    "plugins": ["tailwindcss"],
    "ignorePatterns": ["dist", "widgets"],
    "rules": {
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": true
        }
      ],
      "tailwindcss/no-custom-classname": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"]
    }
  }
  ;
  