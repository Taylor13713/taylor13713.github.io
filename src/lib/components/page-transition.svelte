<script>
	import { fade } from "svelte/transition";
	import { navigating } from "$app/stores";
</script>

{#key $navigating}
	<div in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
		<slot />
	</div>
{/key}
