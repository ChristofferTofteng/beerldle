<script lang="ts">
	let newGuess = $state('');

	let {
		makeGuess
	}: {
		makeGuess: (newGuess: string) => void;
	} = $props();

	function formSubmitted(event: Event) {
		event.preventDefault();
		console.log('Form submitted:', newGuess);
		makeGuess(newGuess);
		newGuess = '';
	}
</script>

<form
	onsubmit={formSubmitted}
	class="bg-gray-700 p-4 flex w-2/5 gap-8 rounded-lg shadow-md items-center justify-self-center"
>
	<input
		type="text"
		bind:value={newGuess}
		name="newGuess"
		placeholder="Guess..."
		class="border rounded p-2 w-full"
	/>
	<button class="bg-blue-500 text-white p-2 rounded">Guess</button>
</form>
