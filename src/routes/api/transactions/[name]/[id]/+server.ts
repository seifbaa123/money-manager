import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function DELETE({ params, locals }) {
	const collection = await db.collections.findFirst({ where: { username: locals.username, name: params.name } })
	if (!collection) {
		return json({ message: "Invalid collection owner!" })
	}

	const transaction = await db.transactions.delete({
		where: { id: Number(params.id) }
	});

	return json({ transaction });
}
