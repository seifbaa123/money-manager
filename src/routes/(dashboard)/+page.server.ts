import db from '$lib/server/db';

export async function load(request) {
	const collections = await db.collections.findMany({
		where: { username: request.locals.username }
	});

	return { collections };
}
