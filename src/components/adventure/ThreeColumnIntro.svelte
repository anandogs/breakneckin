<script lang="ts">
    import type { NestedColumnParams } from "../../types/introduction";
    export let data: NestedColumnParams;
</script>
<section>
    {#each data.nestedBody as nestedBody}
    <div>
    <h2>{nestedBody.heading? nestedBody.heading: ''}</h2>
        {#each nestedBody.body.content as content}
            <p>{content.content[0].value}</p>
        {/each}
      </div>    
    {/each}
  </section>
  <style>
    @media (min-width: 1024px) {
      section {
        display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 49px;
    margin: 0 11vw 0 13vw;
      }

    }
  </style>
  
  