<script lang="ts">
	import GuessForm from '../../lib/components/GuessForm.svelte';
	import type { Beer, Brewery, Guess } from '../../types';
	import Guesses from '../../lib/components/Guesses.svelte';
	import { Confetti } from 'svelte-confetti';

	let guesses = $state<Guess[]>([]);
	const { data } = $props();
	let beers = $derived(data.beers)!;
	let breweries = $derived(data.breweries)!;
	let beerGuessed = $state(false);

	const targetBeer = $derived(beers[Math.floor(Math.random() * beers.length)]);
	const breweryMap = $derived(new Map(breweries.map((b) => [b.name, b])));

	const getCountry = (beer: Beer) => breweryMap.get(beer.brewery)?.country ?? 'Unknown';

	const withinAbvRange = (beer: Beer, tolerance = 0.5) =>
		Math.abs(beer.abv - targetBeer.abv) <= tolerance;

	const isSameIPAGroup = (a: Beer, b: Beer) =>
		a.type.toLowerCase().includes('ipa') && b.type.toLowerCase().includes('ipa');

	function evaluateGuess(beer: Beer) {
		return {
			name: beer.name === targetBeer.name ? 'correct' : 'incorrect',

			brewery:
				beer.brewery === targetBeer.brewery
					? 'correct'
					: getCountry(beer) === getCountry(targetBeer)
						? 'partial'
						: 'incorrect',

			type:
				beer.type === targetBeer.type
					? 'correct'
					: isSameIPAGroup(beer, targetBeer)
						? 'partial'
						: 'incorrect',

			abv: beer.abv === targetBeer.abv ? 'correct' : withinAbvRange(beer) ? 'partial' : 'incorrect'
		} as const;
	}

	function makeGuess(name: string) {
		const beer = beers.find((b) => b.name.toLowerCase() === name.trim().toLowerCase());

		if (!beer) return;

		const correct = evaluateGuess(beer);

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
		duration={5000}
		amount={200}
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
