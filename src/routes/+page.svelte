<script>
  let count = $state(0);
  let double = $derived(count * 2);

  $effect(() => {
    if (count > 10) {
      alert('Too high!');
    }
  });
</script>

<div class="flex flex-col items-center justify-center">
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  <button class="btn" onclick={() => count++}>
    {count} / {double}
  </button>
</div>
