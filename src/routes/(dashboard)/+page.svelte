<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { lang } from '$lib/store';
	import AddButton from '$lib/components/AddButton.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Collection from './Collection.svelte';

	export let data;

	let name = '';
	let showAddCollectionPopup = false;

	async function handleSubmit() {
		const res = await fetch('/api/collections', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ name })
		});
		const data = await res.json();
		console.log(data);
		location.reload();
	}
</script>

<div class="collections">
	{#each data.collections as c}
		<Collection collection={c} />
	{/each}
</div>

<AddButton onClick={() => (showAddCollectionPopup = true)} />
<Modal bind:show={showAddCollectionPopup}>
	<form on:submit|preventDefault={handleSubmit}>
		<h1>{$lang.words.add_new_collection}</h1>
		<Input label={$lang.words.name} bind:value={name} />
		<button class="btn primary full-width">{$lang.words.submit}</button>
	</form>
</Modal>

<style>
	.collections {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
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
