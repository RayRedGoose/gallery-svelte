<svelte:head>
	<title>{culture}</title>
</svelte:head>

<main class="content">
  {#each item as art (art.id)}
    {#if (art.primaryimageurl)}
      <Card card={art} />
    {/if}
  {/each}
</main>

<script>
  import Card from '../components/Card.svelte';
  import { getArts } from '../apiCalls/apiCalls';
  export let params;
	let item = [];
  let culture;

	async function load(culture) {
		const curr = item;
    const { data, pages } = await getArts(1, culture);
    item = data;
	}

  $: culture = params.culture
    .split('')
    .map((lt, i) => (i === 0) ? lt.toUpperCase() : lt)
    .join('');

	$: load(culture);

</script>

<style>
  main {
    column-count: 3;
		column-gap: 2rem;
    min-width: 75vw;
		margin: auto;
  }
</style>
