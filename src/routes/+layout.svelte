<script lang="ts">
	import '../app.css';
	import backgroundImage from '$lib/assets/background2.webp';

	let { children } = $props();
</script>

<div
	class="h-screen bg-cover bg-center flex flex-col items-center justify-center"
	style="background-image: url({backgroundImage})"
>
	{@render children()}
</div>

<style>
	:global(body) {
		font-family: 'Courier New', Courier, monospace;
		color: white;
		font-size: 16px;
	}
	:global(button:active) {
		transform: scale(0.95); /* Slightly shrink the button when pressed */
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); /* Add an inset shadow */
	}
</style>
