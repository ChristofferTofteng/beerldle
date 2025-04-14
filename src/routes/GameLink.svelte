<script lang="ts">
	let { name, url } = $props();
</script>

<div class="rounded-md bg-gray-100 p-4 shadow-md">
	<a href={url} class="text-blue-500 hover:underline">{name}</a>
</div>
