<script>
  import { page } from '$app/stores';
  import SveltePng from '../assets/svelte.png';
  import { routes } from './sidebar';

  const close = () => {
    const leftSidebar = document.getElementById('left-sidebar-drawer');
    if (leftSidebar !== null) {
      leftSidebar.click();
    }
  };
</script>

<div class="drawer-side z-30 shadow-[1px_0_3px_0px_rgba(0,0,0,0.1)]">
  <label for="left-sidebar-drawer" class="drawer-overlay"></label>

  <ul class="menu min-h-full w-80 bg-base-100 pt-2 text-base-content">
    <button
      class="btn btn-circle btn-ghost absolute right-0 top-0 z-50 mr-2 mt-3 bg-base-100 lg:hidden"
      onclick={() => close()}
    >
      <span class="icon-[material-symbols--close] inline-block h-5 w-5"></span>
    </button>

    <li class="mb-2 text-xl font-semibold">
      <a href="/"><img class="mask mask-squircle w-10" src={SveltePng} alt="Svelte Logo" />Home</a>
    </li>

    {#each Object.entries(routes) as [path, route]}
      <li>
        <a
          class={$page.url.pathname === path ? 'bg-base-200  font-semibold ' : 'font-normal'}
          href={path}
          ><span class="{route.icon} h-6 w-6"></span>{route.name}
          {#if $page.url.pathname === path}
            <span
              class="absolute inset-y-0 left-0 w-1 rounded-br-md rounded-tr-md bg-primary"
              aria-hidden="true"
            ></span>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</div>
