<script lang="ts">
  import { calcTextColorByBg } from "../../../lib/utils/color";

  export let personalColor: string;
  export let userName: string;
  export let show: boolean;

  $: previewTextColor = calcTextColorByBg(personalColor).unwrapOr("#f8f8f8");
  $: previewText = `XX:XX - XX:XX: ${userName}`;
</script>

<div class="label">
  <span class="label-text">プレビュー</span>
</div>
<div class="mockup-browser border border-base-300">
  <div class="mockup-browser-toolbar" />
  <div class="p-5">
    <div
      class={`rounded-md transition-opacity ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={`background-color: ${personalColor};`}
    >
      <p
        class="flex justify-center text-sm p-[0.2em]"
        style={`color: ${previewTextColor}`}
      >
        {previewText}
      </p>
    </div>
  </div>
</div>
