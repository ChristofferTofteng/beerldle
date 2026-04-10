<script lang="ts">
	export let title = '';
	let isHovered = false;
	let x: number;
	let y: number;

	function onmouseover(event: MouseEvent) {
		isHovered = true;
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function onmousemove(event: MouseEvent) {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function onfocus() {
		isHovered = true;
	}
	function onmouseleave() {
		isHovered = false;
	}
	function onblur() {
		isHovered = false;
	}
</script>

<div {onmouseover} {onmousemove} {onmouseleave} {onblur} {onfocus} role="tooltip">
	<slot />
</div>

{#if isHovered}
	<div style="top: {y}px; left: {x}px;" class="tooltip">{title}</div>
{/if}

<style>
	.tooltip {
		border: 1px solid #973c00;
		box-shadow: 1px 1px 1px #000000;
		background: #c0700f;
		border-radius: 4px;
		padding: 4px;
		position: absolute;
	}
</style>
