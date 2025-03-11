<script lang="ts">
  import { BlindWatermark } from 'watermark-js-plus';

  import '../app.css';
  import Header from './Header.svelte';
  import LeftSidebar from './LeftSidebar.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    const watermark = new BlindWatermark({
      content: 'daisyui-sveltekit',
      width: 200,
      height: 200,
      onSuccess: () => {},
    });

    watermark.create();
  });

  let { children } = $props();
</script>

<div class="drawer lg:drawer-open">
  <input id="left-sidebar-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <Header />
    <main class="bg-base-200 flex-1 overflow-y-auto px-6 pt-4 md:pt-4">
      {@render children()}
    </main>
  </div>
  <LeftSidebar />
</div>
