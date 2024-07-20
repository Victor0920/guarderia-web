<script>
	import { Logo, MenuIcon, LoginIcon } from '$lib/assets';

	let scrollY = 0;
	let innerWidth = 0;

	$: isMobile = innerWidth < 768;
	$: hasScrolled = scrollY > 20;
</script>

<svelte:window bind:innerWidth bind:scrollY />

<header class="header {hasScrolled ? 'scrolled' : ''}">
	<div class="navbar">
		<a class="logo" href="/">
			<Logo color="black" />
		</a>
		{#if isMobile}
			<div class="menu-icon">
				<MenuIcon />
			</div>
		{:else}
			<div class="items">
				<a href="/services">Servicios</a>
				<a href="/blog">Blog</a>
				<a href="/location">Ubicación</a>
				<a href="/prices">Precios</a>
				<a class="button" href="/prices"
					>Acceder <LoginIcon color={hasScrolled ? 'black' : 'white'} /></a
				>
			</div>
		{/if}
	</div>
</header>

<style lang="scss">
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		padding: 0 2rem;
		position: fixed;
		width: 100vw;
		top: 0;
		z-index: 1000;
		transition:
			height 0.2s,
			background-color 0.2s;
		height: 80px;

		.navbar {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			max-width: $max-content-width;

			.menu-icon {
				display: flex;
				justify-content: flex-end;
				width: 35px;
				transition: width 0.2s;
			}

			.logo {
				width: 50px;
				height: 50px;
				transition:
					width 0.2s,
					height 0.2s;
			}

			.items {
				display: flex;
				gap: 1rem;

				a {
					color: white;
					text-decoration: none;
					font-size: 1rem;
					font-weight: 500;
					padding: 5px;
					position: relative;
					display: flex;
					align-items: center;
					gap: 5px;

					&::after {
						background: none repeat scroll 0 0 transparent;
						bottom: 0;
						content: '';
						display: block;
						height: 1.5px;
						left: 50%;
						position: absolute;
						background: #fff;
						transition:
							width 0.3s ease 0s,
							left 0.3s ease 0s;
						width: 0;
					}
					&:hover::after {
						width: 100%;
						left: 0;
					}
				}
			}
		}

		&.scrolled {
			height: 60px;
			backdrop-filter: saturate(180%) blur(1px);
			background-color: rgba(255, 255, 255, 0.5);

			.logo {
				width: 40px;
				height: 40px;
			}

			.menu-icon {
				width: 30px;
			}

			.items a {
				color: black;
			}
		}
	}
</style>
