<script lang="ts" generics="T">
    export let placeholder = "選択してください";
    export let options: { text: string; value: T }[];
    export let value: T | undefined;
</script>

<select class="select input-bordered w-full" bind:value>
    <option disabled selected>{placeholder}</option>
    {#each options as option}
        <option value={option.value}>{option.text}</option>
    {/each}
</select>
