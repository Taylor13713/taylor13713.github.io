<script lang="ts">
	export let alignItems: string = "";
	export let justifyContent: string = "";
	export let autoSwitch: boolean = false;
	export let verticalPadding: number = 0;
	export let horizontalPadding: number = 0;
</script>

<div
	class={autoSwitch ? "auto-switch" : ""}
	style="--align: {alignItems}; --justify: {justifyContent}; --verticalPad: {verticalPadding +
		'px'}; --horizontalPad: {horizontalPadding + 'px'}"
>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: var(--justify);
		align-items: var(--align);
		padding: var(--verticalPad) var(--horizontalPad);
	}

	@media only screen and (max-width: 768px) {
		.auto-switch {
			flex-direction: column;
			justify-content: var(--align);
			align-items: var(--justify);
		}
	}
</style>
