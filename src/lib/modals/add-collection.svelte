<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import Input from '$lib/components/Input.svelte';
	import { lang } from '$lib/store';

	export let show = false;

	let name: string;

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

<Modal bind:show>
	<form on:submit|preventDefault={handleSubmit}>
		<h1>{$lang.words.add_new_collection}</h1>
		<Input label={$lang.words.name} bind:value={name} />
		<button class="btn primary full-width">{$lang.words.submit}</button>
	</form>
</Modal>
