<script lang="ts">
	import { lang } from '$lib/store';
	import AddButton from '$lib/components/AddButton.svelte';
	import AddTransaction from '$lib/modals/add-transaction.svelte';
	import Transaction from './Transaction.svelte';
	import { page } from '$app/stores';

	export let data;

	let showAddTransactionPopup = false;
</script>

<h1>{data.name}</h1>
<div class="table">
	<table>
		<thead>
			<th>#</th>
			<th>{$lang.words.comment}</th>
			<th>{$lang.words.date}</th>
			<th>{$lang.words.value}</th>
			<th></th>
		</thead>
		<tbody>
			{#each data.transactions as t}
				<Transaction transaction={t} />
			{/each}
		</tbody>
	</table>
</div>

<AddButton onClick={() => (showAddTransactionPopup = true)} />
<AddTransaction collection={$page.params.name} bind:show={showAddTransactionPopup} />
