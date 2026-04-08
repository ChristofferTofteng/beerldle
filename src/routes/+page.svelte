<script lang="ts">
	import Infobox from './Infobox.svelte';
	import Link from '../lib/components/common/Link.svelte';
</script>

<div class="flex flex-col gap-3 w-1/4">
	<Infobox />
	<Link name="Classic 🍺" url="/classic" />
	<Link name="Emoji 🥴" url="/emoji" />
</div>
