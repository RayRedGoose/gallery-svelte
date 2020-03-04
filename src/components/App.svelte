<Nav {active} />

<main>
	<svelte:component this={Route} {params} />
</main>

<script>
	import Navaid from 'navaid';
	import { onDestroy } from 'svelte';
	import Nav from './Nav.svelte';

	let Route, params, active;
	let uri = location.pathname;
	$: active = uri.split('/')[1] || 'home';

	function draw(m, obj) {
		params = obj || {};
		if (m.preload) {
			m.preload({ params }).then(() => {
				Route = m.default;
				window.scrollTo(0, 0);
			});
		} else {
			Route = m.default;
			window.scrollTo(0, 0);
		}
	}

	function track(obj) {
		uri = obj.state || obj.uri || location.pathname;
		if (window.ga) ga.send('pageview', { dp:uri });
	}

	addEventListener('replacestate', track);
	addEventListener('pushstate', track);
	addEventListener('popstate', track);

	const router = Navaid('/')
		.on('/', () => import('../routes/Home.svelte').then(draw))
		.on('/:culture', obj => import('../routes/Gallery.svelte').then(m => draw(m, obj)))
		.on('/arts/:id', obj => import('../routes/Art.svelte').then(m => draw(m, obj)))
		.listen();

	onDestroy(router.unlisten);
</script>

<style>
	main {
		position: relative;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
