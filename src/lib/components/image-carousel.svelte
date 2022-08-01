<script lang="ts">
	import { fly } from "svelte/transition";

	export let photos: string[] = [];
	export let path: string = "";
	export let imageWidth: string = "300px";
	export let imageHeight: string = "620px";

	const x: number = 300;
	let index: number = 0;
	let inX: number = x * -1;
	let lastPressed: string;

	const next = () => {
		index = (index + 1) % photos.length;
		inX = x;
		lastPressed = "next";
	};

	const prev = () => {
		index === 0 ? (index = photos.length - 1) : (index = index - 1);
		inX = x * -1;
		lastPressed = "prev";
	};

	const myOut = (element: any, params: any) => {
		return fly(element, { x: lastPressed === "next" ? -x : x, duration: 1000 });
	};

	setInterval(next, 5000);
</script>

<div class="carousel-wrapper" style="--width: {imageWidth}; --height: {imageHeight}">
	<img src="/assets/icons/left_chevron.svg" alt="left" class="chevron" on:click={prev} />
	{#each [photos[index]] as src (index)}
		<img
			src={`/assets/${path}/${src}`}
			alt=""
			class="carousel-images"
			in:fly={{ x: inX, duration: 1000, delay: 500 }}
			out:myOut
		/>
	{/each}
	<img src="/assets/icons/right_chevron.svg" alt="right" class="chevron" on:click={next} />
</div>

<style>
	.carousel-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: var(--height);
	}

	.chevron {
		width: 30px;
		height: 30px;
	}

	.carousel-images {
		width: var(--width);
		height: var(--height);
		position: absolute;
		left: calc(50% - 0.5 * var(--width));
	}

	@media only screen and (max-width: 425px) {
		.carousel-wrapper {
			height: calc(0.6 * var(--height));
		}

		.carousel-images {
			width: calc(0.6 * var(--width));
			height: calc(0.6 * var(--height));
			left: calc(50% - 0.6 * 0.5 * var(--width));
		}
	}
</style>
