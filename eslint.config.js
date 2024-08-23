/** @type {import('eslint').Linter.Config} */
const config = {
  plugins: ['jest', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    node: true,
    'jest/globals': true,
  },
  ignorePatterns: ['*.test.ts'],
};

module.exports = config;
