<script>
	import { smartContractStore } from '$lib/stores/smartContract';
	import { walletStore } from '$lib/stores/wallet';
</script>

<div class="flex flex-col px-4 py-2 gap-4 h-[calc(100vh-3.5rem)] bg-blue-100 min-w-[15rem] 0">
	<div class="flex flex-col gap-1">
		<h1 class="font-bold">Words</h1>
		<div class="flex flex-col text-sm">
			{#each Object.entries($smartContractStore.words) as [word]}
				<a href="/words/{word}" class="font-medium text-blue-600 hover:text-blue-400">
					# {word}
				</a>
			{/each}
		</div>
	</div>
	<div class="flex flex-col gap-1">
		<h1 class="font-bold">More</h1>
		<div class="flex flex-col text-sm">
			<a
				href={$walletStore.address ? '/add-new-word' : null}
				class="font-medium text-gray-600 hover:text-gray-500 {$walletStore.isConnected
					? 'hover:text-gray-500'
					: 'cursor-not-allowed'}"
			>
				Add New Word
			</a>
			<a
				href={$walletStore.address ? '/profile-settings' : null}
				class="font-medium text-gray-600 {$walletStore.isConnected
					? 'hover:text-gray-500'
					: 'cursor-not-allowed'}"
			>
				Profile Settings
			</a>
		</div>
	</div>
</div>
