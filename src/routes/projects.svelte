<script lang="ts">
	import Column from "$lib/components/column.svelte";
	import Divider from "$lib/components/divider.svelte";
	import LinkTo from "$lib/components/linkTo.svelte";
	import SizedBox from "$lib/components/sizedBox.svelte";
	import TwoColumnGrid from "$lib/components/two-column-grid.svelte";

	const projectSets: Record<string, string>[] = [
		{
			src: "assets/my_beacon_home.svg",
			alt: "my beacon home",
			height: "515px",
			width: "249px",
			projectName: "My Beacon",
			projectType: "Mobile Design & Development"
		},
		{
			src: "assets/mdaware_home.svg",
			alt: "mdaware home",
			height: "515px",
			width: "249px",
			projectName: "MDAware",
			projectType: "Mobile Design"
		},
		{
			src: "assets/stbakhita_shop_home.svg",
			alt: "st.bakhita's shop home",
			height: "95%",
			width: "95%",
			projectName: "St. Bakhita's Shop",
			projectType: "Web Design"
		},
		{
			src: "assets/personal_logo_red.svg",
			alt: "personal logo",
			height: "300px",
			width: "300px",
			projectName: "This Website",
			projectType: "Web Design & Development"
		},
		{
			src: "assets/stbakhita_logo.svg",
			alt: "st.bakhita's logo",
			height: "300px",
			width: "300px",
			projectName: "St. Bakhita's Logo",
			projectType: "Logo Design"
		},
		{
			src: "assets/interior_light_stage.jpg",
			alt: "interior light stage",
			height: "95%",
			width: "95%",
			projectName: "Interior Light",
			projectType: "Visual Communication Design - Typography"
		},
		{
			src: "assets/book_design_covers.jpg",
			alt: "book design covers",
			height: "95%",
			width: "95%",
			projectName: "Book Design: Things You Should Know",
			projectType: "Visual Communication Design - Typography"
		},
		{
			src: "assets/magazine_cover.png",
			alt: "magazine cover design",
			height: "95%",
			width: "95%",
			projectName: "Magazine Design: Solidarity Against Hate",
			projectType: "Visual Communication Design"
		}
	];
</script>

<Column>
	<SizedBox height={20} />
	{#each projectSets as { src, alt, height, width, projectName, projectType }, i}
		<TwoColumnGrid reverse={i % 2 === 1}>
			<Column alignItems="center">
				<h1>{projectName}</h1>
				<SizedBox height={20} />
				<h5>{projectType}</h5>
				<SizedBox height={25} />
				<LinkTo label="Learn More" />
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
