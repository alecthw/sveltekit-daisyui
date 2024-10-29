<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { page } from '$app/stores';
  import type { TRoute } from './routes';

  let {
    path,
    route,
  }: {
    path: string;
    route: { [key: string]: TRoute };
  } = $props();

  let isExpanded = $state(false);
</script>

<div class="flex flex-col">
  <a
    class="c-daisyui-a w-full"
    onclick={() => {
      isExpanded = !isExpanded;
      return false;
    }}
    href="/"
  >
    <span class="{route.icon} h-6 w-6"></span>
    {$_(`routes.${path}`)}
    <span
      class="'w-5 delay-400 icon-[material-symbols--keyboard-arrow-down] float-right mt-1 h-5 transition-all duration-500 {isExpanded
        ? 'rotate-180'
        : ''}"
    ></span>
  </a>

  <div class="w-full {isExpanded ? '' : 'hidden'}">
    <ul class={`menu-compact menu`}>
      {#each Object.entries(route.submenu) as [subPath, subRoute]}
        <li>
          <a
            class={$page.url.pathname === subPath ? 'bg-base-200  font-semibold ' : 'font-normal'}
            href={subPath}
            ><span class="{subRoute.icon} h-5 w-5"></span>
            {$_(`routes.${subPath}`)}
            {#if $page.url.pathname === subPath}
              <span
                class="absolute inset-y-0 left-0 mb-1 mt-1 w-1 rounded-br-md rounded-tr-md bg-primary"
                aria-hidden="true"
              ></span>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
