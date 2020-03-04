<script>
  export let card;
  const author = card.people[0];
</script>

<section>
  <img src={card.primaryimageurl} alt="art" />
  <div>
    <p class="title">{card.title}</p>
    <p class="author">{author.displayname}</p>
  </div>
  <footer>
    {#each card.colors as color}
      <div style={`background: ${color.css3}`}></div>
    {/each}
  </footer>
</section>

<style>
	section {
		break-inside: avoid;
		margin-bottom: 2rem;
    position: relative;
	}
  div {
    color: rgb(170,30,30);
    padding: 0.5em 0;
  }
  p {
    margin: 0;
  }
  .title {
    font-size: 1.1rem;
    text-transform: uppercase;
  }
  .author {
    font-size: 1rem;
    font-weight: bold;
  }
  img {
    width: 100%;
  }
  footer {
    display: flex;
    flex-wrap: wrap;
  }
	footer div {
		width: 20px;
		height: 20px;
		margin: 0.2rem 0.3rem;
		border-radius: 5px;
	}
</style>
