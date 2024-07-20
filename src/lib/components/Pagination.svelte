<script lang="ts">
	import { ArrowIcon } from '$lib/assets';

	export let currentPage: number;
	export let totalPages: number;
	export let onPageChange: (page: number) => any;
	export let minified: boolean = false;
	export let color: 'light' | 'dark';

	const totalPagesArray = Array.from(Array(totalPages).keys());
	const pageChange = (page: number) => {
		if (page > 0 && page <= totalPages) {
			onPageChange(page);
		}
	};
</script>

{#if minified}
	<div class="pagination--minified">
		{#each totalPagesArray as page, index}
			<button
				class="pagination--minified__dot {color === 'light'
					? 'pagination--minified__dot--light'
					: ''} {currentPage === index ? 'pagination--minified__dot--active' : ''}"
				on:click={() => pageChange(index + 1)}
			/>
		{/each}
	</div>
{:else}
	<div class="pagination">
		<div class="pagination__buttons">
			<button
				class="pagination__buttons__button pagination__buttons__button--first-page"
				on:click={() => pageChange(1)}
			>
				<ArrowIcon width={13} />
				<ArrowIcon width={13} />
			</button>
			<button
				class="pagination__buttons__button pagination__buttons__button--previous-page"
				on:click={() => pageChange(currentPage - 1)}
			>
				<ArrowIcon width={13} />
			</button>

			{#if currentPage - 2 > 0 && currentPage + 1 > totalPages}
				<button class="pagination__buttons__button" on:click={() => pageChange(currentPage - 2)}>
					{currentPage - 2}
				</button>
			{/if}
			{#if currentPage - 1 > 0}
				<button class="pagination__buttons__button" on:click={() => pageChange(currentPage - 1)}>
					{currentPage - 1}
				</button>
			{/if}

			<button class="pagination__buttons__button pagination__buttons__button--active">
				{currentPage}
			</button>
			{#if currentPage + 1 <= totalPages}
				<button class="pagination__buttons__button" on:click={() => pageChange(currentPage + 1)}>
					{currentPage + 1}
				</button>
			{/if}
			{#if currentPage + 2 <= totalPages && currentPage - 1 <= 0}
				<button class="pagination__buttons__button" on:click={() => pageChange(currentPage + 2)}>
					{currentPage + 2}
				</button>
			{/if}

			<button
				class="pagination__buttons__button pagination__buttons__button--next-page"
				on:click={() => pageChange(currentPage + 1)}
			>
				<ArrowIcon width={13} />
			</button>
			<button
				class="pagination__buttons__button pagination__buttons__button--last-page"
				on:click={() => pageChange(totalPages)}
			>
				<ArrowIcon width={13} />
				<ArrowIcon width={13} />
			</button>
		</div>
	</div>
{/if}

<!-- import { ArrowIcon } from '../public/assets/images/icons';

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => any;
  minified?: boolean;
  color?: 'light' | 'dark';
}> = ({ currentPage, totalPages, onPageChange, minified = false, color }) => {
  const totalPagesArray = Array.from(Array(totalPages).keys());
  const pageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return minified ? (
    <div class="pagination--minified">
      {totalPagesArray.map((page, index) => {
        return (
          <div
            key={`${Math.random() * page}-${index}`}
            class={`pagination--minified__dot ${
              color === 'light' ? 'pagination--minified__dot--light' : ''
            } ${
              currentPage === index ? 'pagination--minified__dot--active' : ''
            }`}
            on:click={() => pageChange(index + 1)}
          />
        );
      })}
    </div>
  ) : (
    <div class="pagination">
      <div class="pagination__buttons">
        <button
          class="pagination__buttons__button pagination__buttons__button--first-page"
          on:click={() => pageChange(1)}
        >
          <ArrowIcon width={13} />
          <ArrowIcon width={13} />
        </button>
        <button
          class="pagination__buttons__button  pagination__buttons__button--previous-page"
          on:click={() => pageChange(currentPage - 1)}
        >
          <ArrowIcon width={13} />
        </button>

        {currentPage - 2 > 0 && currentPage + 1 > totalPages && (
          <button
            class="pagination__buttons__button"
            on:click={() => pageChange(currentPage - 2)}
          >
            {currentPage - 2}
          </button>
        )}
        {currentPage - 1 > 0 && (
          <button
            class="pagination__buttons__button"
            on:click={() => pageChange(currentPage - 1)}
          >
            {currentPage - 1}
          </button>
        )}
        <button class="pagination__buttons__button pagination__buttons__button--active">
          {currentPage}
        </button>
        {currentPage + 1 <= totalPages && (
          <button
            class="pagination__buttons__button"
            on:click={() => pageChange(currentPage + 1)}
          >
            {currentPage + 1}
          </button>
        )}
        {currentPage + 2 <= totalPages && currentPage - 1 <= 0 && (
          <button
            class="pagination__buttons__button"
            on:click={() => pageChange(currentPage + 2)}
          >
            {currentPage + 2}
          </button>
        )}

        <button
          class="pagination__buttons__button  pagination__buttons__button--next-page"
          on:click={() => pageChange(currentPage + 1)}
        >
          <ArrowIcon width={13} />
        </button>
        <button
          class="pagination__buttons__button  pagination__buttons__button--last-page"
          on:click={() => pageChange(totalPages)}
        >
          <ArrowIcon width={13} />
          <ArrowIcon width={13} />
        </button>
      </div>
    </div>
  );
};

export default Pagination; -->

<style lang="scss">
	.pagination {
		display: flex;
		justify-content: center;
		margin-top: 0.75rem;

		&__buttons {
			display: flex;
			flex-direction: row;
			width: max-content;
			overflow: hidden;
			border-radius: 20px;

			&__button {
				border: none;
				background-color: $white;
				padding: 0.5rem 1rem;
				cursor: pointer;
				font-size: 1rem;
				display: flex;
				align-items: center;

				&--active {
					background-color: $yellow;
				}

				&--previous-page,
				&--next-page {
					padding: 0.5rem;
				}

				&--first-page {
					padding: 0.5rem;
					padding-right: 0.3rem;
				}

				&--last-page {
					padding: 0.5rem;
					padding-left: 0.3rem;
				}

				&--first-page,
				&--previous-page {
					svg {
						transform: rotate(180deg);
					}
				}

				&--first-page svg:first-of-type,
				&--last-page svg:first-of-type {
					margin-right: -5px;
				}

				&:not(:last-child) {
					border-right: 1px solid $beige;
				}

				&:hover:not(&--active) {
					background-color: $green;
				}
			}
		}

		&--minified {
			width: 100%;
			display: flex;
			justify-content: center;
			gap: 10px;
			padding-top: 20px;
			padding-bottom: 5px;
			height: 38px;

			&__dot {
				width: 13px;
				height: 13px;
				border-radius: 50%;
				border: 1.5px solid $darkblue;
				cursor: pointer;
				background: transparent;
				transition: all 0.2s ease;

				&--active {
					background: $darkblue;
				}

				&--light {
					border: 1.5px solid $white;

					&.pagination--minified__dot--active {
						background: $white;
					}
				}

				&:active {
					transform: scale(1.2);
				}
			}
		}
	}
</style>
