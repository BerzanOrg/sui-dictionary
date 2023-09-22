<script lang="ts">
	import { smartContractStore } from '$lib/stores/smartContract.js';

	export let data;
</script>

<svelte:head>
	<title>Sui Dictionary | {data.word}</title>
</svelte:head>

<div class="flex flex-col gap-4 pt-4 pl-8 pr-6">
	<h1 class="text-3xl font-semibold">
		# {data.word}
	</h1>
	<div class="flex flex-col">
		{#each $smartContractStore.words[data.word] as { author, content, date }}
			<div class="flex flex-col gap-4 px-6 py-4 text-sm bg-blue-100 rounded-2xl">
				<p>{content}</p>
				<div class="flex flex-col justify-end gap-1 text-xs">
					<p class="text-blue-500">{author}</p>
					<p class="text-blue-500">{new Date(date).toDateString()}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
