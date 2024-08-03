<script lang="ts">
    import Icon_Error from "../../assets/icons/error.svelte";
    import Icon_Info from "../../assets/icons/info.svelte";
    import Icon_Success from "../../assets/icons/success.svelte";
    import Icon_Warn from "../../assets/icons/warning.svelte";

    import type { AlertType } from "./types/alert";

    export let icon: AlertType;

    const getComponent = (icon: AlertType) => {
        if (icon === "success") {
            return Icon_Success;
        } else if (icon === "warning") {
            return Icon_Warn;
        } else if (icon === "error") {
            return Icon_Error;
        } else {
            return Icon_Info;
        }
    };

    $: Component = getComponent(icon);
</script>

<svelte:component this={Component} />
