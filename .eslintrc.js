module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    './.eslintrc-auto-import.json',
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    parsar: '@typescript-eslint/parsar',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 关闭名称校验
    'vue/multi-word-component-names': "off",
    'vue/html-closing-bracket-newline': "off",
    // 分号结尾
    semi: ['error', 'always'],
    // 强制分号出现在句末
    'semi-style': 'error'
  }
}