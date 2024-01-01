<script lang="ts">
	import { goto } from '$app/navigation';
	import Cookies from 'js-cookie';
	import Input from '$lib/components/Input.svelte';
	import { lang } from '$lib/store';
	import { addUser } from '$lib/users';
	import LoginAsUser from '$lib/components/LoginAsUser.svelte';

	let username: string;
	let password: string;

	async function handleSubmit() {
		const res = await fetch('/api/auth/login', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ username, password })
		});
		const data = await res.json();
		if (data.token) {
			addUser(username, data.token);
			Cookies.set('token', data.token);
			Cookies.set('username', username);
			goto('/');
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h1>{$lang.words.login}</h1>
	<Input label={$lang.words.username} bind:value={username} />
	<Input label={$lang.words.password} bind:value={password} type="password" />
	<button class="btn primary full-width">{$lang.words.submit}</button>
	<a href="/signup" class="link">{$lang.words.signup}</a>
	<LoginAsUser />
</form>
