<script>
	let { onclick, children } = $props();
</script>

<button {onclick} class="bg-amber-800 text-white p-2 rounded hover:bg-amber-700">
	{@render children()}
</button>
