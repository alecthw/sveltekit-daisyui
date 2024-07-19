<svelte:options runes={true} />

<script lang="ts">
  import { translate, locale } from '$lib/i18n';

  $effect(() => {
    console.log($locale);
  });
</script>

<div class="flex h-full flex-col items-center justify-center bg-base-100">
  <p class="text-xl">Welcome to SvelteKit</p>
  <p>
    {$translate({
      en: 'Visit',
      zh: '参考',
    })}
    <a class="link link-primary" target="_blank" href="https://kit.svelte.dev">kit.svelte.dev</a> to
    read the documentation
  </p>
</div>
