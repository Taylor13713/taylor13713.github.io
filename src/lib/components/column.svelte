<script lang="ts">
	export let alignItems: string = "";
	export let justifyContent: string = "";
	export let height: string = "auto";
</script>

<div style="--align: {alignItems}; --justify: {justifyContent}; --height: {height}">
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: var(--align);
		justify-content: var(--justify);
		height: var(--height);
	}
</style>
