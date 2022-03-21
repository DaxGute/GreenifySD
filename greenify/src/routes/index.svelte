<script>
    import Map from "../components/map.svelte"
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Map/>

<div class="inline-flex items-center absolute bottom-10 left-1/2 -translate-x-1/2">
    <button class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-5 rounded-l-full">+</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">+</button>
    <button class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-5 rounded-r-full">+</button>
</div>