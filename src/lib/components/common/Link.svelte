<script lang="ts">
	import { goto } from '$app/navigation';

	let { name, url } = $props();

	function onclick() {
		goto(url);
	}
</script>

<button {onclick} class="hover:cursor-pointer rounded-md bg-amber-500 p-2 shadow-md">{name}</button>
