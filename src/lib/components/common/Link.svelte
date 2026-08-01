<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let { name, url, ...others } = $props();

	function onclick() {
		goto(resolve(url));
	}
</script>

<button
	{onclick}
	class="hover:cursor-pointer rounded-md bg-primary hover:bg-primary-hover px-6 py-3 shadow-md"
	{...others}>{name}</button
>
