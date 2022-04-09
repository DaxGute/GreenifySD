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
    <div class="absolute w-56 h-30 bg-green-300 outline-double outline-2 outline-green-400">
        <p class="text-center text-green-900 text-4xl">Success!!</p>
        <p class="text-center text-green-900 text-xl">{result}</p>
    </div>
{/if}