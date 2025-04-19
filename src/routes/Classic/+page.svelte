<script lang="ts">
	import GuessForm from '../../lib/components/GuessForm.svelte';
	import type { Guess } from '../../types';
	import Guesses from '../../lib/components/Guesses.svelte';

	let guesses = $state<Guess[]>([]);

	function makeGuess(beer: string, correct: boolean) {
		guesses.push({ guess: beer, correct: false });
	}

	const onclick = () => {
		window.history.back();
	};
</script>

<div class="p-4 rounded-lg shadow-md">
	<button {onclick}>Go back</button>
	<h1>Classic</h1>
	<p>Guess the beer!</p>
	<p>Start by guessing your favorite beer and go from there :{')'}</p>
</div>

<GuessForm {makeGuess} />
<Guesses {guesses} />
