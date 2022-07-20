<script lang="ts">
	import Column from "$lib/atoms/column.svelte";
	import Divider from "$lib/atoms/divider.svelte";
	import LinkTo from "$lib/atoms/linkTo.svelte";
	import SizedBox from "$lib/atoms/sizedBox.svelte";
	import TwoColumnGrid from "$lib/components/two-column-grid.svelte";
	import { projectSets } from "$lib/theme";
</script>

<Column>
	<SizedBox height={20} />
	{#each projectSets as { src, alt, height, width, projectName, projectType, path }, i}
		<TwoColumnGrid reverse={i % 2 === 1}>
			<Column alignItems="center">
				<h1>{projectName}</h1>
				<SizedBox height={20} />
				<h5>{projectType}</h5>
				<SizedBox height={25} />
				<LinkTo label="Learn More" link={`/project/${path}`} />
			</Column>
			<img {src} {alt} {height} {width} />
		</TwoColumnGrid>
		{#if i !== projectSets.length - 1}
			<Divider verticalPadding={50} />
		{/if}
	{/each}
</Column>

<style>
	@media only screen and (max-width: 768px) {
		img {
			margin-top: 50px;
		}
	}
</style>
