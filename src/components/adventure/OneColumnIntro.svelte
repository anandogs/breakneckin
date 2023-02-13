<script lang="ts">

import type { OneColumnParams } from "../../types/introduction";

  export let data: OneColumnParams;
</script>

<section>
  <h2>{data.heading}</h2>
  {#each data.body.content as content}
    <p>{content.content[0].value}</p>
  {/each}
</section>

<style>
  @media (min-width: 1024px) {
  section {
      margin-left: 13vw;
      width: 34vw;
      max-width: 591px;
    }
  }
</style>
