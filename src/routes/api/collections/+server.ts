import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function POST({ request, locals }) {
	const body = await request.json();
	const collection = await db.collections.create({
		data: { name: body.name, username: locals.username }
	});

	return json({ collection });
}
