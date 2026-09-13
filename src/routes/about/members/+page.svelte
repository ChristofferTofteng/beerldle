<script lang="ts">
	import MemberCard from '$lib/components/common/MemberCard.svelte';

	const { data } = $props();
</script>

<div>
	We are currently a small club of {data.members.length} members. The current members include:
	{#each data.members as member (member.id)}
		<MemberCard {member} />
	{/each}
</div>
