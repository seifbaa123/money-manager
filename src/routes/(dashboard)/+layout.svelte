<script lang="ts">
	import '@fortawesome/fontawesome-free/js/all.js';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import '../../app.css';

	import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />
<div class="container">
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		width: 100%;
		margin-top: var(--navbar-height);
	}
</style>
