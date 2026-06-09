<script lang="ts">
	import Link from '../../lib/components/common/Link.svelte';
</script>

<div class="flex flex-col gap-3 w-1/4">
	<div class="p-4 rounded-lg shadow-md" style="background-color: #be750a;">
		<h2 class="text-2xl font-bold mb-3">Welcome to Beerldle 🍻</h2>
		<p>This is a collection of small games where you can guess beers drunk by me and my friends!</p>
		<p>Start with the classic game where you will have to guess a beer</p>
	</div>

	<Link name="Classic 🍺" url="/games/classic" />
	<Link name="Emoji 🥴" url="/games/emoji" class="invisible" />
</div>
