<script lang="ts">
    import type { AlertType } from "../../types/alert";
    import MessagingIcon from "../messaging-icons/index.svelte";
    import Cross from "./svg/cross.svelte";

    let _icon: AlertType = "info";
    let _title: string;
    let _content: string;

    let dialogRef: HTMLDialogElement | null = null;

    export const openModal = (
        icon: AlertType,
        title: string,
        content: string,
    ) => {
        _icon = icon;
        _title = title;
        _content = content;

        dialogRef?.showModal();
    };
</script>

<dialog class="modal modal-bottom sm:modal-middle" bind:this={dialogRef}>
    <div class="modal-box">
        <div class="m-0 grid grid-cols-[1fr_1fr_3rem]">
            <div class="flex flex-row gap-8">
                <MessagingIcon icon={_icon} />
                <h3 class="font-bold text-lg">{_title}</h3>
            </div>
            <div />
            <form method="dialog">
                <button class="btn btn-circle btn-ghost">
                    <Cross />
                </button>
            </form>
        </div>

        <p class="py-4">{_content}</p>
    </div>
</dialog>
