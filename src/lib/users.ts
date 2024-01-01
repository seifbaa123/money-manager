import { browser } from '$app/environment';

type Users = { [index: string]: string };

export function getUsers() {
	if (!browser) {
		return [];
	}

	const usersRaw = localStorage.getItem('users') ?? '{}';
	const users = JSON.parse(usersRaw) as Users;
	return Object.keys(users);
}

export function getUserToken(username: string) {
	if (!browser) {
		return '';
	}

	const usersRaw = localStorage.getItem('users') ?? '{}';
	const users = JSON.parse(usersRaw) as Users;
	return users[username];
}

export function addUser(username: string, token: string) {
	if (!browser) return;

	const usersRaw = localStorage.getItem('users') ?? '{}';
	const users = JSON.parse(usersRaw) as Users;
	users[username] = token;
	localStorage.setItem('users', JSON.stringify(users));
}

export function deleteUser(username: string) {
	if (!browser) return;

	const usersRaw = localStorage.getItem('users') ?? '{}';
	const users = JSON.parse(usersRaw) as Users;
	delete users[username];
	localStorage.setItem('users', JSON.stringify(users));
}
