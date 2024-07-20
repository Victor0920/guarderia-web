<script lang="ts">
	export let title: string = '';
	export let text: string = '';
	export let imageUrl: string = '';
	export let imageAlt: string = '';
</script>

<div class="card">
	{title}
</div>

<style lang="scss">
	.card {
		background-color: white;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		padding: 20px;
	}
</style>
