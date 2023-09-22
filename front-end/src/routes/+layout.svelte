<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';
</script>

<header class="flex justify-center bg-blue-200">
	<div class="flex items-center justify-between w-full px-6 max-w-7xl h-14">
		<a href="/" class="text-xl font-bold"> Sui Dictionary </a>
		<button
			class="h-8 px-4 text-sm font-semibold text-white duration-100 bg-blue-500 rounded-full hover:bg-blue-600"
		>
			Connect
		</button>
	</div>
</header>
<main class="flex justify-center">
	<div class="flex w-full max-w-7xl">
		<Sidebar />
		<div class="flex flex-col w-full">
			<slot />
		</div>
	</div>
</main>
<footer />
