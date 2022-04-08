<script>
    export var plantConfirmed
    plantConfirmed = false

    import LoginModal from "./loginModal.svelte"
    import ConfirmationModal from "./confirmationModal.svelte"
    import { onMount } from "svelte";

    var loginModalDisplay = false
    function toggleLoginModal(){
        loginModalDisplay = !loginModalDisplay
    }
    var confirmationModalDisplay = false
    function toggleConfirmationModal(){
        confirmationModalDisplay = !confirmationModalDisplay
    }

    var plantTreeMode = false
    onMount(() => {
        var url = new URL(window.location.href)
        if (url.searchParams.has('email') && url.searchParams.has('key')){
            plantTreeMode = true
        }
    })
</script>

<LoginModal bind:modalVis = {loginModalDisplay}/>
<ConfirmationModal bind:modalVis = {confirmationModalDisplay} confirmed = {plantConfirmed}/>

{#if !loginModalDisplay && !confirmationModalDisplay} 
    {#if !plantTreeMode}
        <div class="inline-flex items-center absolute bottom-10 left-1/2 -translate-x-1/2">
            <button class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-5 rounded-l-full">+</button>
            <button on:click = {toggleLoginModal} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">Plant Trees</button>
            <button class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-5 rounded-r-full">+</button>
        </div>
    {:else}
        <div class="inline-flex items-center absolute bottom-10 left-1/2 -translate-x-1/2">
            <button on:click = {toggleConfirmationModal} class="bg-green-500 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full text-3xl">+</button>
        </div>
    {/if}
{/if}