module.exports = {
  extends: [
    '@lasalefamine/eslint-config',
    '@lasalefamine/eslint-config/hooks',
    '@lasalefamine/eslint-config/a11y',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['tailwindcss'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'tailwindcss/no-custom-classname': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};

