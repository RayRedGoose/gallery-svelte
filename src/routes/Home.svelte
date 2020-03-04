<svelte:head>
	<title>Home Page</title>
</svelte:head>

<script>
	import {getArts} from '../apiCalls/apiCalls';
	import { onMount } from 'svelte';
	import Card from '../components/Card.svelte';
	let arts = [];

	onMount(async () => {
		const { data } = await getArts(1, 'Belgian');
		arts = data.slice(2, 4);
	});
</script>

<main>
	{#each arts as art (art.id)}
		{#if (art.primaryimageurl)}
			<Card card={art} />
		{/if}
	{/each}
</main>

<aside>
	<h3>Find your color inspiration</h3>
	<h4>in European culture's Arts</h4>
</aside>

<style>
	main {
		column-count: 2;
		column-gap: 2rem;
		width: 50vw;
		max-height: 90vh;
		overflow: hidden;
	}
	aside {
		position: absolute;
		top: 40%; right: 4rem;
	}
	h3 {
		font-size: 48px;
	}
	h4 {
		font-size: 24px;
		font-weight: lighter;
	}
</style>
