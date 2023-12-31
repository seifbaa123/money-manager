<script lang="ts">
	import { lang } from '$lib/store';
	import LoggedInUsers from './LoggedInUsers.svelte';
</script>

<nav>
	<div class="container">
		<a href="/">{$lang.words.money_manager}</a>
		<div>
			<LoggedInUsers />
		</div>
	</div>
</nav>

<style>
	nav {
		width: 100%;
		height: var(--navbar-height);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--white);
	}

	.container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.25rem;
	}
</style>
