<script lang="ts">
    export let value: string | undefined;
    export let placeholder = "テキストを入力";
</script>

<input
    {placeholder}
    type="text"
    class="input input-bordered w-full"
    bind:value
/>
