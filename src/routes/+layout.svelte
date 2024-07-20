<script>
	import { Header, Footer } from '$lib/components';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style lang="scss" global>
	main {
		:global(*) {
			font-family: 'Nunito', sans-serif;
		}
	}
</style>
