<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let width: number;
	let height: number;

	let fillLevel: number = 0;

	type Bubble = {
		x: number;
		y: number;
		r: number;
		speed: number;
	};

	let bubbles: Bubble[] = [];

	function resize(): void {
		width = canvas.width = window.innerWidth;
		height = canvas.height = window.innerHeight;
	}

	function initBubbles(count: number = 500): void {
		bubbles = [];
		for (let i = 0; i < count; i++) {
			bubbles.push({
				x: Math.random() * width,
				y: height - Math.random() * fillLevel,
				r: Math.random() * 6 + 2,
				speed: Math.random() * 6 + 0.95
			});
		}
	}

	function drawBeer(): void {
		const top = height - fillLevel;

		const gradient = ctx.createLinearGradient(0, top, 0, height);
		gradient.addColorStop(0, '#f7c948');
		gradient.addColorStop(0.5, '#d48806');
		gradient.addColorStop(1, '#8d5524');

		ctx.fillStyle = gradient;
		ctx.fillRect(0, top, width, fillLevel);
	}

	function drawFoam(): void {
		const y = height - fillLevel;

		ctx.fillStyle = 'rgba(255,255,255,0.9)';

		for (let i = 0; i < width; i += 20) {
			const offset = Math.sin(i * 0.05 + performance.now() * 0.002) * 5;
			ctx.beginPath();
			ctx.arc(i, y + offset, 10, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	function drawBubbles(): void {
		ctx.fillStyle = 'rgba(255,255,255,0.25)';

		bubbles.forEach((b) => {
			ctx.beginPath();
			ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
			ctx.fill();
		});
	}

	function updateBubbles(): void {
		bubbles.forEach((b) => {
			b.y -= b.speed;

			if (b.y < height - fillLevel) {
				b.y = height;
				b.x = Math.random() * width;
			}
		});
	}

	function animate(): void {
		ctx.clearRect(0, 0, width, height);

		if (fillLevel < height) {
			fillLevel += 8.5; // Pour speed
		}

		drawBeer();
		drawFoam();
		drawBubbles();

		updateBubbles();

		requestAnimationFrame(animate);
	}

	onMount(() => {
		const context = canvas.getContext('2d');
		if (!context) return;

		ctx = context;

		resize();
		initBubbles();
		animate();

		window.addEventListener('resize', () => {
			resize();
			initBubbles();
		});
	});
</script>

<canvas bind:this={canvas} class="beer-canvas"></canvas>

<style>
	.beer-canvas {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		height: 95vh;
	}
</style>
