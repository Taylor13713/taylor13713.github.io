<script lang="ts">
	import { page } from "$app/stores";
	import Column from "$lib/atoms/column.svelte";
	import LinkTo from "$lib/atoms/linkTo.svelte";
	import SizedBox from "$lib/atoms/sizedBox.svelte";
	import { projectSets } from "$lib/theme";

	const { projectName } = $page.params;
	const validateProjectName = (): boolean => {
		const filtered = projectSets.filter((p) => p.projectName === projectName);
		return filtered.length === 1;
	};

	let isProjectValid: boolean = validateProjectName();
</script>

<h1>{projectName}</h1>
<!-- {:else}
	<Column alignItems="center">
		<h1>Sorry, this project is not found</h1>
		<SizedBox height={30} />
		<LinkTo label="Return To Projects" link="/projects" />
	</Column> -->
