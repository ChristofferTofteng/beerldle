<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import { LoadingBeer } from '$lib/components/common/';
	import { beforeNavigate, afterNavigate, goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { shouldShowLoader } from '$lib/utils/loaderRoutes';
	import type { LoaderRoute } from '$lib/utils/loaderRoutes';
	import Footer from '$lib/components/footer/Footer.svelte';

	let { children } = $props();
	let loading = $state(false);
	const LOADER_DURATION = 8000;

	beforeNavigate((navigation) => {
		if (loading || !navigation.to?.url) return;
		if (!shouldShowLoader(navigation.to.url.pathname)) return;

		navigation.cancel();
		loading = true;

		setTimeout(() => {
			goto(resolve(navigation.to!.url!.pathname as LoaderRoute));
		}, LOADER_DURATION);
	});

	afterNavigate(() => {
		loading = false;
	});
</script>

<div class="min-h-screen w-full bg-bg flex flex-col">
	<Navbar />
	{#if loading}
		<LoadingBeer />
	{:else}
		<main class="flex-1">
			{@render children()}
		</main>
	{/if}

	<Footer />
</div>

<style>
	:global(html, body) {
		min-height: 100%;
		margin: 0;
		padding: 0;
		background-color: #09090b;
	}

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
