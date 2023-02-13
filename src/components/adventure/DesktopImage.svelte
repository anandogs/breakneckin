<script lang="ts">
    import type { ImageParams } from "../../types/introduction";
    
    export let data: ImageParams;
    
</script>
<div class:margin={data.imageHasMargin}>
    <img src={data.imageSrc} alt={data.imageAlt} width="100%"/>
</div>
<style>

    div {
        display: none;
    }
    
    @media (min-width: 1024px) {
        div {
            display: block;            
        }
        .margin {
            margin-right: 11vw;
            
        }
    }
</style>