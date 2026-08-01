<script lang="ts">
	const goBack = () => {
		window.history.back();
	};
</script>

<div class="bg-surface p-4 rounded-lg shadow-md">
	<button onclick={goBack} class="rounded-md p-1 bg-primary border">Go back</button>
	<h1>Emoji</h1>
	<p>Guess the beer type based on the emojis :)</p>
	<p>Each wrong guess will give another clue</p>
	<p>Test yourself below, can you guess these beers?</p>
	<p>🍺 + 🌞 = ?</p>
	<p>🍺 + 🍊 = ?</p>
	<p>🍺 + 🌲 = ?</p>
</div>
