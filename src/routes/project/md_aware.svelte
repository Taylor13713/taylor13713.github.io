<script lang="ts">
	import Column from "$lib/atoms/column.svelte";
	import LinkTo from "$lib/atoms/linkTo.svelte";
	import Row from "$lib/atoms/row.svelte";
	import SizedBox from "$lib/atoms/sizedBox.svelte";
	import UnderlinedTitle from "$lib/atoms/underlinedTitle.svelte";
	import ImageCarousel from "$lib/components/image-carousel.svelte";

	const photos: string[] = [
		"md_aware_4.svg",
		"md_aware_home.svg",
		"md_aware_1.svg",
		"md_aware_5.svg",
		"md_aware_2.svg",
		"md_aware_3.svg"
	];
</script>

<ImageCarousel {photos} path="md_aware" />
<Column alignItems="center">
	<SizedBox height={30} />
	<div class="paragraph-width-wrapper">
		<UnderlinedTitle header="Background Info" />
		<SizedBox height={15} />
		<p>
			MDAware is a to-do list app tailored for medical staff. It aims to improve the communication
			between physicians and nurses at hospitals or any other patient-care facility.
		</p>
		<SizedBox height={10} />
		<p>
			The concept of MDAware was first pitched to my partner by Dr. David Preiss, a doctor at
			Bringham & Women's Hospital, in a Computer Science Capstone class at Stonehill College in the
			spring of 2020. My partner saw great potential in the idea and went on to design and develop
			the first version of MDAware with guidance from Dr. Preiss, which went live in January of
			2021, and was adopted by several departments in Bringham & Women's Hospital.
		</p>
		<SizedBox height={10} />
		<p>
			I became involved in MDAware in March of 2022 when my partner brought up the idea of
			re-designing the UI/UX of the app. He wanted to bring MDAware to more hospitals in the Boston
			area after over a year of field testing and consistently positive user feedback. But the app
			needed to be more aesthetically pleasing and intuitive to use.
		</p>
		<SizedBox height={20} />

		<UnderlinedTitle header="Design Process" />
		<SizedBox height={15} />
		<p>
			The re-design of MDAware focused on giving the app a more personal touch, a softer, more
			cohesive color scheme, a better admin interface, and a landing page to give the users a better
			experience overall.
		</p>
		<SizedBox height={10} />
		<p>
			First, my partner and I decided to go with a blue color scheme ranging from a soft, light blue
			to a deep blue. We chose blue because it is calming, and is distinct from the three colors
			used to indicate the status of a task, which are green, yellow and red.
		</p>
		<SizedBox height={10} />
		<p>
			Then we created the app landing screen using illustrations from Undraw and other tools in
			Figma. We integrated the to-do list aspect of the app, the fact that the primary customer base
			consists of medical professionals, as well as the color scheme into the design.
		</p>
		<SizedBox height={10} />
		<p>
			Using what we learned in our visual communication design classes, we re-designed the general
			settings and the admin panel so they have a clearer visual hierarchy. We re-organized the way
			the information are presented and put them into separate menus for the admin panel. This way,
			the user can go into the perspective menu to adjust the settings on, for instance, a location
			without having to see any irrelevant information.
		</p>
		<SizedBox height={10} />
		<p>
			Throughout the app, we also utilized similar illustrations to the ones on the landing screen
			to make the designs more cohesive and lively.
		</p>
		<SizedBox height={20} />

		<UnderlinedTitle header="Statistics" />
		<SizedBox height={15} />
		<p>
			MDAware is still actively used at Bringham & Women's Hospital today. The tasks are completed
			on average aorund 1000 per weeek, and there have been around 70,000 tasks completed in total.
			It is also used at Boston Children's Hospital since April of 2022.
		</p>
		<SizedBox height={20} />

		<UnderlinedTitle header="Additional Links" />
		<SizedBox height={15} />
		<p>
			The screenshots on the app stores are of the old version of MDAware before the re-design. The
			screenshots included on this site are from the newest version of the app.
		</p>
		<SizedBox height={15} />
		<Row>
			<LinkTo
				link="https://apps.apple.com/us/app/mdaware/id1536033983?platform=iphone"
				label="View on App Store"
				size="small"
			/>
			<SizedBox width={20} />
			<LinkTo
				link="https://play.google.com/store/apps/details?id=com.aes.mdaware&hl=en_US&gl=US"
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
