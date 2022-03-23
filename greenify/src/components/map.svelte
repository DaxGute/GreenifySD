<script>
    import mapboxgl from "mapbox-gl";
    import { onMount } from "svelte";
    import Search from "./search.svelte"

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGF4dG9uZ3V0ZSIsImEiOiJjbDB6cmkwbWIyZGhkM2NwbjczMjh2NDAwIn0.BZxxTyIKwHB6Dq9Uxt6Hmg';

    const bounds = [
        [ -117.54814665952902, 32.41610174321662], // Southwest coordinates
        [-116.02104719605653, 33.56333188663347] // Northeast coordinates
    ];

    var map
    onMount(() => {
        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            maxBounds: bounds,
            attributionControl: false,
        });
    })
</script>

<Search map = {map}/>

<svelte:head>
  <link
    href="https://api.mapbox.com/mapbox-assembly/v0.23.2/assembly.min.css"
    rel="stylesheet"
  />
  <script
    src="https://api.mapbox.com/mapbox-assembly/v0.23.2/assembly.js"></script>
</svelte:head>

<div class="absolute top-0 -z-10" id="map" style="height:100%; width:100%"></div>

<style> 
</style>