<script lang="ts">
	import { scale } from "svelte/transition";
	import { quadOut } from "svelte/easing";
	import { colors } from "$lib/theme";
	import SizedBox from "./sizedBox.svelte";

	export let delay: number = 0;
	export let verticalPadding: number = 0;
</script>

<SizedBox height={verticalPadding} />
<div
	class="bar"
	style="--barColor: {colors.deepRed}"
	transition:scale={{ delay: delay, duration: 750, easing: quadOut, opacity: 1 }}
/>
<SizedBox height={verticalPadding} />

<style>
	.bar {
		border-style: solid;
		border-color: var(--barColor);
		border-width: 1px;
		height: 0;
	}
</style>
