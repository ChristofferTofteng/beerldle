<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Guess } from '../../types';

	let {
		guesses
	}: {
		guesses: Guess[];
	} = $props();
</script>

<div class="grid grid-cols-1 gap-4 p-4">
	<h3>Guess:</h3>
</div>

{#each guesses as guess}
	<article class={guess.correct ? 'correct' : 'incorrect'} in:fade={{ duration: 400 }}>
		{guess.guess}
	</article>
{/each}

<style>
	article {
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	article.incorrect {
		background-color: #e74c3c;
	}
	article.correct {
		background-color: #17b06b;
	}
</style>
