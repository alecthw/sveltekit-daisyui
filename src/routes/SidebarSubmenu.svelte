<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Icon from '@iconify/svelte';

  import { page } from '$app/state';
  import type { TRoute } from './routes';

  let {
    path,
    route,
  }: {
    path: string;
    route: TRoute;
  } = $props();
</script>

<details open>
  <summary>
    <Icon icon={route.icon} class="h-6 w-6" />
    {$_(`routes.${path}`)}
  </summary>
  <ul class="">
    {#each Object.entries(route.submenu as TRoute) as [subPath, subRoute]}
      <li>
        <a
          class={page.url.pathname === subPath ? 'bg-base-200 font-semibold' : 'font-normal'}
          href={subPath}
        >
          <Icon icon={subRoute.icon} class="h-5 w-5" />
          {$_(`routes.${subPath}`)}
          {#if page.url.pathname === subPath}
            <span
              class="bg-primary absolute inset-y-0 left-0 mt-1 mb-1 w-1 rounded-tr-md rounded-br-md"
              aria-hidden="true"
            ></span>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</details>
