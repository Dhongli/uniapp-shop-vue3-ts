// .eslintrc.cjs
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  globals: {
    uni: true,
    wx: true,
    WechatMiniprogram: true,
    getCurrentPages: true,
    getApp: true,
    UniApp: true,
    UniHelper: true,
    App: true,
    Page: true,
    Component: true,
    AnyObject: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 100,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/no-deprecated-html-element-is': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // 可选：开启一些类型感知规则（见下方说明）
  },
  overrides: [
    // 👇 .vue 文件
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
      },
    },
    // 👇 .ts / .tsx 文件 —— 启用类型感知
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        // ✅ 关键：指向你的 tsconfig.json
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        // 继承全局设置
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    // 👇 .js 等非 TS 文件（不需要类型信息）
    {
      files: ['*.js', '*.jsx', '*.cjs', '*.mjs'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  ],
}
