<script lang="ts">
  import { _, locale } from 'svelte-i18n';
  import Icon from '@iconify/svelte';

  import { page } from '$app/state';

  const changeLang = (lang: any) => {
    locale.set(lang);
    (document.activeElement as HTMLElement)?.blur();
  };
</script>

<div class="navbar bg-base-100 sticky top-0 z-10 shadow-md">
  <div class="flex-1">
    <label for="left-sidebar-drawer" class="btn btn-ghost drawer-button lg:hidden">
      <Icon icon="material-symbols:menu" class="inline-block h-5 w-5" />
    </label>

    {#if page.url.pathname !== '/'}
      <h1 class="ml-2 text-2xl font-semibold">{$_(`routes.${page.url.pathname}`)}</h1>
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

      <ul class="menu dropdown-content rounded-box bg-base-100 z-[1] w-32 p-2 shadow-sm">
        <li>
          <button onclick={() => changeLang('en-US')}>
            <Icon
              icon="icon-park-outline:english"
              class={$locale === 'en-US' ? 'text-primary' : ''}
            />
            English
          </button>
        </li>
        <li>
          <button onclick={() => changeLang('zh-CN')}>
            <Icon
              icon="icon-park-outline:chinese"
              class={$locale === 'zh-CN' ? 'text-primary' : ''}
            />
            简体中文
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
