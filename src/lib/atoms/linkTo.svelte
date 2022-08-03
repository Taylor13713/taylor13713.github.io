<script lang="ts">
	import { colors } from "$lib/theme";

	export let link: string = "/";
	export let label: string = "";
	export let size: string = "normal";

	let isSmall: boolean = size === "small";
</script>

<a
	href={link}
	style="--color: {colors.deepRed}; --hoverTextColor: {colors.warmWhite}; --fontSize: {isSmall
		? '15px'
		: '20px'}; --padding: {isSmall ? '6px 12px' : '10px 20px'}; --borderThickness: {isSmall
		? '2px'
		: '3px'}; --fontWeight: {isSmall ? 400 : 500}; --borderRadius: {isSmall ? '7px' : '10px'}"
	>{label}</a
>

<style>
	a {
		display: block;
		border-radius: var(--borderRadius);
		border: var(--borderThickness) solid var(--color);
		font-size: var(--fontSize);
		font-weight: var(--fontWeight);
		padding: var(--padding);
		background-color: rgba(149, 30, 26, 0);
		transition: background-color 0.5s;
	}

	a:hover {
		color: var(--hoverTextColor);
		background-color: var(--color);
	}
</style>
