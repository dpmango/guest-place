module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ['static/', '**/*.min.js'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    quotes: ['error', 'single'],
    // 'prettier/prettier': 'error',
    camelcase: 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
  },
}
