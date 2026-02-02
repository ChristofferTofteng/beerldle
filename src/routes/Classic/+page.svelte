<script lang="ts">
	import GuessForm from '../../lib/components/GuessForm.svelte';
	import type { Guess } from '../../types';
	import Guesses from '../../lib/components/Guesses.svelte';

	let guesses = $state<Guess[]>([]);
	const targetBeer = 'Heineken';

	function makeGuess(beer: string) {
		const isCorrect = beer.toLowerCase() === targetBeer.toLowerCase();
		guesses.push({ guess: beer, correct: isCorrect });
		if (isCorrect) {
			alert('Congratulations! You guessed the correct beer: ' + targetBeer);
		}
	}

	const onclick = () => {
		window.history.back();
	};
</script>

<div class="p-4">
	<button {onclick}>Go back</button>
	<h1>Classic</h1>
	<p>Guess the beer!</p>
	<p>Start by guessing your favorite beer and go from there :{')'}</p>
</div>

<GuessForm {makeGuess} />
<Guesses {guesses} />
