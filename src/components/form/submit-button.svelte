<script lang="ts" generics="T, E extends Error">
    import { ok, type Result } from "$lib/utils/result";
    import type { OpenModal } from "../../types/alert";
    import AlertMessage from "../alert-message/alert-message.svelte";

    let loading = false;

    export let disabled = false;
    export let text = "登録";
    export let onSubmit: () => Promise<Result<T, E>> = () => {
        return ok(undefined) as never;
    };

    let openModal: OpenModal = () => {};

    const submitHandler = async () => {
        loading = true;
        const result = await onSubmit();
        loading = false;

        if (result.isOk()) {
            openModal("success", "登録しました", "");
        } else {
            openModal("error", result.error.message, `${result.error.cause}`);
        }
    };
</script>

<button
    class={`btn btn-primary ${disabled || loading ? "btn-disabled" : ""}`}
    on:click={() => submitHandler()}
>
    <span class={`loading loading-spinner ${loading ? "" : "hidden"}`} />
    {text}
</button>

<AlertMessage bind:openModal />
