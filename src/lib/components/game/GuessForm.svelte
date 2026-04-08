<script lang="ts">
	import type { Beer } from '../../types';

	let newGuess = $state('');

	let {
		makeGuess,
		beers
	}: {
		makeGuess: (newGuess: string) => void;
		beers: Beer[];
	} = $props();

	function removeBeer(beerId: number) {
		beers = beers.filter((beer) => beer.id !== beerId);
	}

	function formSubmitted(event: Event) {
		event.preventDefault();
		makeGuess(newGuess);
		const foundBeer = beers.find(
			(beer) => beer.name.toLowerCase() === newGuess.trim().toLowerCase()
		);
		if (foundBeer) {
			removeBeer(foundBeer.id);
		}
		newGuess = '';
	}
</script>

<form
	onsubmit={formSubmitted}
	class="bg-amber-500 p-4 flex w-2/5 gap-8 rounded-lg shadow-md items-center justify-self-center"
>
	<input
		type="text"
		bind:value={newGuess}
		name="newGuess"
		placeholder="Guess..."
		class="border rounded text-black p-2 w-full"
		list="beers"
		autocomplete="off"
	/>
	<datalist id="beers">
		{#each beers as beer (beer.id)}
			<option value={beer.name}>{beer.name}</option>
		{/each}
	</datalist>
	<button class="bg-amber-800 text-white p-2 rounded hover:bg-amber-700">Guess</button>
</form>
