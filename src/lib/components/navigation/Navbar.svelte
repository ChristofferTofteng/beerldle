<script lang="ts">
	import { resolve } from '$app/paths';
	import Navitem from './Navitem.svelte';
	import logo from '$lib/assets/logo.png';
</script>

<div class="w-full h-18 sticky top-0 left-0 flex items-center bg-primary shadow-md px-10 z-50">
	<div class="w-1/5 h-full flex">
		<a href={resolve('/')} class="flex h-full items-center text-3xl font-bold gap-4">
			<img src={logo} alt="Beerldle Logo" class="w-15 h-full" />
			<span>Untappd United</span>
		</a>
	</div>
	<div class="flex items-center justify-around w-6/8 h-full">
		<Navitem name="Games" url="/games" />
		<Navitem name="Stats" url="/stats" />
		<Navitem name="About" url="/about" />
	</div>
</div>
