import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
  plugins: [
    devtoolsJson(),
    tailwindcss(),
    sveltekit(),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/lib/paraglide',
      // disableAsyncLocalStorage: true,
      strategy: ['cookie', 'preferredLanguage', 'baseLocale'],
    }),
    compression({
      algorithms: ['gzip', 'brotliCompress'],
    }),
  ],
});
