import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function DELETE({ locals, params }) {
    const collection = await db.collections.delete({
        where: { username: locals.username, name: params.name }
    });

    return json({ collection });
}
