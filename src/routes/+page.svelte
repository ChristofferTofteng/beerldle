<script lang="ts">
	import Infobox from './Infobox.svelte';
	import GameLink from '../lib/components/GameLink.svelte';
</script>

<div class="flex flex-col gap-3 w-1/4">
	<Infobox />
	<GameLink name="Classic 🍺" url="/classic" />
	<GameLink name="Emoji 🥴" url="/emoji" />
</div>
