<script lang="ts">
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';

	let { name, url } = $props();

	function onclick() {
		goto(resolve(url));
	}
</script>

<button {onclick} class="text-2xl font-bold hover:bg-amber-600 h-full px-15">
	{name}
</button>
