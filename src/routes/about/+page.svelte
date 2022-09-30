<script lang="ts">
	import Column from "$lib/atoms/column.svelte";
	import Divider from "$lib/atoms/divider.svelte";
	import SizedBox from "$lib/atoms/sizedBox.svelte";
	import TwoColumnGrid from "$lib/components/two-column-grid.svelte";
	import { illustrationSets } from "$lib/theme";
</script>

<Column>
	<SizedBox height={20} />
	{#each illustrationSets as { src, alt, description, height, width }, i}
		<TwoColumnGrid reverse={i % 2 === 1}>
			<img {src} {alt} {height} {width} />
			<h4>{description}</h4>
		</TwoColumnGrid>
		{#if i !== illustrationSets.length - 1}
			<Divider verticalPadding={50} />
		{/if}
	{/each}
</Column>

<style>
	h4 {
		text-align: center;
		max-width: 650px;
	}

	@media only screen and (max-width: 768px) {
		h4 {
			margin-top: 30px;
		}
	}
</style>
