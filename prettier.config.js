/** @type {import('prettier').Config} */
export default {
  useTabs: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-imports',
    'prettier-plugin-svelte',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
