<script lang="ts">
	export let alignItems: string = "";
	export let justifyContent: string = "";
	export let height: string = "auto";
	export let width: string = "auto";
	export let verticalPadding: number = 0;
	export let horizontalPadding: number = 0;
</script>

<div
	style="--align: {alignItems}; --justify: {justifyContent}; --height: {height}; --width: {width}; --verticalPad: {verticalPadding +
		'px'}; --horizontalPad: {horizontalPadding + 'px'}"
>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: var(--align);
		justify-content: var(--justify);
		height: var(--height);
		width: var(--width);
		padding: var(--verticalPad) var(--horizontalPad);
	}
</style>
