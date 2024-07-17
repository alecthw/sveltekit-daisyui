<script>
  let count = $state(0);
  let double = $derived(count * 2);

  $effect(() => {
    if (count > 10) {
      alert('Too high!');
    }
  });
</script>

<div class="flex h-full flex-col items-center justify-center bg-base-100">
  <button class="btn btn-neutral" onclick={() => count++}>
    {count} / {double}
  </button>
</div>
