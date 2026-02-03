<script lang="ts">
	const goBack = () => {
		window.history.back();
	};
</script>

<div class="bg-gray-700 p-4 rounded-lg shadow-md">
	<button onclick={goBack} class="rounded-md p-1 bg-amber-500 border-1">Go back</button>
	<h1>Emoji</h1>
	<p>Guess the beer type based on the emojis :{')'}</p>
	<p>Each wrong guess will give another clue</p>
	<p>Test yourself below, can you guess these beers?</p>
	<p>🍺 + 🌞 = ?</p>
	<p>🍺 + 🍊 = ?</p>
	<p>🍺 + 🌲 = ?</p>
</div>
