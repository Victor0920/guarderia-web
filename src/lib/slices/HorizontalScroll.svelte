<script lang="ts">
	import { Pagination } from '$lib/components';

	export let numberOfItems;
	export let showPagination = true;
	export let gap = 2;
	export let color: 'light' | 'dark' = 'light';

	let currentViewportElement = 0;

	const setCurrentViewportElementOnScroll = (event: any) => {
		const currentBoxInViewport = Math.round(
			(event.target.scrollLeft / (event.target.scrollWidth - event.target.offsetWidth)) *
				(numberOfItems - 1)
		);

		if (currentViewportElement !== currentBoxInViewport) {
			currentViewportElement = currentBoxInViewport;
		}
	};

	const focusElement = (index: number) => {
		console.log('focus', index);
		// refs.current[index].scrollIntoView({
		// 	behavior: 'smooth',
		// 	inline: index === 0 ? 'start' : index === numberOfItems - 1 ? 'end' : 'center',
		// 	block: 'nearest'
		// });
	};
</script>

<div class="horizontal-scroll">
	<div class="horizontal-scroll__window" on:scroll={setCurrentViewportElementOnScroll}>
		<div class="horizontal-scroll__window__wrapper" style="gap: {gap}px;">
			<slot />
		</div>
	</div>

	{#if showPagination}
		<Pagination
			totalPages={numberOfItems}
			currentPage={currentViewportElement}
			onPageChange={(page) => focusElement(page - 1)}
			minified={true}
			{color}
		/>
	{/if}
</div>

<!-- import { useRef, useState, Children } from 'react';

import Pagination from './Pagination';

const HorizontalScrollWrapper: React.FC<{
  children: React.ReactNode;
  numberOfItems: number;
  color: 'light' | 'dark';
  gap?: number;
  showPagination?: boolean;
}> = ({ children, numberOfItems, color, gap = 2, showPagination = true }) => {
  const [currentViewportElement, setCurrentViewportElement] = useState(0);
  const refs = useRef([]);

  const setCurrentViewportElementOnScroll = (event) => {
    const currentBoxInViewport = Math.round(
      (event.target.scrollLeft /
        (event.target.scrollWidth - event.target.offsetWidth)) *
        (numberOfItems - 1)
    );

    if (currentViewportElement !== currentBoxInViewport) {
      setCurrentViewportElement(currentBoxInViewport);
    }
  };

  const focusElement = (index) => {
    refs.current[index].scrollIntoView({
      behavior: 'smooth',
      inline:
        index === 0 ? 'start' : index === numberOfItems - 1 ? 'end' : 'center',
      block: 'nearest',
    });
  };

  return (
    <>
      <div class="horizontal-scroll">
        <div
          class="horizontal-scroll__window"
          onScroll={setCurrentViewportElementOnScroll}
        >
          <div
            class="horizontal-scroll__window__wrapper"
            style={{ gap: `${gap * 10}px` }}
          >
            {Children.map(children, (child, index) => (
              <div ref={(el) => (refs.current[index] = el)}>{child}</div>
            ))}
          </div>
        </div>
      </div>

      
    </>
  );
};

export default HorizontalScrollWrapper; -->

<style lang="scss">
	.horizontal-scroll {
		width: 100vw;
		max-width: 100vw !important;
		overflow-y: hidden;
		position: relative;

		&__window {
			overflow-x: scroll;
			padding-bottom: 120px;
			margin-bottom: -120px;
			scroll-behavior: smooth;

			&__wrapper {
				display: flex;
				width: max-content;
				padding: 0 10%;

				// x - 0.2x - 950 = 0
				// screen size - side padding - max content width = 0
				// x = 1187px
				// @media screen and (min-width: 1187px) {
				// 	padding: 0 calc((100vw - 950px) / 2);
				// }

				// @media screen and (max-width: $max-phone-width) {
				// 	padding: 0 5%;
				// }

				& > :first-of-type,
				& > :last-of-type {
					scroll-margin: calc((100vw - 950px) / 2);

					// @media screen and (max-width: $max-phone-width) {
					// 	scroll-margin: 5vw;
					// }
				}
			}
		}
	}
</style>
