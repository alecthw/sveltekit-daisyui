<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import { getLocale } from '$lib/paraglide/runtime';

  $effect(() => {
    console.log(getLocale());
  });
</script>

<div class="flex h-full flex-col items-center justify-center bg-base-100">
  <p class="text-xl">Welcome to SvelteKit</p>
  <p>
    {m['home.visit']()}
    <a class="link link-primary" target="_blank" href="https://kit.svelte.dev">kit.svelte.dev</a> to
    read the documentation
  </p>
</div>
