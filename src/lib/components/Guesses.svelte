<script lang="ts">
	import { fade } from 'svelte/transition';
	import { tick } from 'svelte';
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

	function staggeredFade(node: Element, options: { duration: number; delay: number }) {
		tick();
		return fade(node, options);
	}
</script>

<!-- header row -->
<div class="grid gap-2 mt-4">
	<div
		class="text-center font-semibold"
		style="display: grid; grid-template-columns: repeat({categories.length}, minmax(0, 1fr)); gap: 0.5rem;"
	>
		{#each categories as category}
			<h3 class="text-lg font-bold">{category}</h3>
		{/each}
	</div>
	<!-- guesses -->
	<div class="guesses">
		{#each guesses as guess}
			<div
				class="text-center"
				style="display: grid; grid-template-columns: repeat({categories.length}, minmax(0, 1fr)); gap: 0.5rem;"
			>
				{#each categories as category, index}
					<p
						class={guess.correct[category as keyof typeof guess.correct]}
						in:staggeredFade={{ duration: 400, delay: index * 100 }}
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
		margin: 0.5rem 0.25rem;
		border-radius: 8px;
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
		max-height: 60vh;
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: var(--color-amber-500) transparent;
	}
</style>
