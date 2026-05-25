<script lang="ts">
	import '../app.css';
	import backgroundImage from '$lib/assets/beerline.webp';
	import Navbar from '$lib/components/navigation/Navbar.svelte';

	let { children } = $props();
</script>

<div
	class="h-screen bg-cover bg-center flex flex-col items-center justify-center"
	style="background-image: url({backgroundImage})"
>
	<Navbar />
	{@render children()}
</div>

<style>
	:global(body) {
		font-family: 'Courier New', Courier, monospace;
		color: white;
		font-size: 16px;
	}
	:global(h1) {
		font-size: 2rem;
		font-weight: bold;
	}
	:global(button:hover) {
		cursor: pointer;
	}
	:global(button:active) {
		transform: scale(0.95); /* Slightly shrink the button when pressed */
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); /* Add an inset shadow */
	}
</style>
