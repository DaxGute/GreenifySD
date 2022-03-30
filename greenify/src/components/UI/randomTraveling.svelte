<script>
    import { onMount } from "svelte";
    var canvas
    var mouseXVel = 0
    onMount(()=>{
        var ctx = canvas.getContext("2d");
        requestAnimationFrame(runVisual);

        function runVisual(){
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            requestAnimationFrame(runVisual);
        }
    })

    function mouseMove(event){
        mouseXVel = event.clientX
    }
</script>

<canvas bind:this={canvas} on:mousemove={mouseMove} class="w-full h-full"></canvas>