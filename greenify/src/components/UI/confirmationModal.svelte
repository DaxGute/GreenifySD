<script>    
    export var modalVis
    export var confirmed

    confirmed = false

    function reset(){
        modalVis = false 
    }

    function yes(){
        confirmed = true
    }
</script>

{#if modalVis}
    <div class="w-full h-full bg-blue-900 bg-opacity-50 absolute top-0">
        <div class="bg-slate-100 relative top-1/4 left-1/4 w-2/4 h-1/3 rounded-lg">
            <div class="p-5">
                <p class="text-2xl text-slate-900"> Are you sure? </p>
                <p class="text-m text-slate-500"> Once placed, you cannot change your submission. </p>
                <button on:click={yes} class="text-xl bg-green-300 hover:bg-green-400 rounded-l absolute top-1/2 right-1/2 w-1/2 h-1/2 text-center">Yes</button>
                <button on:click={reset} class="text-xl bg-red-300 hover:bg-red-400 rounded-r absolute top-1/2 left-1/2 w-1/2 h-1/2 text-center">No</button>
            </div>
        </div>
    </div>
{/if}