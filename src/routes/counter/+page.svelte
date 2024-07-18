<script>
  let count = $state(0);
  let double = $derived(count * 2);

  $effect(() => {
    if (count > 10) {
      alert('Too high!');
    }
  });
</script>

<div class="flex h-full flex-row items-center justify-center bg-base-100">
  <button class="btn btn-info" onclick={() => count++}> Increase </button>
  <p class="mx-2 font-mono text-lg font-semibold">{count} / {double}</p>
  <button class="btn btn-accent" onclick={() => count--}> Decrease </button>
</div>
