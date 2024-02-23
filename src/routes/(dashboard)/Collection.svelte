<script lang="ts">
	type Collection = { name: string; value: number };

	export let collection: Collection;

	async function handleRemove() {
		const res = await fetch(`/api/collections/${collection.name}`, {
			method: 'DELETE',
			headers: { 'content-type': 'application/json' }
		});
		const data = await res.json();
		console.log(data);
		location.reload();
	}
</script>

<a href="/transactions/{collection.name}">
	<div class="collection">
		<p>{collection.name}</p>
		<h2>{collection.value}<span>د</span></h2>
		<div class="actions">
			<button class="remove-btn" on:click={handleRemove}>
				<i class="fa-solid fa-trash" />
			</button>
		</div>
	</div>
</a>

<style>
	a {
		text-decoration: none;
	}

	.collection {
		padding: 2rem;
		position: relative;
		text-align: center;
		border-radius: 1rem;
		border: 0.125rem solid var(--light-gray);
	}

	p {
		font-size: 1rem;
		margin-bottom: 1rem;
		color: var(--black);
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

	.actions {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	:global([dir='rtl']) .actions {
		right: unset;
		left: 1rem;
	}

	.remove-btn {
		color: var(--red);
	}
</style>
