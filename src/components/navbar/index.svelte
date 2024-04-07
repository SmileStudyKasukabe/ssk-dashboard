<script lang="ts">
  import ThemeToggler from "./theme-toggler.svelte";

  export let title: string;
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <button class="btn btn-ghost text-xl">{title}</button>
  </div>
  <div class="flex-none">
    <ThemeToggler />
  </div>
</div>
