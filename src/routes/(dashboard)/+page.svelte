<script lang="ts">
	export let data;
</script>

<div class="collections">
	{#each data.collections as c}
		<div class="collection">
			<p>{c.name}</p>
			<h2>{c.value}<span>د</span></h2>
		</div>
	{/each}
</div>

<style>
	.collections {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.collection {
		padding: 2rem;
		text-align: center;
		border-radius: 1rem;
		border: 0.125rem solid var(--light-gray);
	}

	p {
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	h2 {
		line-height: 1;
		font-size: 4rem;
		color: var(--dark-gray);
		display: flex;
		align-items: flex-end;
		justify-content: center;
		gap: 0.25rem;
	}

	span {
		font-size: 1.5rem;
	}

	@media (min-width: 568px) {
		.collections {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 768px) {
		.collections {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media (min-width: 1024px) {
		.collections {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
</style>
