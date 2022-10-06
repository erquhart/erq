module.exports = {
  env: {
    node: true,
    es2022: true,
    shelljs: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    quotes: ['warn', 'single'],
    semi: ['error', 'never'],
    'no-shadow': 'error',
    'no-extra-semi': 'off',
    'no-use-before-define': 'error',
    'no-duplicate-imports': 'error',
  },
}
