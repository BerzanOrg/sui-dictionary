<script lang="ts">
	import { onMount } from 'svelte';
	import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
	import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
	import { TransactionBlock } from '@mysten/sui.js/transactions';
	import { requestSuiFromFaucetV0, getFaucetHost } from '@mysten/sui.js/faucet';

	onMount(async () => {
		const client = new SuiClient({
			url: 'https://fullnode.devnet.sui.io'
		});

		// Generate a new Ed25519 Keypair
		const keypair = new Ed25519Keypair();

		console.log(keypair.toSuiAddress())
		prompt('yes?');
		const packageObjectId = '0x41a5b9300c4c0a3e6b1b7817b4430736abe316c88024c44282546aad63c56508';

		const tx = new TransactionBlock();

		tx.moveCall({
			target: `${packageObjectId}::counter::increment`,
			arguments: [tx.pure('0x2ed080dafde70e61bd3a4617c3973f3545c6236b45428af954238342bd0f6929')]
		});

		const result = await client.signAndExecuteTransactionBlock({
			signer: keypair,
			transactionBlock: tx
		});

		console.log({ result });
	});
</script>

<svelte:head>
	<title>Sui Dictionary</title>
</svelte:head>

<div class="flex flex-col">
	<h1>homepage</h1>
</div>
