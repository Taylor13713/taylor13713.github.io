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
	}

	a:hover {
		background-color: var(--color);
		color: var(--hoverTextColor);
	}
</style>
