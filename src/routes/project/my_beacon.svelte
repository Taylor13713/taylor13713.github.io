<script lang="ts">
	import Column from "$lib/atoms/column.svelte";
	import SizedBox from "$lib/atoms/sizedBox.svelte";
	import UnderlinedTitle from "$lib/atoms/underlinedTitle.svelte";
	import ImageCarousel from "$lib/components/image-carousel.svelte";

	let photos: string[] = [
		"my_beacon_home.svg",
		"my_beacon_1.svg",
		"my_beacon_2.svg",
		"my_beacon_3.svg",
		"my_beacon_4.svg"
	];
</script>

<ImageCarousel {photos} path="my_beacon" />
<Column alignItems="center">
	<SizedBox height={30} />
	<div class="text-wrapper">
		<UnderlinedTitle header="Background Info" />
		<SizedBox height={15} />
		<p>
			My Beacon is the official app of Beacon College, a private college located in Leesburg,
			Florida. It is designed with curriculum and support services to serve students with dyslexia,
			ADHD, or other specific learning disabilities.
		</p>
		<SizedBox height={30} />
		<UnderlinedTitle header="Design process" />
		<SizedBox height={15} />
		<p>
			My partner and I worked closely with the college's administration and learning specialist to
			gain more insights regarding the students' thought process when they are presented with a user
			interface.
		</p>
		<SizedBox height={10} />
		<p>
			After doing research and conducting numerous interviews, we came up with a design tailored to
			the students' needs -- the user never navigates away from the home screen, and everything pops
			up as a modal from the bottom. We designed the app to achieve a single-level navigation
			structure while the home page remains visible in the background, so that the user always
			subconsciously knows that they can return to the home page.
		</p>
	</div>
</Column>

<style>
	.text-wrapper {
		width: 70%;
	}

	@media only screen and (max-width: 768px) {
		.text-wrapper {
			width: 90%;
		}
	}
	/* .content-wrapper {
		position: relative;
	} */
</style>
