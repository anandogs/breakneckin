<script lang="ts">
  import type { NestedColumnParams } from "../../types/introduction";
  export let data: NestedColumnParams;
</script>

<section>
  {#each data.nestedBody as nestedBody, i}
    <div>
      <!-- Cases where there is a heading after the first loop -->
      {#if nestedBody.heading && i > 0}
      <div class="heading-padding-mobile"/>
      {/if}
      <h2>{nestedBody.heading ? nestedBody.heading : ""}</h2>
      <div class="multi-para">
        {#each nestedBody.body.content as content}
          <p>{content.content[0].value}</p>
        {/each}
      </div>
    </div>
  {/each}
</section>

<style>
  .multi-para {
    display: grid;
    row-gap: 5px;
  }
  section h2 {
    min-height: 15px;
  }
  .heading-padding-mobile {
    height: 30px;
  }

  @media (min-width: 1024px) {
    section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 49px;
      margin: 0 11vw 0 13vw;
    }
    .multi-para {
    row-gap: 15px;
  }
  .heading-padding-mobile {
    display: none;
  }
  }
</style>
