<script lang="ts">
	import Cookies from 'js-cookie';
	import { goto } from '$app/navigation';
	import { generateColorsFromUsername } from '$lib/utils';
	import { getUserToken, getUsers } from '$lib/users';

	let loggedInUsers = getUsers();

	function setUser(user: string) {
		const token = getUserToken(user);
		Cookies.set('username', user);
		Cookies.set('token', token);
		goto('/');
	}
</script>

<div class="users">
	{#each loggedInUsers as user}
		<button class="user" on:click={() => setUser(user)}>
			<div
				class="icon"
				style="background-color: {generateColorsFromUsername(user)
					.bg}; color: {generateColorsFromUsername(user).text}"
			>
				{user[0]}
			</div>
			<span>{user}</span>
		</button>
	{/each}
</div>

<style>
	.users {
		position: relative;
		--radius: 0.5rem;
	}

	.icon {
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100vh;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		user-select: none;
	}

	.user {
		width: 100%;
		margin-bottom: var(--radius);
		padding: var(--radius);
		display: flex;
		align-items: center;
		gap: 0.25rem;
		border-radius: var(--radius);
		cursor: pointer;
	}
</style>
