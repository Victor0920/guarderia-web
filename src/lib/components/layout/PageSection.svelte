<script>
	import { getThemeColor } from '$lib/utils';

	let className = '';

	export let pt = 3,
		pb = 3,
		background,
		bottomSeparator = 'none';
	export { className as class };
</script>

<section
	style="background-color: {getThemeColor(background)}; padding-top: {pt *
		10}px; padding-bottom: {pb * 10}px;"
	class="page-section {className}"
>
	<slot />
	<!-- {#if bottomSeparator !== 'none'}
		<div class="page-section__bottom-wave page-section__bottom-wave--type-${bottomSeparator}">
			<BottomWave color={background} type={bottomSeparator} background={nextElementBackground} />
		</div>
	{/if} -->
</section>

<style lang="scss">
	.page-section {
		width: 100%;
		padding-left: $mobile-side-padding;
		padding-right: $mobile-side-padding;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative;
		align-items: center;

		& > * {
			max-width: $max-content-width;
		}

		@include lg {
			padding-left: $desktop-side-padding;
			padding-right: $desktop-side-padding;
		}

		// &--bottom-wave {
		// 	overflow: visible;
		// }

		// &__bottom-wave {
		// 	position: absolute;
		// 	bottom: 0;
		// 	left: 0;
		// 	width: 100vw;
		// 	max-width: 100vw;
		// 	height: 60px;
		// 	z-index: 1;
		// 	transform: translateY(23px);

		// 	&--type-curved {
		// 		transform: translateY(15px);
		// 	}
		// }
	}
</style>
