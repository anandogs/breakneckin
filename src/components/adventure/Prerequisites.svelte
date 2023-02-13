<script lang="ts">
  import type { PrerequisiteParams } from "../../types/introduction";
  export let data: PrerequisiteParams;
</script>

<div class="prerequisites">
  <div class="desktop-image">
    <img src={data.desktopImageSrc} alt={data.desktopImageAlt} width="100%" />
  </div>
  <div class="mobile-image">
    <img src={data.mobileImageSrc} alt={data.mobileImageAlt} width="100%" />
  </div>
  <div class="prerequisites-container">
    <h1>prerequisites</h1>
    <div>
      {#each data.prerequisites as prerequisite}
        <p>{prerequisite}</p>
      {/each}
    </div>
  </div>
</div>

<style>
  .desktop-image {
    display: none;
  }
  .mobile-image {
    display: block;
  }

  .prerequisites {
    padding-top: 100px;
    position: relative;
    overflow: hidden;
    padding-bottom: 300px;
  }
  .prerequisites-container {
    display: block;
    position: absolute;
    background-color: #ff4800;
    border-radius: 50%;
    width: 366px;
    height: 366px;
    top: 320px;
    right: -80px;
  }
  .prerequisites-container h1 {
    position: absolute;
    top: 50px;
    left: 100px;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 31px;
    color: #000000;
  }
  .prerequisites-container div {
    position: absolute;
    width: 367px;
    height: 300px;
    height: 180px;
    width: 197.36px;
    top: 100px;
    left: 60px;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
line-height: 15px;
    text-align: center;
    color: #000000;
  }

  @media (min-width: 1024px) {
    .prerequisites {
      padding-top: 100px;
      position: relative;
      padding-bottom: 0px;
    }
    .desktop-image {
      display: block;
    }
    .mobile-image {
      display: none;
    }
    .prerequisites-container {
      display: block;
      position: absolute;
      background-color: #ff4800;
      border-radius: 50%;
      width: 566px;
      height: 566px;
      top: 30px;
      left: -50px;
    }
    .prerequisites-container h1 {
      position: absolute;
      top: 97px;
      left: 150px;
      font-style: normal;
      font-weight: 400;
      font-size: 60px;
      line-height: 62px;
      color: #000000;
    }
    .prerequisites-container div {
      position: absolute;
      width: 367px;
      height: 300px;
      top: 180px;
      left: 106px;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      color: #000000;
    }
  }
</style>
