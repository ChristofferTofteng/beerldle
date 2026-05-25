<script lang="ts">
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';

	const { name, url } = $props();

	function onclick() {
		goto(resolve(url));
	}
</script>

<button {onclick}>
	{name}
</button>
