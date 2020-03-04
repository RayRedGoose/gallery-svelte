<svelte:head>
	<title>{culture}</title>
</svelte:head>

<script>
  import Card from '../components/Card.svelte';
  import { getArts } from '../apiCalls/apiCalls';
  export let params;
	let item = [];
	let count = 1;
	let maxPages = 1;
  let culture;

	async function load(culture, count) {
		const curr = item;
    const { data, pages } = await getArts(count, culture);
    item = data;
		maxPages = pages;
	}

  $: culture = params.culture
    .split('')
    .map((lt, i) => (i === 0) ? lt.toUpperCase() : lt)
    .join('');

	$: load(culture, count);


	$: isDisabledPrev = isValid(count, 1);
	$: isDisabledNext = isValid(count, maxPages);
	$: count = isNewCulture(culture);

	function isNewCulture(cul) {
		return 1;
	}

	function isValid(count, page) {
		return count === page;
	}
</script>

<header>
	<button disabled={isDisabledPrev} on:click={() => {if (count !== 1) count--}}>Previous</button>
	<p>{count + " / " + maxPages} </p>
	<button disabled={isDisabledNext} on:click={() => {if (count !== maxPages) count++}}>Next</button>
</header>

<main class="content">
  {#each item as art (art.id)}
    {#if (art.primaryimageurl && art.colors)}
      <Card card={art} />
    {/if}
  {/each}
</main>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 2em;
	}
	button {
		cursor: pointer;
		background-color: #800000;
		color: #fff;
		border: none;
		font-size: 1rem;
		padding: 0.4em 1em;
		border-radius: 0.4rem;
	}
	button:hover {
		transform: scale(1.1);
	}
	button:active {
		transform: scale(0.9);
	}
	button:disabled {
		opacity: 0.3;
	}
	button:disabled:hover {
		transform: scale(1);
	}
	header p {
		font-size: 1.4rem;
		font-weight: bold;
		margin: 0 2rem;
	}
  .content {
    column-count: 3;
		column-gap: 2rem;
    min-width: 75vw;
		margin: auto;
  }
</style>
