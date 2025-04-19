<script lang="ts">
	let { name, url } = $props();
</script>

<div class="rounded-md bg-gray-700 p-2 shadow-md m-2">
	<a href={url} class="text-blue-500 hover:underline">{name}</a>
</div>
