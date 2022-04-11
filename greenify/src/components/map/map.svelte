<script>
    export let pointLoc
    
    import mapboxgl from "mapbox-gl";
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { onMount } from "svelte";
    import Search from "./search.svelte"

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGF4dG9uZ3V0ZSIsImEiOiJjbDFxc2F2OHQxcmdpM2NzOWZtNDU0emRrIn0.IUj4mbGb97G_5Il6Hs44FA';

    const bounds = [
        [ -117.54814665952902, 32.41610174321662], // Southwest coordinates
        [-116.02104719605653, 33.56333188663347] // Northeast coordinates
    ];

    let map
    onMount(() => {
        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            maxBounds: bounds,
            attributionControl: false,
        });

        let url = new URL(window.location.href)
        if (url.searchParams.has('email') && url.searchParams.has('key')){
            const el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url(./plantMarker.png)';
            el.style.width = '100px';
            el.style.height = '100px';
            el.style.backgroundSize = '100%';
            
            let plantMarker = new mapboxgl.Marker(el);
            map.on('click', (e)=>{
                plantMarker.setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(map);
                pointLoc = [e.lngLat.lng, e.lngLat.lat]
            })
        }else{
            map.on('load', () => {
                map.addSource('TreeLoc', {
                    type: 'geojson',
                    // Use a URL for the value for the `data` property.
                    data: 'https://api.mapbox.com/datasets/v1/daxtongute/cl1ts78vj25sg27mslbhfwpec?access_token=pk.eyJ1IjoiZGF4dG9uZ3V0ZSIsImEiOiJjbDB6cmkwbWIyZGhkM2NwbjczMjh2NDAwIn0.BZxxTyIKwHB6Dq9Uxt6Hmg'
                });
                    
                map.addLayer({
                    'id': 'TreeLoc-layer',
                    'type': 'circle',
                    'source': 'TreeLoc',
                    'paint': {
                        'circle-radius': 8,
                        'circle-stroke-width': 2,
                        'circle-color': 'red',
                        'circle-stroke-color': 'white'
                    }
                });
            });
        }
    }) 

</script>

<Search map = {map}/>

<div class="absolute top-0 -z-10" id="map" style="height:100%; width:100%"></div>

<style> 
</style>