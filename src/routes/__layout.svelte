<script lang="ts">
	import Navbar from "$lib/components/navbar.svelte";
	import { colors } from "$lib/theme";
	import PageTransition from "$lib/components/page-transition.svelte";
	import { onMount } from "svelte";

	let ready = false;
	onMount(() => (ready = true));
</script>

<body style="--bgColor: {colors.warmWhite}; --color:{colors.deepRed}">
	<div class="page-wrapper">
		<Navbar />
		<!-- {#if ready} -->
		<PageTransition>
			<slot />
		</PageTransition>
		<!-- {/if} -->
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

	:global(h4) {
		font-size: 22px;
		line-height: 32px;
		font-weight: 400;
		margin: 0;
	}

	:global(h5) {
		font-size: 20px;
		font-weight: 300;
		margin: 0;
	}

	:global(a) {
		color: var(--color);
		position: relative;
		text-decoration: none;
	}
</style>
