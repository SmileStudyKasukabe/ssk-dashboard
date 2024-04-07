<script lang="ts">
    export let label: string = "ラベル";
    export let flexDirection: "col" | "row" = "row";
</script>

<label class="form-control w-full max-w-xs">
    <div class="label">
        <span class="label-text">{label}</span>
    </div>
    <div class={`flex items-center gap-2 flex-${flexDirection}`}>
        <slot />
    </div>
</label>
