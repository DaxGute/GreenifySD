<script>
    import { onMount } from "svelte";

    var canvas
    var context
    onMount(()=>{
        context = canvas.getContext("2d")
    })
    
    function addPoint(){
        context.clearRect(0, 0, canvas.width, canvas.height);

    }
</script>

<canvas bind:this={canvas} on:click={addPoint} class="w-screen h-screen absolute top-0 left-0"></canvas>