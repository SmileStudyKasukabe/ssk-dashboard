<script lang="ts">
    export let value: number | undefined;
    export let placeholder = "数値を入力";
</script>

<input
    {placeholder}
    type="number"
    class="input input-bordered w-full"
    bind:value
/>
