<script>
    export var map

    var searchValue = ""
    $: {
        if (searchValue == undefined){
            searchValue = ""
        }
        let strSearchValue = searchValue.toString()
        if (strSearchValue.length > 5){
            searchValue = strSearchValue.substring(0,5)
        }
    }

    var zipCode
    function updateZipCode(){
        zipCode = searchValue
        var fetchReq = "http://localhost:8080/api/zipLongLat/" + zipCode
        fetch(fetchReq)
        .then(response => response.json())
        .then(data => {
            console.log(data["long"])
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

<div class="absolute top-60 right-2">
    <label class="block" for="zipcode"> Zip Code: </label> 
    <input type="number" class="block py-1 px-3 w-20 rounded" name="zipcode" max="99999" bind:value = {searchValue}/>
    <button class="block bg-slate-100 py-1 px-4 my-1 rounded-full" on:click = "{updateZipCode}"> Search </button>
</div>