<script lang="ts">
	import Column from "$lib/atoms/column.svelte";
	import LinkTo from "$lib/atoms/linkTo.svelte";
	import Row from "$lib/atoms/row.svelte";
	import SizedBox from "$lib/atoms/sizedBox.svelte";
	import UnderlinedTitle from "$lib/atoms/underlinedTitle.svelte";
	import ImageCarousel from "$lib/components/image-carousel.svelte";

	const photos: string[] = [
		"myBeacon_home.svg",
		"myBeacon_1.svg",
		"myBeacon_2.svg",
		"myBeacon_3.svg",
		"myBeacon_4.svg"
	];
</script>

<ImageCarousel {photos} path="myBeacon" />
<Column alignItems="center">
	<SizedBox height={30} />
	<div class="paragraph-width-wrapper">
		<UnderlinedTitle header="Background Info" />
		<SizedBox height={15} />
		<p>
			Beacon College is a private college located in Leesburg, Florida. It is designed with
			curriculum and support services to serve students with dyslexia, ADHD, or other specific
			learning disabilities.
		</p>
		<SizedBox height={10} />
		<p>
			MyBeacon is the College’s signature, readily accessible tool for student navigation of all
			things “Beacon.” Simply access the menu and the resources of the College are yours. Want to
			know about Campus Dining, Transportation, or Student Events? They are yours. Need to access
			either your Canvas LMS platform or the Student Portal? Click and log in. Campus locations and
			local amenities (banks, restaurants, shopping) are identified and mapped for you. Contacting
			important offices on campus by phone or email is simplified.
		</p>
		<SizedBox height={10} />
		<p>
			Although this App has been designed primarily with student needs as its focus, parents and
			other members of the Beacon community are welcome to download this product.
		</p>
		<SizedBox height={20} />

		<UnderlinedTitle header="Statistics" />
		<SizedBox height={15} />
		<p>
			This intuitive, easy-to-navigate app is currently used by around 400 members at the Beacon
			College community, including students, their parents, faculty and staff.
		</p>
		<SizedBox height={20} />

		<UnderlinedTitle header="Design & Development" />
		<SizedBox height={15} />
		<p>
			My partner and I worked closely with the college's administration and learning specialist to
			gain more insights regarding the students' thought process when they are presented with a user
			interface.
		</p>
		<SizedBox height={10} />
		<p>
			After doing research and conducting numerous interviews, we came up with a design tailored to
			the students' needs. In MyBeacon, the user never navigates away from the home screen, and
			everything pops up as a modal from the bottom. We designed the app with a single-level
			navigation structure and a home page that remains visible in the background at all times.
			Therefore, the user always subconsciously knows that they can return to the home page if they
			cannot find the information they want, instead of getting overwhelmed and lost due to multiple
			levels of navigation.
		</p>
		<SizedBox height={10} />
		<p>
			We made the initial mockup of the app in Figma, and developed it using Flutter, a
			multi-platform mobile development framework.
		</p>
		<SizedBox height={10} />
		<p>
			After the app went live in the fall of 2021, we actively sought feedback from the community to
			eliminate new bugs and improve the app. We also added additional features when requested, such
			as Covid symptoms reporting.
		</p>
		<SizedBox height={20} />

		<UnderlinedTitle header="Additional Links" />
		<SizedBox height={15} />
		<p>
			P.S. The screenshots on the app stores may be outdated. The screenshots included on this site
			are from the newest version of the app.
		</p>
		<SizedBox height={15} />
		<Row>
			<LinkTo
				link="https://apps.apple.com/us/app/mybeacon-beacon-college/id1526618027?platform=iphone"
				label="View on App Store"
				size="small"
			/>
			<SizedBox width={20} />
			<LinkTo
				link="https://play.google.com/store/apps/details?id=com.beaconcollege.mybeacon&hl=en_US&gl=US"
				label="View on Google Play"
				size="small"
			/>
		</Row>
	</div>
</Column>

<style>
	p {
		font-weight: 400;
	}
</style>
