<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { lang } from '$lib/store';
	import AddButton from '$lib/components/AddButton.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { page } from '$app/stores';

	export let data;

	let value = 0;
	let date = new Date().toISOString().split('T')[0];

	let showAddTransactionPopup = false;
	async function handleSubmit() {
		const res = await fetch(`/api/transactions/${$page.params.name}`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ value, date })
		});
		const data = await res.json();
		console.log(data);
		location.reload();
	}
</script>

<h1>Collection {data.name}</h1>
<p>
	{JSON.stringify(data.transactions)}
</p>

<AddButton onClick={() => (showAddTransactionPopup = true)} />
<Modal bind:show={showAddTransactionPopup}>
	<form on:submit|preventDefault={handleSubmit}>
		<h1>Add a new transaction</h1>
		<Input type="date" label="Date" bind:value={date} />
		<Input type="number" label="value" bind:value />
		<button class="btn primary full-width">{$lang.words.submit}</button>
	</form>
</Modal>
