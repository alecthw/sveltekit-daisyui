<script>
  import { page } from '$app/stores';
  import { routes } from './sidebar';
</script>

<div class="navbar sticky top-0 z-10 bg-base-100 shadow-md">
  <div class="flex-1">
    <label for="left-sidebar-drawer" class="btn btn-ghost drawer-button lg:hidden">
      <span class="icon-[mdi--menu] inline-block h-5 w-5"></span>
    </label>

    {#if $page.url.pathname !== '/'}
      <h1 class="ml-2 text-2xl font-semibold">{routes[$page.url.pathname].name}</h1>
    {/if}
  </div>
</div>
