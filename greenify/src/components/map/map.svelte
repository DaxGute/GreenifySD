<script>
    // export var pointLoc
    
    import mapboxgl from "mapbox-gl";
    import { onMount } from "svelte";
    import Search from "./search.svelte"

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGF4dG9uZ3V0ZSIsImEiOiJjbDFxc2F2OHQxcmdpM2NzOWZtNDU0emRrIn0.IUj4mbGb97G_5Il6Hs44FA';

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

        var marker = new mapboxgl.Marker();
        map.on('click', (e)=>{
            marker.setLngLat(e.lngLat).addTo(map);
        })
    })

</script>

<Search map = {map}/>

<div class="absolute top-0 -z-10" id="map" style="height:100%; width:100%"></div>

<style> 
</style>