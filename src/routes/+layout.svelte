<script lang="ts">
  import { BlindWatermark } from 'watermark-js-plus';
  import { onMount } from 'svelte';

  import favicon from '$lib/assets/favicon.svg';
  import Header from './Header.svelte';
  import LeftSidebar from './LeftSidebar.svelte';

  import '../app.css';

  onMount(() => {
    const watermark = new BlindWatermark({
      content: 'sveltekit-daisyui',
      width: 200,
      height: 200,
      onSuccess: () => {},
    });

    watermark.create();
  });

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="drawer lg:drawer-open">
  <input id="left-sidebar-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <Header />
    <main class="flex-1 overflow-y-auto bg-base-200 px-6 pt-4 md:pt-4">
      {@render children?.()}
    </main>
  </div>
  <LeftSidebar />
</div>
