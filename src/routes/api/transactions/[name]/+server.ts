import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function POST({ request, params, locals }) {
	const collection = await db.collections.findFirst({ where: { username: locals.username, name: params.name } })
	if (!collection) {
		return json({ message: "Invalid collection owner!" })
	}

	const body = await request.json();
	const transaction = await db.transactions.create({
		data: { value: body.value, date: body.date, collectionName: params.name }
	});

	return json({ transaction });
}
