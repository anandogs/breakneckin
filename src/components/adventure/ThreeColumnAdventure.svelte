<script lang="ts">
  import type { AdventureColumnParams } from "../../types/introduction";
  export let data: AdventureColumnParams[];
  
</script>

<section>
  {#each data as adventure, i}
    <div
      class="adventure"
      class:no-border={adventure.noBorderBottom}
      class:no-border-bottom-desktop={adventure.noBarBottomDesktop}
      class:no-border-bottom-mobile={adventure.noBarBottomMobile}
      class:desktop-padding={i > 0}
    >
      {#if !adventure.noBarLeft}
        <div class="left-border" />
      {/if}
      <div class="adventure-heading" class:hidden={adventure.noDayDateOptional}>
        <h4 class="day">
          {adventure.day ? adventure.day : ""}
        </h4>
        <h4 class="date">
          {adventure.date ? adventure.date : ""}
        </h4>
        <h4 class="optional">
          {adventure.optionalField ? adventure.optionalField : ""}
        </h4>
      </div>
      <div class="time-description">
        {#each adventure.timeDescription as td}
          <div class="time-description-item">
            <h4>{td.time ? td.time : ""}</h4>
            <p>{td.description}</p>
          </div>
        {/each}
      </div>
    </div>
  {/each}
  {#if data.length < 3 && !data[data.length-1].noBarBottomDesktop}
    <div class="adventure-desktop" />
  {/if}
  
</section>

<style>
  h4 {
    font-family: "Thunderhouse";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 12px;
    color: #000000;
  }
  .adventure {
    padding-bottom: 15px;
    border-bottom: 1px solid black;
    margin-bottom: 15px;
  }

  .left-border {
    display: none;
  }

  .no-border {
    padding-bottom: 0px;
    border-bottom: none;
    margin-bottom: 0px;
  }

  .adventure-heading {
    height: 45px;
    position: relative;
    padding-bottom: 15px;
  }

  .day {
    font-size: 25px;
    line-height: 26px;
    color: #0349f7;
  }
  .optional {
    font-size: 15px;
    line-height: 16px;
    color: #8bcee3;
    position: absolute;
    top: 0px;
    left: 60px;
  }
  .date {
    font-size: 30px;
    line-height: 31px;
    color: #000000;
    position: absolute;
    top: 15px;
    left: 10px;
    transform: rotate(-2.14deg);
  }

  .hidden {
    display: none;
  }

  .time-description {
    padding-left: 29px;
  }

  .time-description-item {
    display: grid;
    row-gap: 7px;
    padding-bottom: 20px;
  }
  .no-border-bottom-mobile {
    border-bottom: none;
  }

  @media (min-width: 1024px) {
    h4 {
      font-size: 40px;
    }
    

    .day {
      font-size: 40px;
      line-height: 41px;
    }
    .date {
      font-size: 65px;
      line-height: 67px;
      top: 22px;
      left: 10px;
    }

    .optional {
      font-size: 30px;
      line-height: 31px;
      left: 100px;
    }

    section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin: 0 11vw 0 13vw;
    }
    .left-border {
      display: block;
      position: absolute;
      left: 0;
      top: 7.5%;
      bottom: 7.5%;
      border-right: 1px solid #000;
    }
    .adventure {
      padding-left: 0px;
      padding-right: 21px;
      position: relative;
      padding-bottom: 30px;
    }

    .adventure-desktop {
      border-bottom: 1px solid black;
      margin-bottom: 15px;
      padding-left: 0px;
      padding-right: 21px;
      position: relative;
      padding-bottom: 30px;
    }

    .adventure-heading {
      height: 95px;
      margin-top: 30px;
    }
    .desktop-padding {
      padding-left: 43px;
    }

    .time-description {
      padding-left: 0px;
    }
    .time-description-item {
      row-gap: 20px;
      padding-bottom: 47px;
    }
    .no-border {
      padding-bottom: 15px;
      border-bottom: 1px solid black;
      margin-bottom: 15px;
    }

    .hidden {
      display: block;
    }
    .no-border-bottom-desktop {
      border-bottom: none;
    }
  }
</style>
