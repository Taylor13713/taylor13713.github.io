<script lang="ts">
	import SizedBox from "./sizedBox.svelte";
	import { colors } from "$lib/theme";
	import { page } from "$app/stores";
	import Row from "./row.svelte";
</script>

<Row justifyContent="space-between" alignItems="center">
	<Row>
		<h2 style="--color:{colors.deepRed}">
			<a class={$page.url.pathname === "/" ? "show-underline" : ""} href="/">Home</a>
		</h2>
		<SizedBox width={40} />
		<h2>
			<a class={$page.url.pathname === "/projects" ? "show-underline" : ""} href="/projects"
				>Projects</a
			>
		</h2>
		<SizedBox width={40} />
		<h2>
			<a class={$page.url.pathname === "/about" ? "show-underline" : ""} href="/about">About Me</a>
		</h2>
	</Row>
	<img src="assets/personal_logo_red.svg" alt="personal_logo" />
</Row>

<style>
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
	.show-underline::after {
		transform: scale(1);
	}

	img {
		width: 65px;
		height: 75px;
	}
</style>
