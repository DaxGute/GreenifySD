<script>
    import Map from "../components/map/map.svelte"
    import UI from "../components/UI/ui.svelte"
    import Failure from "../components/result/failure.svelte"
    import Success from "../components/result/success.svelte"

    let plantConfirmed = false
    let geoLocation = [0,0]

    let resultVis = false
    let backgroundVis = false
    let success = false
    let response = ""
    function plantTree(){
        let url = new URL(window.location.href)
        fetch("http://server-dot-greenifysd.wl.r.appspot.com/api/plantTree", {
            method: "POST",
            
            body: JSON.stringify({
                email: url.searchParams.get('email'),
                key: url.searchParams.get('key'),
                long: geoLocation[0],
                lat: geoLocation[1],
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            
        })
            .then(response => response.json())
            .then(data => {
                success = data["success"]
                response = data["response"]
                resultVis = true
                setTimeout(()=>{
                    location.href = './';
                }, 5000)
            });
        backgroundVis = true
    }
    

</script>

<Map bind:pointLoc = {geoLocation} />
<UI plantTree = {plantTree}/>

{#if backgroundVis}
    <div class="w-full h-full bg-blue-900 bg-opacity-50 absolute top-0">
        {#if resultVis}
            {#if success}
                <Success result={response}/>
            {:else}
                <Failure result={response}/>
            {/if}
        {/if}
    </div>
{/if}


