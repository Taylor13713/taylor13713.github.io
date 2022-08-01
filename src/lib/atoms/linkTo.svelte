<script lang="ts">
	import { colors } from "$lib/theme";

	export let link: string = "/";
	export let label: string = "";
</script>

<a href={link} style="--color: {colors.deepRed}; --hoverTextColor: {colors.warmWhite}">{label}</a>

<style>
	a {
		display: block;
		border-radius: 10px;
		border: 3px solid var(--color);
		font-size: 20px;
		font-weight: 500;
		padding: 10px 20px;
		background-color: rgba(149, 30, 26, 0);
		transition: background-color 0.5s;
	}

	a:hover {
		color: var(--hoverTextColor);
		background-color: var(--color);
	}
</style>
