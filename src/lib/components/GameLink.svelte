<script lang="ts">
	import { goto } from '$app/navigation';

	let { name, url } = $props();

	function onclick() {
		goto(url);
	}
</script>

<div class="rounded-md bg-gray-700 p-2 shadow-md m-2">
	<button {onclick} class="text-blue-500 hover:underline">{name}</button>
</div>
