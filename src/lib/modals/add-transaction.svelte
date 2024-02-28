<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import Input from '$lib/components/Input.svelte';
	import { lang } from '$lib/store';

	export let show = false;
	export let collection: string;

	let value = 0;
	let comment = '';
	let date = new Date().toISOString().split('T')[0];

	async function handleSubmit() {
		const res = await fetch(`/api/transactions/${collection}`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ value, date, comment })
		});
		const data = await res.json();
		console.log(data);
		location.reload();
	}
</script>

<Modal bind:show>
	<form on:submit|preventDefault={handleSubmit}>
		<h1>{$lang.words.add_new_transaction}</h1>
		<Input type="date" label={$lang.words.date} bind:value={date} />
		<Input type="number" label={$lang.words.value} bind:value />
		<Input type="textarea" label={$lang.words.comment} bind:value={comment} />
		<button class="btn primary full-width">{$lang.words.submit}</button>
	</form>
</Modal>
