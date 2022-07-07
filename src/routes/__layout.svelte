<script lang="ts">
	import Navbar from "$lib/components/navbar.svelte";
	import { colors } from "$lib/theme";
</script>

<body style="--bgColor: {colors.warmWhite}; --color:{colors.deepRed}">
	<div class="nav-wrapper">
		<Navbar />
	</div>
	<div class="page-wrapper">
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

	.nav-wrapper {
		position: fixed;
		top: 0;
		width: 100%;
	}

	:global(h1) {
		font-size: 36px;
		font-weight: 500;
		margin: 0;
		text-align: center;
	}

	:global(h2) {
		font-size: 24px;
		font-weight: 500;
		margin: 0;
		text-align: center;
	}

	:global(h3) {
		font-size: 24px;
		font-weight: 300;
		margin: 0;
		text-align: center;
	}

	:global(a) {
		color: var(--color);
		position: relative;
		text-decoration: none;
	}

	:global(a::after) {
		content: "";
		position: absolute;
		display: block;
		width: 100%;
		height: 5px;
		bottom: -8px;
		left: 0;
		background-color: var(--color);
		opacity: 1;
		transform: scale(0);
		transform-origin: center;
		transition: opacity 300ms, transform 300ms;
	}

	:global(a:hover::after, .show-underline::after) {
		transform: scale(1);
	}
</style>
