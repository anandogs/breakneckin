<script lang="ts">
  import type { ImageParams } from "../../types/introduction";

  export let data: ImageParams;
</script>

<div>
  <img src={data.imageSrc} alt={data.imageAlt} width="100%" />
</div>

<style>
  @media (min-width: 1024px) {
    div {
      display: none;
    }
  }
</style>
