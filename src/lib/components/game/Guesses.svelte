<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Guess, Beer } from '../../../types';

	let {
		guesses
	}: {
		guesses: Guess[];
	} = $props();
	const categories = ['name', 'brewery', 'type', 'abv'] as const;

	function valueFor(beer: Beer, key: keyof Beer) {
		const v = beer[key];
		return v == null ? '' : String(v);
	}

	// Track how many categories are visible for each guess
	let visibleCounts = $state<Record<string, number>>({});

	$effect(() => {
		for (const guess of guesses) {
			if (!(guess.id in visibleCounts)) {
				visibleCounts[guess.id] = 0;
				// Start revealing categories one by one
				let count = 0;
				const interval = setInterval(() => {
					count++;
					visibleCounts[guess.id] = count;
					if (count >= categories.length) {
						clearInterval(interval);
					}
				}, 500); // Adjust delay between reveals
			}
		}
	});
</script>

<!-- header row -->
<div class="grid gap-2 mt-4 w-2/5 mx-auto">
	<div class="grid grid-cols-4 text-center font-semibold gap-4 w-full">
		{#each categories as category (category)}
			<h3 class="text-lg font-bold">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
		{/each}
	</div>
	<!-- guesses -->
	<div class="guesses w-full grid gap-2">
		{#each guesses as guess (guess.id)}
			<div class="grid grid-cols-4 text-center gap-2 w-full">
				{#each categories.slice(0, visibleCounts[guess.id] || 0) as category (category)}
					<p
						class={`truncate overflow-hidden whitespace-nowrap ${guess.correct[category]}`}
						in:fade={{ duration: 600 }}
						title={valueFor(guess.guess, category)}
					>
						{valueFor(guess.guess, category)}
					</p>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	p {
		padding: 1rem;
		margin: 0;
		border-radius: 0.75rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	p.incorrect {
		background-color: #e74c3c;
	}
	p.correct {
		background-color: #17b06b;
	}
	p.partial {
		background-color: #f19a0f;
	}
	.guesses {
		height: auto;
		max-height: 35vh;
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: var(--color-amber-500) transparent;
	}
</style>
