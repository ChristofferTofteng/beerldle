<script lang="ts">
	import '../app.css';
	import backgroundImage from '$lib/assets/beerline.webp';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import { LoadingBeer } from '$lib/components/common/';
	import { beforeNavigate, afterNavigate, goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { shouldShowLoader } from '$lib/utils/loaderRoutes';
	import type { LoaderRoute } from '$lib/utils/loaderRoutes';

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

<div
	class="h-screen bg-cover bg-center flex flex-col items-center justify-center"
	style="background-image: url({backgroundImage})"
>
	<Navbar />
	{#if loading}
		<LoadingBeer />
	{:else}
		{@render children()}
	{/if}
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
