<script>
    export let pointLoc
    
    import mapboxgl from "mapbox-gl";
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { onMount } from "svelte";
    import Search from "./search.svelte"
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, getDoc, doc } from 'firebase/firestore/lite';

    const firebaseConfig = {
        apiKey: "AIzaSyCgNGBk8nuH1EXZ_9Ks-91ug8WnAZgLMsI",
        authDomain: "greenifysd.firebaseapp.com",
        projectId: "greenifysd",
        storageBucket: "greenifysd.appspot.com",
        messagingSenderId: "30386930845",
        appId: "1:30386930845:web:936bec1bf3be9133c78074"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

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
            let allTreeLocColl = collection(db, 'TreeLoc')
            let allTreeLocDoc = doc(allTreeLocColl, 'TreeLoc')
            map.on('load', () => {
                getDoc(allTreeLocDoc).then(doc => {
                    let allPoints = []
                    let data = doc.data()

                    let index = 0
                    console.log(data[index])
                    let indexExist = true
                    while(indexExist){
                        try{
                            let newPoint = {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [data[index][1], data[index][0]]
                                }
                            }
                            index += 1
                            allPoints.push(newPoint)
                        }catch{
                            indexExist = false
                        }
                    }
                
                    map.loadImage("./TreeMarker.png", (error, image) => {
                        map.addImage("tree marker", image)
                        
                        map.addSource('point', {
                            'type': 'geojson',
                            'data':  {
                                    type: 'FeatureCollection',
                                    features: allPoints
                                }
                        })

                        map.addLayer({
                            id: 'TreeLoc',
                            type: 'symbol',
                            source: 'point',
                            layout: {
                                "icon-image": "tree marker",
                                "icon-size": 0.2
                            }
                        });
                    })
                })

            });
        }
    }) 

</script>

<Search map = {map}/>

<div class="absolute top-0 -z-10" id="map" style="height:100%; width:100%"></div>

<style> 
</style>