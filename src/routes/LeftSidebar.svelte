<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Icon from '@iconify/svelte';

  import { page } from '$app/state';
  import SveltePng from '../assets/svelte.png';
  import { routes } from './routes';
  import SidebarSubmenu from './SidebarSubmenu.svelte';
</script>

<div class="drawer-side z-30 shadow-[1px_0_3px_0px_rgba(0,0,0,0.1)]">
  <label for="left-sidebar-drawer" class="drawer-overlay"></label>

  <ul class="menu bg-base-100 text-base-content min-h-full w-80 pt-2">
    <button
      aria-label="close-left-sidebar"
      class="btn btn-circle btn-ghost bg-base-100 absolute top-0 right-0 z-50 mt-3 mr-2 lg:hidden"
      onclick={() => {
        document.getElementById('left-sidebar-drawer')?.click();
      }}
    >
      <Icon icon="material-symbols:close" class="inline-block h-5 w-5" />
    </button>

    <li class="mb-2 text-xl font-semibold">
      <a href="/"><img class="mask mask-squircle w-10" src={SveltePng} alt="Svelte Logo" />Home</a>
    </li>

    {#each Object.entries(routes) as [path, route]}
      <li>
        {#if route.submenu}
          <SidebarSubmenu {path} {route}></SidebarSubmenu>
        {:else}
          <a
            class={page.url.pathname === path ? 'bg-base-200  font-semibold' : 'font-normal'}
            href={path}
          >
            <Icon icon={route.icon} class="h-6 w-6" />
            {$_(`routes.${path}`)}
            {#if page.url.pathname === path}
              <span
                class="bg-primary absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md"
                aria-hidden="true"
              ></span>
            {/if}
          </a>
        {/if}
      </li>
    {/each}
  </ul>
</div>
