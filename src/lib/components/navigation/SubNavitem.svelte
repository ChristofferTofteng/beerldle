<script lang="ts">
	import { resolve } from '$app/paths';

	let { name, url } = $props();
</script>

<a href={resolve(url)} class="block px-6 py-3 text-lg hover:bg-primary-hover">
	{name}
</a>
