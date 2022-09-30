<script lang="ts">
	import Column from "$lib/atoms/column.svelte";
	import SizedBox from "$lib/atoms/sizedBox.svelte";
	import UnderlinedTitle from "$lib/atoms/underlinedTitle.svelte";
</script>

<Column alignItems="center">
	<div class="paragraph-width-wrapper">
		<UnderlinedTitle header="Background Info" />
		<SizedBox height={15} />
		<p>
			This personal portfolio website not only allows me to present all of my projects in one place,
			but it also demonstrates my minimalistic style as a UI/UX designer. I chose to develop my own
			website as my portfolio using Sveltkit (instead of using a website builder like Wix or
			SquareSpace) because I am a programmer as well as a designer. I wanted to showcase both sets
			of my skills using this portfolio (also because Sveltkit is a relatively new framework and I
			like to learn new & cool things).
		</p>
		<SizedBox height={20} />

		<UnderlinedTitle header="Design & Development" />
		<SizedBox height={15} />
		<p>
			I chose dark red and warm white as a color pallette for this website because it is not only my
			personal favorite, but the colors also have enough contrast and great readability on a screen.
		</p>
		<SizedBox height={10} />
		<p>
			I intentionally kept the navigation structure simple. There are only three tabs on the top bar
			and it is very clear how to find my projects. The home page displays my slogan with a fun
			animation, letting people know who I am and what I'm all about. The About page is meant to be
			light-hearted and fun. Therefore, I filled it with my doodles and short facts about me not
			only as a programmer and designer, but also as a person.
		</p>
		<SizedBox height={10} />
		<p>
			I also designed my personal logo (featuring my beloved emotional support teddy bear), which
			can be seen on the top right corner of the website. I illustrated it along with the doodles on
			the About page in Procreate and refined them in Adobe Illustrator.
		</p>
		<SizedBox height={10} />
		<p>
			This website is developed using SvelteKit and hosted using Github pages. I utilized animations
			to maximize the user experience. This website is meant to be viewed on a screen at least 768px
			wide. I tried to accomodate for all screen sizes, but some of the images become too small on
			mobile screens. Overall, I really enjoyed deisgning and learning SvelteKit to develop this
			website.
		</p>
	</div>
</Column>

<style>
	p {
		font-weight: 400;
	}
</style>
