<script lang="ts">
  import Info from "./svg/info.svelte";
  import Warning from "./svg/warning.svelte";
  import Success from "./svg/success.svelte";
  import Error from "./svg/error.svelte";
    import type { AlertType } from "../../types/alert";

  export let icon: AlertType;

  const getComponent = (icon: AlertType) => {
    if (icon === "success") {
      return Success;
    } else if (icon === "warning") {
      return Warning;
    } else if (icon === "error") {
      return Error;
    } else {
      return Info;
    }
  };

  $: Component = getComponent(icon);
</script>

<svelte:component this={Component} />
