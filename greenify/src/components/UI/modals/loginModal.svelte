<script>
    export var modalVis
    var emailSent = false
    var loginVis = true
    var signUpResult = ""

    function reset(){
        emailSent = false
        modalVis = false 
        loginVis = true
        signUpResult = ""
    }

    var email = ""
    var receivedResponse = true
    function signUp(){
        if (receivedResponse) {
            receivedResponse = false
            fetch("http://localhost:8080/api/signUp", {
                method: "POST",
                
                body: JSON.stringify({
                    email: email,
                }),

                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
                
            })
                .then(response => response.json())
                .then(data => {
                    signUpResult = data["response"]
                    loginVis = data["loginVis"]
                    receivedResponse = true
                });
        }
    }
</script>

{#if modalVis}
    <div class="w-full h-full bg-blue-900 bg-opacity-50 absolute top-0">
        <div class="bg-slate-100 relative top-1/4 left-1/4 w-2/4 h-2/4 rounded-lg">

            <button class="text-4xl absolute right-2 top-2 hover:text-blue-700" on:click={reset}>X</button>
            <h1 class="text-center text-2xl pt-5"> Login to Plant Trees </h1>

            <div class="mx-10 my-5" style="display: {loginVis ? "block" : "none"}">
                <label for="email" class="block text-md"> Email: </label>
                <input type="email" name="email" class="block w-full p-1" bind:value={email}>
                <button class="float-right bg-slate-500 rounded px-5 py-1 block rounded-t-none" on:click={signUp}> Submit </button>
            </div>

            <p class="text-red-500 mx-10 my-10"> {signUpResult} </p>
        </div>
    </div>
{/if}


<style>

</style>