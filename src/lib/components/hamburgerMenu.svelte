<script lang="ts">
	import { fly, slide } from "svelte/transition";
	import Column from "./column.svelte";
	import { page } from "$app/stores";
	import SizedBox from "./sizedBox.svelte";
	import Divider from "./divider.svelte";

	export let open: boolean = false;
	const menuItems: Record<string, string>[] = [
		{ label: "Home", path: "/" },
		{ label: "Projects", path: "/projects" },
		{ label: "About Me", path: "/about" }
	];
</script>

{#if open}
	<div transition:slide>
		<Column>
			<Divider />
			<SizedBox height={30} />
			{#each menuItems as link, i}
				<h2>
					<a
						transition:slide={{ delay: 50 * i }}
						class={$page.url.pathname === link.path ? "show-underline" : ""}
						href={link.path}
					>
						{link.label}
					</a>
				</h2>
				<SizedBox height={30} />
			{/each}
			<Divider delay={300} />
		</Column>
	</div>
{/if}
