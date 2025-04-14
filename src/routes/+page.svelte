<script lang="ts">
	import SearchBar from './SearchBar.svelte';
	import Infobox from './Infobox.svelte';
	import Guesses from './Guesses.svelte';
	import GameLink from './GameLink.svelte';
</script>

<GameLink name="Classic" url="/classic" />
<GameLink name="Emoji" url="/Emoji" />
<Infobox />
<SearchBar />
<Guesses />
