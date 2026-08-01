<script lang="ts">
	import Hero from '$lib/components/landing/Hero.svelte';
	import ClubStatistics from '$lib/components/landing/ClubStatistics.svelte';
	import FeaturedSections from '$lib/components/landing/FeaturedSections.svelte';
	import BeerOfMonth from '$lib/components/landing/BeerOfMonth.svelte';
	import LatestActivity from '$lib/components/landing/LatestActivity.svelte';
</script>

<main class="relative z-10 bg-bg text-text min-h-screen">
	<Hero />
	<ClubStatistics />
	<FeaturedSections />
	<BeerOfMonth />
	<LatestActivity />
</main>
