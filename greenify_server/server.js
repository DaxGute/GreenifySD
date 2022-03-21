const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());

app.use(express.static('public'));
app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(8080, () => {
   console.log('Server is up at port 8080');
});

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
app.get('/map', (req, res)=>{
   mapboxgl.accessToken = 'pk.eyJ1IjoiZGF4dG9uZ3V0ZSIsImEiOiJjbDB6cmkwbWIyZGhkM2NwbjczMjh2NDAwIn0.BZxxTyIKwHB6Dq9Uxt6Hmg';
   var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
   });

   res.send(map)
})