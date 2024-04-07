<script lang="ts">
    export let title: string | undefined;
    export let className = "";
</script>

<div
    class={`card md:w-96 w-full h-fit bg-base-100 shadow-xl relative ${className}`}
>
    <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <slot />
    </div>
</div>
