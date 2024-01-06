<script lang="ts">
	import { lang } from '$lib/store';
	import Cookies from 'js-cookie';
	import { goto, invalidateAll } from '$app/navigation';
	import { generateColorsFromUsername } from '$lib/utils';
	import { deleteUser, getUserToken, getUsers } from '$lib/users';

	let username = Cookies.get('username') as string;
	$: colors = generateColorsFromUsername(username);

	let loggedInUsers = getUsers();

	let showDialog = false;

	function setUser(user: string) {
		const token = getUserToken(user);
		username = user;
		Cookies.set('username', user);
		Cookies.set('token', token);

		loggedInUsers = loggedInUsers;
		invalidateAll();
	}

	function logout() {
		if (confirm($lang.words.are_you_sure_you_want_to_logout)) {
			deleteUser(username);
			Cookies.remove('token');
			Cookies.remove('username');
			goto('/login');
		}
	}
</script>

<div class="users">
	<button
		class="icon"
		style="background-color: {colors.bg}; color: {colors.text}"
		on:click={() => (showDialog = !showDialog)}
		>{username[0]}
	</button>
	{#if showDialog}
		<div class="dialog">
			{#each loggedInUsers as user}
				<button class="user {username === user ? 'selected' : ''}" on:click={() => setUser(user)}>
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
			<button class="btn full-width logout" on:click={() => goto('/login')}>
				<i class="fa-solid fa-right-from-bracket" />
				{$lang.words.add_new_account}
			</button>
			<button class="btn full-width logout" on:click={logout}>
				<i class="fa-solid fa-right-from-bracket" />
				{$lang.words.logout}
			</button>
		</div>
	{/if}
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

	.dialog {
		width: 15rem;
		padding: var(--radius);
		border-radius: var(--radius);
		position: absolute;
		top: 3rem;
		right: 0;
		text-align: left;
		background-color: var(--light-gray);
	}

	:global([dir='rtl']) .dialog {
		right: unset;
		left: 0;
		text-align: right;
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

	.user.selected {
		background-color: var(--white);
	}

	.logout {
		color: var(--dark-gray);
	}

	.logout:hover {
		background-color: unset;
	}
</style>
