<script lang="ts">
	import Row from "../atoms/row.svelte";

	export let reverse: boolean = false;
</script>

<Row justifyContent="center">
	<div style="--gridDirection: {reverse ? 'rtl' : 'ltr'}">
		<slot />
	</div>
</Row>

<style>
	div {
		display: grid;
		grid-template-columns: 50% 50%;
		column-gap: 30px;
		align-items: center;
		justify-items: center;
		direction: var(--gridDirection);
		width: 100%;
		max-width: 1500px;
	}

	@media only screen and (max-width: 768px) {
		div {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
