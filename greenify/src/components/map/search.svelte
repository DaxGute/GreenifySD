<script>
    export let map

    let searchValue = ""
    $: {
        if (searchValue == undefined){
            searchValue = ""
        }
        let strSearchValue = searchValue.toString()
        if (strSearchValue.length > 5){
            searchValue = strSearchValue.substring(0,5)
        }
    }

    let zipCode
    function updateZipCode(){
        zipCode = searchValue
        let fetchReq = "https://server-dot-greenifysd.wl.r.appspot.com/api/zipLongLat/" + zipCode
        fetch(fetchReq)
        .then(response => response.json())
        .then(data => {
            map.flyTo({
                center: [data["lat"], data["long"]],
                zoom: 15,
                bearing: 0,
                speed: 0.5,
                curve: 1
            })
        });
        
    }

</script>

<div class="absolute top-60 right-0 bg-slate-400 blur-lg h-24 w-24"/>
<div class="absolute top-60 right-2 ">
    <label class="block" for="zipcode"> Zip Code: </label> 
    <input type="number" class="block py-1 px-3 w-20 rounded text-sm" name="zipcode" max="99999" bind:value = {searchValue} placeholder="zip code"/>
    <button class="block bg-slate-100 py-1 px-4 my-1 rounded-full w-20" on:click = "{updateZipCode}"> Search </button>
</div>