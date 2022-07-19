<script>
	import Column from "$lib/atoms/column.svelte";
	import Row from "$lib/atoms/row.svelte";
	import SizedBox from "$lib/atoms/sizedBox.svelte";
	import { colors } from "$lib/theme";
	import Typewriter from "svelte-typewriter";
</script>

<Column alignItems="center" justifyContent="center" height="70vh">
	<Row alignItems="baseline" autoSwitch
		><h3>Hi, my name is</h3>
		<SizedBox width={15} height={15} />
		<Typewriter interval={[150, 100, 110, 90]} delay={500} --cursor-color={colors.deepRed}>
			<h1>Taylor</h1>
		</Typewriter>
	</Row>
	<SizedBox height={10} />
	<h3>I strive to make a difference in this world through</h3>
	<SizedBox height={10} />
	<Typewriter interval={[150, 100, 110, 90]} delay={2000} --cursor-color={colors.deepRed}>
		<h1>Software Development</h1>
	</Typewriter>
	<SizedBox height={10} />
	<Row alignItems="baseline" autoSwitch
		><h3>and human-centered</h3>
		<SizedBox width={15} height={15} />
		<Typewriter interval={[300, 200, 130, 90]} delay={5000} --cursor-color={colors.deepRed}>
			<h1>UI/UX Design</h1>
		</Typewriter></Row
	>
</Column>
