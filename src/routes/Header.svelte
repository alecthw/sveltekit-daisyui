<script lang="ts">
  import { _, locale } from 'svelte-i18n';

  import { page } from '$app/stores';

  const changeLang = (lang: any) => {
    locale.set(lang);
    (document.activeElement as HTMLElement)?.blur();
  };
</script>

<div class="navbar sticky top-0 z-10 bg-base-100 shadow-md">
  <div class="flex-1">
    <label for="left-sidebar-drawer" class="btn btn-ghost drawer-button lg:hidden">
      <span class="icon-[material-symbols--menu] inline-block h-5 w-5"></span>
    </label>

    {#if $page.url.pathname !== '/'}
      <h1 class="ml-2 text-2xl font-semibold">{$_(`routes.${$page.url.pathname}`)}</h1>
    {/if}
  </div>

  <div class="flex-none">
    <label class="swap swap-rotate">
      <input type="checkbox" class="theme-controller" value="dark" />
      <span class="swap-off icon-[material-symbols--sunny-outline] h-6 w-6"></span>
      <span class="swap-on icon-[material-symbols--mode-night-outline] h-6 w-6"></span>
    </label>

    <div class="dropdown dropdown-end">
      <label for="i18n" tabIndex={0} class="btn btn-circle btn-ghost">
        <span class="icon-[material-symbols--language] h-6 w-6"></span>
      </label>

      <ul class="menu dropdown-content z-[1] w-32 rounded-box bg-base-100 p-2 shadow">
        <li>
          <button onclick={() => changeLang('en-US')}>
            <span
              class="icon-[icon-park-outline--english] {$locale === 'en-US' ? 'bg-primary' : ''}"
            ></span>English
          </button>
        </li>
        <li>
          <button onclick={() => changeLang('zh-CN')}>
            <span
              class="icon-[icon-park-outline--chinese] {$locale === 'zh-CN' ? 'bg-primary' : ''}"
            ></span>简体中文
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
