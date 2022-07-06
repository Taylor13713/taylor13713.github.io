<script lang="ts">
	export let alignItems: string = "";
	export let justifyContent: string = "";
	export let autoSwitch: boolean = false;
</script>

<div
	class={autoSwitch ? "auto-switch" : ""}
	style="--align: {alignItems}; --justify: {justifyContent}"
>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: var(--justify);
		align-items: var(--align);
	}

	@media only screen and (max-width: 768px) {
		.auto-switch {
			flex-direction: column;
			justify-content: var(--align);
			align-items: var(--justify);
		}
	}
</style>
