import db from '$lib/server/db';

export async function load(request) {
	const collectionsWithSum = await db.collections.findMany({
		where: { username: request.locals.username },
		include: {
			transactions: {
				select: {
					value: true,
				},
			},
		},
	});

	const collections = collectionsWithSum.map((collection) => {
		const sumOfTransactionValues = collection.transactions.reduce(
			(sum, transaction) => sum + transaction.value,
			0
		);

		const { transactions, ...collectionWithoutTransactions } = collection;

		return {
			...collectionWithoutTransactions,
			value: sumOfTransactionValues,
		};
	});

	return { collections };
}
