<script lang="ts" generics="T">
    export let options: { text: string; value: T }[] = [];
    export let value: T[] = [];

    $: nameMapById = options.reduce((acc, v) => {
        acc.set(v.value, v.text);
        return acc;
    }, new Map<T, string>());

    $: displayValue = value.map((v) => nameMapById.get(v) ?? "???").join(", ");
</script>

<details class="menu w-full p-0">
    <summary class="input input-bordered flex justify-end items-center">
        <p>
            {displayValue}
        </p>
    </summary>
    <div class="overflow-y-scroll max-h-60 bg-base-200 rounded-xl">
        {#each options as option}
            <ul>
                <li>
                    <label class="gap-4">
                        <input
                            type="checkbox"
                            class="checkbox checkbox-sm"
                            bind:group={value}
                            value={option.value}
                        />
                        <p class="">
                            {option.text}
                        </p>
                    </label>
                </li>
            </ul>
        {/each}
    </div>
</details>
