<script>
  import '../app.css';
  import { page } from '$app/stores';
  import SveltePng from '../assets/svelte.png';

  let { children } = $props();
</script>

<div class="drawer lg:drawer-open">
  <input id="left-sidebar-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-side z-30">
    <label for="left-sidebar-drawer" class="drawer-overlay"></label>
    <ul class="menu min-h-full w-80 bg-base-100 pt-2 text-base-content">
      <li class="mb-2 text-xl font-semibold">
        <a href="/"><img class="mask mask-squircle w-10" src={SveltePng} alt="Svelte Logo" />Home</a
        >
      </li>
      <li>
        <a
          class={$page.url.pathname === '/counter' ? 'bg-base-200  font-semibold ' : 'font-normal'}
          href="/counter"
          ><span class="icon-[mdi--calculator-variant-outline] h-6 w-6"></span>Counter
          {#if $page.url.pathname === '/counter'}
            <span
              class="absolute inset-y-0 left-0 w-1 rounded-br-md rounded-tr-md bg-primary"
              aria-hidden="true"
            ></span>
          {/if}
        </a>
      </li>
      <li>
        <a
          class={$page.url.pathname === '/about' ? 'bg-base-200  font-semibold ' : 'font-normal'}
          href="/about"
          ><span class="icon-[mdi--alert-circle-outline] h-6 w-6"></span>About
          {#if $page.url.pathname === '/about'}
            <span
              class="absolute inset-y-0 left-0 w-1 rounded-br-md rounded-tr-md bg-primary"
              aria-hidden="true"
            ></span>
          {/if}
        </a>
      </li>
    </ul>
  </div>
  <div class="drawer-content flex flex-col">
    <div class="navbar sticky top-0 z-10 bg-base-100 shadow-md"></div>
    <main class="flex-1 overflow-y-auto bg-base-200 px-6 pt-4 md:pt-4">
      {@render children()}
    </main>
  </div>
</div>
