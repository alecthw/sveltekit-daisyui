<script lang="ts">
  import { page } from '$app/state';
  import ErrorPng from '$lib/assets/error.webp';
</script>

<div class="flex h-full flex-col items-center justify-center bg-base-100">
  <img class="w-5/12" src={ErrorPng} alt="404 Not Found" />
  <h1 class="mt-3 text-4xl font-bold">Error: {page.status}</h1>
  <h2 class="mt-3 text-2xl font-bold">{page.error?.message}</h2>
  <h3 class="mt-3 text-xl">Please contact the administrator.</h3>
</div>
