<script lang="ts">
	import { resolve } from '$app/paths';

	let { name, url, children = undefined } = $props();
</script>

<div class="group relative h-full">
	<a
		href={resolve(url)}
		class="flex h-full items-center px-15 text-2xl font-bold hover:bg-primary-hover"
	>
		{name}
	</a>

	{#if children}
		<div
			class="absolute left-0 top-full hidden min-w-max bg-primary shadow-md group-hover:block group-focus-within:block"
		>
			{@render children()}
		</div>
	{/if}
</div>
