<script>
	import Column from "$lib/components/column.svelte";
	import Row from "$lib/components/row.svelte";
	import SizedBox from "$lib/components/sizedBox.svelte";
</script>

<Column alignItems="center" justifyContent="center" height="90vh">
	<Row alignItems="baseline" autoSwitch
		><h3>Hi, my name is</h3>
		<SizedBox width={15} height={15} />
		<h1>Taylor</h1></Row
	>
	<SizedBox height={10} />
	<h3>I strive to make a difference in this world through</h3>
	<SizedBox height={10} />
	<h1>Software Development</h1>
	<SizedBox height={10} />
	<Row alignItems="baseline" autoSwitch
		><h3>and human-centered</h3>
		<SizedBox width={15} height={15} />
		<h1>UI/UX Design</h1></Row
	>
</Column>

<style>
	/* .home-container {
		width: 100vw;
		height: 100%;
		min-height: 100%;
		box-sizing: border-box;
		overflow-x: hidden;
		overflow-y: hidden;
	} */
</style>
