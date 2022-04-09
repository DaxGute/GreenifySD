<script>
    export let modalVis
    modalVis = false

    function reset(){
        modalVis = false
    }

    $: {
        if (modalVis){
            setTimeout(()=>{
                modalVis = false
            }, 5000)
        }
    }
    
</script>

{#if modalVis}
    <div class="bg-red-200 absolute top-5 left-5 rounded-lg outline-4 outline-red-400">
        <p class="text-xl text-center text-red-900 pt-5 pb-0"> Instructions </p>
        <div class="m-10 pt-0">
            <ol class="list-decimal">
                <li class="text-red-900"> Click anywhere on the screen </li>
                <li class="text-red-900"> Then select the green + button </li>
                <li class="text-red-900"> Confirm your choice </li>
            </ol>
            <p class="text-red-900"><strong>Note:</strong> Once confirming your choice, you cannot go back</p>
        </div>
        <button class="text-4xl absolute right-2 top-2 hover:text-red-900 text-red-800" on:click={reset}>X</button>

    </div>
{/if}