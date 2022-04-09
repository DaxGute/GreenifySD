<script>
    import Map from "../components/map/map.svelte"
    import UI from "../components/UI/ui.svelte"
    import Failure from "../components/result/failure.svelte"
    import Success from "../components/result/success.svelte"

    let plantConfirmed = false
    let geoLocation = [0,0]

    let resultVis = false
    let success = false
    let response = ""
    $: {
        if (plantConfirmed) {
            let url = new URL(window.location.href)
            fetch("http://localhost:8080/api/signUp", {
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
                });
        }
    }

</script>

<Map bind:pointLoc = {geoLocation} />
<UI bind:plantConfirmed = {plantConfirmed}/>

{#if success}
    <Success bind:modalVis = {resultVis} result={response}/>
{:else}
    <Failure bind:modalVis = {resultVis} result={response}/>
{/if}


