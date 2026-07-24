<script lang="ts">
	import backgroundImage from '$lib/assets/beerline.webp';
</script>

<section
	class="w-screen min-h-[70vh] relative bg-cover bg-center text-text flex items-center"
	style={`background-image: url(${backgroundImage})`}
>
	<!-- dark overlay + subtle blur/desat -->
	<div class="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true"></div>

	<div class="container mx-auto px-6 py-24 text-center relative z-10">
		<h1 class="text-6xl font-extrabold">Welcome to Beerldle</h1>
		<p class="mt-4 text-xl text-text-secondary">A small subtitle about the project</p>
		<div class="mt-8 flex gap-4 justify-center">
			<button class="bg-primary hover:bg-primary-hover text-black px-6 py-3 rounded">Play</button>
			<button class="bg-surface border border-card text-text px-6 py-3 rounded">Learn More</button>
		</div>
	</div>
</section>
