<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Guess, Beer } from '../../types';

	let {
		guesses
	}: {
		guesses: Guess[];
	} = $props();
	const categories: (keyof Beer)[] = ['name', 'brewery', 'type', 'abv'];

	function valueFor(beer: Beer, key: keyof Beer) {
		const v = beer[key];
		return v == null ? '' : String(v);
	}
</script>

<!-- header row -->
<div class="grid gap-4 mt-4">
	<div
		class="headers"
		style="display: grid; grid-template-columns: repeat({categories.length}, minmax(0, 1fr)); gap: 0.5rem;"
	>
		{#each categories as category}
			<h3 class="text-lg font-bold">{category}</h3>
		{/each}
	</div>
	<!-- guesses -->
	<div class="guesses">
		{#each guesses as guess}
			<div class="flex gap-1.5">
				{#each categories as category}
					<article
						class={guess.correct[category as keyof typeof guess.correct]}
						in:fade={{ duration: 400 }}
					>
						{valueFor(guess.guess, category)}
					</article>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	article {
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	article.incorrect {
		background-color: #e74c3c !important;
	}
	article.correct {
		background-color: #17b06b !important;
	}
	article.partial {
		background-color: #f19a0f !important;
	}
	.guesses {
		height: auto;
		max-height: 60vh;
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: var(--color-amber-500) transparent;
	}
</style>
