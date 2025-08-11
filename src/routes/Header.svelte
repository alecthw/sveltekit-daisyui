<script lang="ts">
  import Icon from '@iconify/svelte';

  import { page } from '$app/state';
  import { m } from '$lib/paraglide/messages.js';
  import { getLocale, setLocale } from '$lib/paraglide/runtime';

  const changeLang = (lang: any) => {
    setLocale(lang);
  };

  const getName = (path: string) => (m as any)[`routes${path.replace('/', '.')}`]?.();
</script>

<div class="sticky top-0 z-10 navbar bg-base-100 shadow-md">
  <div class="flex-none">
    <label for="left-sidebar-drawer" class="drawer-button btn btn-ghost lg:hidden">
      <Icon icon="material-symbols:menu" class="h-5 w-5" />
    </label>
  </div>

  <div class="flex-1">
    {#if page.url.pathname !== '/'}
      <h1 class="ml-2 text-2xl font-semibold">{getName(page.url.pathname)}</h1>
    {/if}
  </div>

  <div class="flex-none">
    <label class="swap swap-rotate">
      <input type="checkbox" class="theme-controller" value="dark" />
      <Icon icon="material-symbols:sunny-outline" class="swap-off h-6 w-6" />
      <Icon icon="material-symbols:mode-night-outline" class="swap-on h-6 w-6" />
    </label>

    <div class="dropdown dropdown-end">
      <label for="i18n" tabIndex={0} class="btn btn-circle btn-ghost">
        <Icon icon="material-symbols:language" class="h-6 w-6" />
      </label>

      <ul class="dropdown-content menu z-[1] w-32 rounded-box bg-base-100 p-2 shadow-xs">
        <li>
          <button onclick={() => changeLang('en-us')}>
            <Icon
              icon="icon-park-outline:english"
              class={getLocale() === 'en-us' ? 'text-primary' : ''}
            />
            English
          </button>
        </li>
        <li>
          <button onclick={() => changeLang('zh-cn')}>
            <Icon
              icon="icon-park-outline:chinese"
              class={getLocale() === 'zh-cn' ? 'text-primary' : ''}
            />
            简体中文
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
