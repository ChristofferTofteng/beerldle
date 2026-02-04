<script lang="ts">
	import GuessForm from '../../lib/components/GuessForm.svelte';
	import type { Beer, Guess } from '../../types';
	import Guesses from '../../lib/components/Guesses.svelte';
	import { Confetti } from 'svelte-confetti';

	let guesses = $state<Guess[]>([]);
	let props = $props();
	let beers = props.data.beers;
	let beerGuessed = $state(false);
	const randomIndex = Math.floor(Math.random() * beers.length);
	const targetBeer = beers[randomIndex];

	function makeGuess(name: string) {
		const trimmedName = name.trim();
		if (trimmedName === '') {
			return;
		}
		const beer = beers.find((beer: Beer) => beer.name.toLowerCase() === trimmedName.toLowerCase());
		const correct = {
			name: beer.name.toLowerCase() === targetBeer.name.toLowerCase() ? 'correct' : 'incorrect',
			brewery: beer.brewery === targetBeer.brewery ? 'correct' : 'incorrect',
			type:
				beer.type === targetBeer.type
					? 'correct'
					: beer.type.toLowerCase().includes('ipa') && targetBeer.type.toLowerCase().includes('ipa')
						? 'partial'
						: 'incorrect',
			abv: beer.abv === targetBeer.abv ? 'correct' : 'incorrect'
		} as const;
		guesses.unshift({ guess: beer, correct });
		if (correct.name === 'correct') {
			beerGuessed = true;
		}
	}

	const onclick = () => {
		window.history.back();
	};

	function resetGame() {
		window.location.reload();
	}
</script>

{#if beerGuessed}
	<Confetti
		x={[-5, 5]}
		y={[0, 0.1]}
		delay={[500, 2000]}
		infinite
		duration="5000"
		amount="200"
		fallDistance="95vh"
	/>
{/if}
<div class="p-4">
	<button {onclick}>Go back</button>
	<h1>Classic</h1>
	<p>Guess the beer!</p>
	<p>Start by guessing your favorite beer and go from there :{')'}</p>
</div>

{#if beerGuessed}
	<div class="text-center text-2xl font-bold mb-4">Congratulations! You guessed the beer!</div>
{/if}

<GuessForm {makeGuess} {beers} />
<Guesses {guesses} />

<button class="bg-amber-500 rounded-md p-3 mt-4" onclick={resetGame}>Reset Game</button>
