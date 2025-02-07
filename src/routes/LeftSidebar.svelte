<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Icon from '@iconify/svelte';

  import { page } from '$app/state';
  import SveltePng from '../assets/svelte.png';
  import { menus } from './menus';
  import type { TMenu } from './menus';
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

    {#snippet renderRoutes(menus:  Array<TMenu>)}
      {#each menus as menu}
        <li>
          {#if menu.children}
            <details open>
              <summary>
                <Icon icon={menu.icon} class="h-6 w-6" />
                {$_(`routes.${menu.path}`)}
              </summary>
              <ul>
                {@render renderRoutes(menu.children)}
              </ul>
            </details>
          {:else}
            <a
              class={page.url.pathname === menu.path ? 'bg-base-200  font-semibold' : 'font-normal'}
              href={menu.path}
            >
              <Icon icon={menu.icon} class="h-6 w-6" />
              {$_(`routes.${menu.path}`)}
              {#if page.url.pathname === menu.path}
                <span
                  class="bg-primary absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md"
                  aria-hidden="true"
                ></span>
              {/if}
            </a>
          {/if}
        </li>
      {/each}
    {/snippet}

    {@render renderRoutes(menus)}
  </ul>
</div>
