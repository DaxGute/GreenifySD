<script>
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    var map;
 
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGF4dG9uZ3V0ZSIsImEiOiJjbDB6cmkwbWIyZGhkM2NwbjczMjh2NDAwIn0.BZxxTyIKwHB6Dq9Uxt6Hmg';
    var map = new mapboxgl.Map({
    container: 'YOUR_CONTAINER_ELEMENT_ID',
    style: 'mapbox://styles/mapbox/streets-v11'
    });
</script>
hello
<div bind:this={map}></div>

<style> 
</style>