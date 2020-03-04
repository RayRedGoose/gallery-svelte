<nav>
	<ul>
		<li><a class="{ isActive('Home') }" href="/">Home</a></li>
		<li><a class="{ isActive('British') }" href="/british">British</a></li>
		<li><a class="{ isActive('German') }" href="/german">German</a></li>
		<li><a class="{ isActive('French') }" href="/french">French</a></li>
		<li><a class="{ isActive('Spanish') }" href="/spanish">Spanish</a></li>
		<li><a class="{ isActive('Norwegian') }" href="/norwegian">Norwegian</a></li>
		<li><a class="{ isActive('Dutch') }" href="/dutch">Dutch</a></li>
	</ul>
	<h1>Gallery Palette</h1>
</nav>

<script>
	export let active;
	$: isActive = str => active === str.toLowerCase() ? 'selected' : '';
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(170,30,30,0.1);
		font-weight: 300;
		padding: 0 1em;
		position: relative;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: block;
		float: left;
		margin: 0 1em;
	}
	h1 {
		color: #800000;
		font-size: 2rem;
		font-weight: 300;
		font-family: fantasy;
		position: absolute;
		top: 1em; right: 1em;
	}
	.selected {
		position: relative;
		display: inline-block;
	}
	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(170,30,30);
		display: block;
		bottom: -1px;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>
