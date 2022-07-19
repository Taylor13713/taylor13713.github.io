<script lang="ts">
	export let width: number = 0;
	export let height: number = 0;
</script>

<div style="--width: {width + 'px'}; --height: {height + 'px'}" />

<style>
	div {
		width: var(--width);
		height: var(--height);
	}
</style>
