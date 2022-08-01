<script lang="ts">
	import { colors } from "$lib/theme";

	export let header: string = "";
</script>

<div class="section-title">
	<h4>{header}</h4>
	<div class="bar" style="--bgColor: {colors.deepRed}" />
</div>

<style>
	.section-title {
		display: flex;
		flex-direction: column;
		width: fit-content;
	}

	.bar {
		height: 3px;
		background-color: var(--bgColor);
	}
</style>
