<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Member } from '$lib/types';
	let { member }: { member: Member } = $props();
</script>

<a
	href={resolve(`/about/members/${member.id}`)}
	class="flex items-center gap-4 p-4 border rounded-lg hover:bg-primary-hover"
>
	<div>
		<h3>{member.name}</h3>
		<p>
			Board Member
			{#if member.board}
				True
			{:else}
				False
			{/if}
		</p>
		<p>
			Chairman
			{#if member.chairman}
				True
			{:else}
				False
			{/if}
		</p>
		<p>
			Founder
			{#if member.founder}
				True
			{:else}
				False
			{/if}
		</p>
	</div>
</a>
