<script lang="ts">
	let showLoadingContainer = true;

	setTimeout(() => {
		showLoadingContainer = false;
	}, 1000);
</script>

{#if showLoadingContainer}
	<div class="loading-container">
		<img src="/icon.svg" alt="" />
		<div class="dots">
			<div class="dot" />
			<div class="dot" />
			<div class="dot" />
		</div>
	</div>
{/if}

<slot />

<style>
	.loading-container {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--white);
		z-index: 10000;
	}

	img {
		width: 100px;
		margin-bottom: 2rem;
	}

	.dots {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.dot {
		width: 10px;
		height: 10px;
		background-color: var(--blue);
		border-radius: 50%;
		margin: 0 5px;
		animation: pulse 0.6s ease-in-out infinite alternate;
	}

	.dot:nth-child(2) {
		animation-delay: 0.2s;
	}

	.dot:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(1.5);
			opacity: 0.5;
		}
	}
</style>
