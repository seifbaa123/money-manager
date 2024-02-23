import db from '$lib/server/db';

export async function load({ params, locals }) {
    const transactions = await db.transactions.findMany({
        where: {
            collectionName: params.name, collection: {
                username: locals.username,
            }
        },
    });

    return { name: params.name, transactions };
}
