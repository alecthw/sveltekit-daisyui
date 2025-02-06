<script lang="ts">
  import { _, locale } from 'svelte-i18n';

  $effect(() => {
    console.log($locale);
  });
</script>

<div class="bg-base-100 flex h-full flex-col items-center justify-center">
  <p class="text-xl">Welcome to SvelteKit</p>
  <p>
    {$_('home.visit')}
    <a class="link link-primary" target="_blank" href="https://kit.svelte.dev">kit.svelte.dev</a> to
    read the documentation
  </p>
</div>
