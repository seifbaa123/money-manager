<script lang="ts">
	import AddButton from '$lib/components/AddButton.svelte';
	import AddCollection from '$lib/modals/add-collection.svelte';
	import Collection from './Collection.svelte';

	export let data;

	let showAddCollectionPopup = false;
</script>

<div class="collections">
	{#each data.collections as c}
		<Collection collection={c} />
	{/each}
</div>

<AddButton onClick={() => (showAddCollectionPopup = true)} />
<AddCollection bind:show={showAddCollectionPopup} />

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
