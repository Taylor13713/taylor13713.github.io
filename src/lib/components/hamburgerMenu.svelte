<script lang="ts">
	import { fly, scale } from "svelte/transition";
	import { quadOut } from "svelte/easing";
	import Column from "./column.svelte";
	import { page } from "$app/stores";
	import SizedBox from "./sizedBox.svelte";
	import { colors } from "$lib/theme";

	export let open: boolean = false;
	const menuItems: Record<string, string>[] = [
		{ label: "Home", path: "/" },
		{ label: "Projects", path: "/projects" },
		{ label: "About Me", path: "/about" }
	];
</script>

{#if open}
	<Column horizontalPadding={50}>
		<div
			class="bar"
			style="--barColor: {colors.deepRed}"
			transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }}
		/>
		<SizedBox height={30} />
		{#each menuItems as link, i}
			<h2>
				<a
					transition:fly={{ y: -15, delay: 50 * i }}
					class={$page.url.pathname === link.path ? "show-underline" : ""}
					href={link.path}
				>
					{link.label}
				</a>
			</h2>
			{#if i !== menuItems.length}
				<SizedBox height={30} />
			{/if}
		{/each}
		<div class="bar" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
	</Column>
{/if}

<style>
	.bar {
		border-style: solid;
		border-color: var(--barColor);
		border-width: 1px;
		height: 0;
	}
</style>
