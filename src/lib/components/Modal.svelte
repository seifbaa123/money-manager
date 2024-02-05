<script lang="ts">
	export let show = false;
</script>

{#if show}
	<div class="popup">
		<div class="bg" on:click={() => (show = false)}></div>
		<div class="content">
			<slot />
		</div>
	</div>
{/if}

<style>
	.popup {
		width: 100%;
		height: 100vh;
		padding: 1rem;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow-y: auto;
		z-index: 1000;
	}

	.bg {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.8);
	}

	.content {
		width: 520px;
		max-width: 100%;
		position: relative;
		padding: 1rem;
		border-radius: 0.25rem;
		background-color: var(--white);
	}
</style>
