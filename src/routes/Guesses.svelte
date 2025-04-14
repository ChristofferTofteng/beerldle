<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="bg-gray-100 p-4 rounded-lg shadow-md" in:fade={{ duration: 300 }}>
	<h1 class="text-xl font-bold mb-2">Guesses</h1>
	<p>Guesses content goes here.</p>
	<ul class="list-disc pl-5 mt-2">
		<li>Guess 1</li>
		<li>Guess 2</li>
		<li>Guess 3</li>
		<li>Guess 4</li>
		<li>Guess 5</li>
		<li>Guess 6</li>
		<li>Guess 7</li>
		<li>Guess 8</li>
		<li>Guess 9</li>
		<li>Guess 10</li>
		<li>Guess 11</li>
	</ul>
</div>
