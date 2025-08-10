# SvelteKit + daisyUI + TailwindCSS

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

This project shows a fully setup to get SvelteKit working with daisyUI and TailwindCSS in CSR mode.

- [adapter-static](https://svelte.dev/docs/kit/adapter-static)

## Developing

Once you've clone this project and installed dependencies with `pnpm install` (or `npm install` or `yarn`), start a development server:

```bash
pnpm run dev
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

## inlang Paraglide JS plugin offline

Create `plugins` folder in the root directory and download plugins to this.

Change modules setting in `project.inlang\settings.json` file.

```json
{
  "modules": [
    "./plugins/plugin-message-format.js",
    "./plugins/plugin-m-function-matcher.js"
  ]
}
```
