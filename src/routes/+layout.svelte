<script lang="ts">
  import '../app.css';
  import Header from './Header.svelte';
  import LeftSidebar from './LeftSidebar.svelte';

  let { children } = $props();
</script>

<div class="drawer lg:drawer-open">
  <input id="left-sidebar-drawer" type="checkbox" class="drawer-toggle" />
  <LeftSidebar />
  <div class="drawer-content flex flex-col">
    <Header />
    <main class="bg-base-200 flex-1 overflow-y-auto px-6 pt-4 md:pt-4">
      {@render children()}
    </main>
  </div>
</div>
