import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // config ignores files, equal `.eslintignore`
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'public/',
      'wasm/',
      '.idea/',
      '.vscode/',
      '.svelte-kit/',
    ],
  },

  // extends configs
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],

  // basic config
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },

  // after all eslint plugins configs to override, see https://github.com/prettier/eslint-config-prettier
  prettier,
  ...svelte.configs['flat/prettier'],
];
