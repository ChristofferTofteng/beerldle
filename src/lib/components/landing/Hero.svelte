<script lang="ts">
	import backgroundImage from '$lib/assets/beerline.webp';
	import Link from '$lib/components/common/Link.svelte';
</script>

<section
	class="w-screen min-h-[70vh] relative bg-cover bg-center text-text flex items-center"
	style={`background-image: url(${backgroundImage})`}
>
	<!-- dark overlay + subtle blur/desat -->
	<div class="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true"></div>

	<div class="container mx-auto px-6 py-24 text-center relative z-10">
		<h1 class="text-6xl font-extrabold">Welcome to Untappd United</h1>
		<p class="mt-4 text-xl text-text-secondary">
			This is the website for the Untappd United Beer Club
		</p>
		<div class="mt-8 flex gap-4 justify-center">
			<Link name="Play" url="/games" />
			<Link name="Learn More" url="/about" />
		</div>
	</div>
</section>
