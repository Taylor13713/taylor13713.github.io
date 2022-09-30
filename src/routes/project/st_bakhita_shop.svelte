<script lang="ts">
	import Column from "$lib/atoms/column.svelte";
	import LinkTo from "$lib/atoms/linkTo.svelte";
	import Row from "$lib/atoms/row.svelte";
	import SizedBox from "$lib/atoms/sizedBox.svelte";
	import UnderlinedTitle from "$lib/atoms/underlinedTitle.svelte";
	import ImageCarousel from "$lib/components/image-carousel.svelte";

	const photos: string[] = [
		"st_bakhita_shop_home.svg",
		"st_bakhita_shop_1.png",
		"st_bakhita_shop_2.png",
		"st_bakhita_shop_4.png"
	];
</script>

<ImageCarousel {photos} path="st_bakhita_shop" imageHeight={"400px"} imageWidth={"718px"} />
<Column alignItems="center">
	<SizedBox height={30} />
	<div class="paragraph-width-wrapper">
		<UnderlinedTitle header="Background Info" />
		<SizedBox height={15} />
	</div>
</Column>
