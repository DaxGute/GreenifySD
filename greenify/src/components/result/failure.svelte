<script>
    export let modalVis
    export let result
    modalVis = false

    $: {
        if (modalVis){
            setTimeout(()=>{
                modalVis = false
                location.href = 'http://localhost:3000';
            }, 5000)
        }
    }
</script>

{#if modalVis}
    <div class="absolute w-56 h-30 bg-red-300 outline-double outline-2 outline-red-400">
        <p class="text-center text-red-900 text-4xl">Oops something went wrong :(</p>
        <p class="text-center text-red-900 text-xl">{result}</p>
    </div>
{/if}