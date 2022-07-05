<script lang="ts">
	import Navbar from "$lib/components/navbar.svelte";
	import { colors } from "$lib/theme";
</script>

<body style="--bgColor: {colors.warmWhite}; --color:{colors.deepRed}">
	<div class="page-wrapper">
		<Navbar />
		<slot />
	</div>
</body>

<style>
	body {
		width: 100%;
		height: 100%;
		margin: 0;

		background-color: var(--bgColor);
		color: var(--color);

		font-family: helvetica neue;
	}

	.page-wrapper {
		margin: 30px 50px;
	}

	:global(h1) {
		font-size: 36px;
		font-weight: 500;
	}

	:global(h2) {
		font-size: 24px;
		font-weight: 500;
	}

	:global(a) {
		color: var(--color);
	}
</style>
