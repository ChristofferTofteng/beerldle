<script lang="ts">
	const { data } = $props();
</script>

<div>
	Welcome to the member page for {data.member.name}! or as we like to call them, {data.member
		.nickname}! The current position in the club that this member holds includes:
	{#if data.member.board}
		Board Member
	{/if}
	{#if data.member.chairman}
		Chairman
	{/if}
	{#if data.member.founder}
		Founder
	{/if}
</div>
