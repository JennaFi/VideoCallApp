export const parser = 'babel-eslint';
export const env = {
  browser: true,
  es2021: true,
  node: true,
};
export const extends = ['eslint:recommended', 'plugin:react/recommended'];
export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 12,
  sourceType: 'module',
};
export const plugins = ['react'];
export const rules = {
  indent: ['error', 2],
  'linebreak-style': ['error', 'windows'],
  quotes: ['error', 'single'],
  semi: ['error', 'never'],
};
