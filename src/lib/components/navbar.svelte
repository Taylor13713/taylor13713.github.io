<script lang="ts">
	import SizedBox from "./sizedBox.svelte";
	import { colors } from "$lib/theme";
	import { page } from "$app/stores";
	import Row from "./row.svelte";
	import { Hamburger } from "svelte-hamburgers";
	import HamburgerMenu from "./hamburgerMenu.svelte";
	import Column from "./column.svelte";

	let open: boolean = false;
</script>

<Column>
	<Row justifyContent="space-between" alignItems="center">
		<div class="hamburger-nav">
			<Hamburger bind:open --color={colors.deepRed} type="spring" />
		</div>
		<div class="expanded-menu">
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
					<a class={$page.url.pathname === "/about" ? "show-underline" : ""} href="/about"
						>About Me</a
					>
				</h2>
			</Row>
		</div>
		<img src="assets/personal_logo_red.svg" alt="personal_logo" />
	</Row>
	<SizedBox height={30} />
	<div class="hamburger-nav">
		<HamburgerMenu bind:open />
	</div>
</Column>

<style>
	:global(.hamburger) {
		/* override padding that comes with the package */
		padding: 0 !important;
	}

	.hamburger-nav {
		display: none;
	}

	img {
		width: 65px;
		height: 75px;
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

	@media only screen and (max-width: 768px) {
		.hamburger-nav {
			display: unset;
		}

		.expanded-menu {
			display: none;
		}
	}
</style>
