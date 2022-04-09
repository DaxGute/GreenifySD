<script>
    import { onMount } from "svelte";
    let canvas
    let mouseXVel = 0
    onMount(()=>{
        let ctx = canvas.getContext("2d");
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