<script>
    export let plantConfirmed
    plantConfirmed = false

    import LoginModal from "./modals/loginModal.svelte"
    import ConfirmationModal from "./modals/confirmationModal.svelte"
    import PlantingInstructionsModal from "./modals/plantingInstructions.svelte"
    import { onMount } from "svelte";

    let loginModalDisplay = false
    function toggleLoginModal(){
        loginModalDisplay = !loginModalDisplay
    }
    let confirmationModalDisplay = false
    function toggleConfirmationModal(){
        confirmationModalDisplay = !confirmationModalDisplay
    }

    let plantTreeMode = false
    onMount(() => {
        let url = new URL(window.location.href)
        if (url.searchParams.has('email') && url.searchParams.has('key')){
            plantTreeMode = true
        }
    })
</script>

<LoginModal bind:modalVis = {loginModalDisplay}/>
<ConfirmationModal bind:modalVis = {confirmationModalDisplay} bind:confirmed = {plantConfirmed}/>
<PlantingInstructionsModal modalVis = {plantTreeMode}/>

{#if !loginModalDisplay && !confirmationModalDisplay} 
    {#if !plantTreeMode}
        <div class="inline-flex items-center absolute bottom-10 left-1/2 -translate-x-1/2">
            <button on:click = {toggleLoginModal} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">Plant Your Own Tree</button>
        </div>
    {:else}
        <div class="inline-flex items-center absolute bottom-10 left-1/2 -translate-x-1/2">
            <button on:click = {toggleConfirmationModal} class="bg-green-500 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full text-3xl">+</button>
        </div>
    {/if}
{/if}

