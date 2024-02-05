<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	export let onClick: MouseEventHandler<HTMLButtonElement>;
</script>

<button on:click={onClick}>
	<i class="fa-solid fa-plus" />
</button>

<style>
	button {
		width: 3rem;
		height: 3rem;
		padding: 1rem;
		border-radius: 100vh;
		line-height: 1;
		font-size: 1rem;
		position: fixed;
		bottom: 5rem;
		color: white;
		background: var(--blue);
		box-shadow: var(--shadow);
		cursor: pointer;
	}
</style>
