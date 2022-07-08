<script lang="ts">
	import Column from "$lib/components/column.svelte";
	import Divider from "$lib/components/divider.svelte";
	import SizedBox from "$lib/components/sizedBox.svelte";
	import TwoColumnGrid from "$lib/components/two-column-grid.svelte";

	const illustrationSets: Record<string, string>[] = [
		{
			src: "assets/hello_red.svg",
			alt: "hello",
			description:
				"My name is Taylor. I major in Computer Science and minor in Collaborative Innovation at the University of Notre Dame. I am expected to graduate in May of 2023",
			height: "auto",
			width: "auto"
		},
		{
			src: "assets/fullstack_red.svg",
			alt: "fullstack",
			description:
				"I am experienced in Fullstack Development with the specialization in Frontend and UI/UX Development",
			height: "160px",
			width: "400px"
		},
		{
			src: "assets/design_red.svg",
			alt: "design",
			description:
				"Out of all the areas of design, I specialize in human-centered UI/UX Design. I design and develop apps and websites with the goal of bettering other people’s lives",
			height: "auto",
			width: "auto"
		},
		{
			src: "assets/ipad_red.svg",
			alt: "drawing",
			description: "Outside of my studies, I enjoy drawing anime fan-arts on my iPad",
			height: "auto",
			width: "auto"
		},
		{
			src: "assets/red.svg",
			alt: "red",
			description: "My favorite color is red",
			height: "auto",
			width: "auto"
		},
		{
			src: "assets/i_love_skog.svg",
			alt: "skog",
			description: "I love boba tea and Djungelskog",
			height: "auto",
			width: "auto"
		}
	];
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
