<script>
    import "../app.css";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">

<!-- <canvas></canvas> -->
<p>Coded by <a href="https://daxton2.wixsite.com/my-site">Daxton Gutekunst</a> </p>

<style>
    :global(p){
        font-family: 'Ubuntu', sans-serif;
    }
    p{
        font-size: 1 vh;
        font: #1f1f1f1f;
        position:absolute;
        bottom: 0%;
        right: 1%;
    }
    /* canvas{
        position: absolute;
        width: 100%;
        height: 100%;
    } */
</style>

<slot> Page not loading into Layout</slot>