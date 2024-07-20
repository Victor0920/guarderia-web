<script>
	import introVideo from '$lib/assets/intro.mp4';
	import { Card, PageSection } from '$lib/components';
	import { HorizontalScroll } from '$lib/slices';
</script>

<div class="hero-video">
	<div class="hero-video__background" />
	<video loop muted autoplay>
		<source src={introVideo} type="video/mp4" />
	</video>
	<div class="hero-video__text">
		<h1>Vacaciones</h1>
	</div>
</div>
<PageSection background="lightblue" class="hey-class">
	<HorizontalScroll numberOfItems={3}>
		<Card title="Card 1" text="This is the first card" />
		<Card title="Card 1" text="This is the first card" />
		<Card title="Card 1" text="This is the first card" />
	</HorizontalScroll>
</PageSection>

<style lang="scss">
	.hero-video {
		width: 100vw;
		height: 100vh;
		position: relative;

		&__background {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.5);
		}

		&__text {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: $white;
			font-size: 2rem;
			text-align: center;
			font-family: 'Nunito', sans-serif;

			@include lg {
				font-size: 3rem;
			}
		}

		video {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
