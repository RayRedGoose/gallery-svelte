<svelte:head>
	<title>Home Page</title>
</svelte:head>

<script>
	import {getArts} from '../apiCalls/apiCalls';
	import { onMount } from 'svelte';
	import Card from '../components/Card.svelte';
	let arts = [];

	onMount(async () => {
		const { data, pages } = await getArts(9, 'Dutch');
		arts = data.slice(1, 4);
	});
</script>

<main>
	{#each arts as art (art.id)}
		{#if (art.primaryimageurl)}
			<Card card={art} />
		{/if}
	{/each}
</main>

<style>
	main {
		column-count: 2;
		column-gap: 2rem;
		width: 50vw;
		max-height: 90vh;
		overflow: hidden;
	}
</style>
