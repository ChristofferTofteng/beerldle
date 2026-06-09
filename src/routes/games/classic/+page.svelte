<script lang="ts">
	import { GuessForm, Guesses } from '../../../lib/components/game';
	import type { Beer, Guess } from '../../../types';
	import { Confetti } from 'svelte-confetti';
	import { goto } from '$app/navigation';
	import { areTypesInSameGroup } from '$lib/utils/beerTypes';
	import { resolve } from '$app/paths';
	import { Tooltip } from '$lib/components/common';

	let guesses = $state<Guess[]>([]);
	const { data } = $props();
	let originalBeers = $derived(data.beers ?? []);
	let beers = $derived([...originalBeers]);
	let breweries = $derived(data.breweries ?? []);
	let beerGuessed = $state(false);

	let targetBeer = $derived(beers[Math.floor(Math.random() * beers.length)]);

	const breweryMap = $derived(new Map(breweries.map((b) => [b.name, b])));

	const getCountry = (beer: Beer) => breweryMap.get(beer.brewery)?.country ?? 'Unknown';

	const withinAbvRange = (beer: Beer, tolerance = 0.5) =>
		Math.abs(beer.abv - targetBeer.abv) <= tolerance;

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
					: areTypesInSameGroup(beer.type, targetBeer.type)
						? 'partial'
						: 'incorrect',

			abv: beer.abv === targetBeer.abv ? 'correct' : withinAbvRange(beer) ? 'partial' : 'incorrect'
		} as const;
	}

	function makeGuess(name: string) {
		const beer = beers.find((b) => b.name.toLowerCase() === name.trim().toLowerCase());

		if (!beer) return;

		const correct = evaluateGuess(beer);

		guesses.unshift({ id: crypto.randomUUID(), guess: beer, correct });
		if (correct.name === 'correct') {
			beerGuessed = true;
		}
	}

	const onclick = () => {
		goto(resolve('/games'));
	};

	function resetGame() {
		guesses = [];
		beerGuessed = false;
		beers = [...originalBeers];
		// targetBeer will auto-update
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
		fallDistance="90vh"
	/>
{/if}
<div class="p-4 bg-amber-500 rounded-lg shadow-md w-full max-w-2xl mx-auto mb-6 text-center">
	<div class=" flex items-center justify-between mb-4">
		<button {onclick} class=" bg-amber-800 text-white p-2 rounded hover:bg-amber-700">
			Go back
		</button>
		<h1>Classic</h1>
		<Tooltip
			title="In this mode, you will be guessing beers based on their name, brewery, type, and ABV. The colors indicate how close your guess is: green means correct, orange means partially correct (same country for brewery or similar type), and red means incorrect. Start by guessing any beer you like and see how close you are!"
		>
			<span class="icon-[icon-park-solid--help]" style="width: 2em; height: 2em; color: #973c00;"
			></span>
		</Tooltip>
	</div>
	<p class="text-xl font-semibold">Guess the beer!</p>
	<p class="text-lg font-medium">Start by guessing your favorite beer and go from there :)</p>
</div>

{#if beerGuessed}
	<div class="text-center text-2xl font-bold mb-4">Congratulations! You guessed the beer!</div>
{/if}

<GuessForm {makeGuess} {beers} />
<div class="grid gap-2 mt-4 w-2/5 mx-auto h-2/5 content-start">
	<Guesses {guesses} />
</div>
<button class="bg-amber-800 rounded-md p-3 mt-4 hover:bg-amber-700" onclick={resetGame}
	>Reset Game</button
>
