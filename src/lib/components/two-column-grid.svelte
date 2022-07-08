<script lang="ts">
	export let reverse: boolean = false;
</script>

<div style="--gridDirection: {reverse ? 'rtl' : 'ltr'}">
	<slot />
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 30px;
		align-items: center;
		justify-items: center;
		direction: var(--gridDirection);
	}

	@media only screen and (max-width: 768px) {
		div {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
