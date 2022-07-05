<script lang="ts">
	import SizedBox from "./sizedBox.svelte";
	import { colors } from "$lib/theme";
</script>

<div class="navbar" style="--color:{colors.deepRed}">
	<div class="menu-items">
		<h2>
			<a href="/">Home</a>
		</h2>
		<SizedBox width={40} />
		<h2>
			<a href="#2">Projects</a>
		</h2>
		<SizedBox width={40} />
		<h2>
			<a href="#3">About Me</a>
		</h2>
	</div>
	<img src="assets/personal_logo_red.svg" alt="personal_logo" />
</div>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
	}

	.menu-items {
		display: flex;
	}

	a {
		position: relative;
		text-decoration: none;
	}

	a::after {
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

	a:hover::after,
	a:focus::after,
	a:active::after {
		transform: scale(1);
	}

	img {
		width: 65px;
		height: 75px;
	}
</style>
