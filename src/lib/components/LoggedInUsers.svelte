<script lang="ts">
	import { lang } from '$lib/store';
	import Cookies from 'js-cookie';
	import { goto } from '$app/navigation';
	import { generateColorsFromUsername } from '$lib/utils';

	const username = Cookies.get('username') as string;
	const colors = generateColorsFromUsername(username);

	let showDialog = true;
	function logout() {
		if (confirm($lang.words.are_you_sure_you_want_to_logout)) {
			Cookies.remove('token');
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
			<div class="user">
				<div class="icon" style="background-color: {colors.bg}; color: {colors.text}">
					{username[0]}
				</div>
				<span>{username}</span>
			</div>
			<button class="btn full-width logout" on:click={logout}>
				<i class="fa-solid fa-right-from-bracket" />
				logout
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
		display: flex;
		align-items: center;
		gap: 0.25rem;
		padding: var(--radius);
		border-radius: var(--radius);
		background-color: var(--white);
	}

	.logout {
		color: var(--dark-gray);
	}

	.logout:hover {
		background-color: unset;
	}
</style>
