<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
	:global(body) {
		background-color: #1e1e2f;
		color: #ffffff;
		font-family: 'Courier New', Courier, monospace;
		font-size: 16px;
		padding: 64px;
	}
	:global(button:active) {
		transform: scale(0.98); /* Slightly shrink the button when pressed */
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); /* Add an inset shadow */
	}
</style>
