<script>
    var searchValue = ""
    $: {
        if (searchValue == undefined){
            searchValue = ""
        }
        let strSearchValue = searchValue.toString()
        if (strSearchValue.length > 5){
            searchValue = strSearchValue.substring(0,6)
        }
    }
    

</script>

<div class="absolute top-60 right-2">
    <form>
        <label class="block" for="zipcode"> Zip Code: </label> 
        <input type="number" class="block py-1 px-3 w-20 rounded" name="zipcode" max="99999" bind:value = {searchValue}/>
        <button class="block bg-slate-100 py-1 px-4 my-1 rounded-full"> Search </button>
    </form>
</div>