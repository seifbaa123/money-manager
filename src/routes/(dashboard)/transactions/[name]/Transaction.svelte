<script lang="ts">
	import { page } from '$app/stores';
	import type { Transactions as Transaction } from '@prisma/client';

	export let transaction: Transaction;

	async function handleRemove(id: number) {
		const res = await fetch(`/api/transactions/${$page.params.name}/${id}`, {
			method: 'DELETE',
			headers: { 'content-type': 'application/json' }
		});
		const data = await res.json();
		console.log(data);
		location.reload();
	}
</script>

<tr>
	<td>{transaction.id}</td>
	<td>{transaction.comment}</td>
	<td>{transaction.date}</td>
	<td>{transaction.value}</td>
	<td>
		<button class="remove-btn" on:click={() => handleRemove(transaction.id)}>
			<i class="fa-solid fa-trash" />
		</button>
	</td>
</tr>
