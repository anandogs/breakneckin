<script lang="ts">
  export let adventureLocation: string;
  
  export let darkMode: boolean = false;
  export let selectedField: string = "";
  
  let adventureSelected:boolean = false;
  let putNameSelected:boolean = false;
  let hitUsUpSelected:boolean = false;
  let faqsSelected:boolean = false;
  
  if (selectedField === "adventure") {
    adventureSelected = true;
  } else if (selectedField === "putName") {
    putNameSelected = true;
  } else if (selectedField === "hitUsUp") {
    hitUsUpSelected = true;
  } else if (selectedField === "faqs") {
    faqsSelected = true;
  }

  import headerImage from "../images/header/breakneck.svg";
  import burgerClosed from "../images/header/burger_closed.svg";
  import burgerOpen from "../images/header/burger_open.svg";
  let isBurgerOpen: boolean = false;

  const toggleMenu = () => {
    isBurgerOpen = !isBurgerOpen;
  };
</script>

<header>
  <div class="burger">
    <img
      src={burgerClosed}
      alt="Burger Menu Closed"
      style={isBurgerOpen ? "display:none;" : "display:block;"} 
      class:light-mode-svg={!darkMode}
      on:click={toggleMenu}
      on:keydown={toggleMenu}
    />
    <img
      src={burgerOpen}
      alt="Burger Menu Open"
      style={isBurgerOpen ? "display:block;" : "display:none;"}
      class:light-mode-svg={!darkMode}
      on:click={toggleMenu}
      on:keydown={toggleMenu}
    />
  </div>
  <a href="/">
  <img src={headerImage} alt="Breakneck Logo" class="header-image" class:light-mode-svg={!darkMode}/>
</a>
  <ul class:dark-mode={darkMode}>
    <a href="/adventure"><li class:is-selected={adventureSelected}>{adventureLocation}</li></a> 
   <a href="/put-your-name-down"><li class:is-selected={putNameSelected}>PUT YOUR NAME DOWN</li></a>
    <li class:is-selected={hitUsUpSelected}>HIT US UP</li>
    <li class:is-selected={faqsSelected}>FAQs</li>
  </ul>
</header>
<ul class="mobile-menu" style={isBurgerOpen? "display:block":"display:none"}>
    <li style="padding-top: 26.8px; padding-left: 27.89px; font-size: 50px">{adventureLocation}</li>
    <li style="padding-top: 23.67px; padding-left: 81px; font-size: 30px; color: #0349F7;">PUT YOUR NAME DOWN</li>
    <div>
    <li>hit us up</li>
    <li style="color: #EEC124;">FAQs</li>
</div>


</ul>

<style>
  header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    font-family: "Thunderhouse", Fallback, sans-serif;
    color: #000;
  }

  .light-mode-svg {
    filter: invert(100%);
  }

  .header-image {
    padding-top: 35px;
  }

  .burger {
    cursor: pointer;
    padding-top: 54px;
    padding-left: 36.8px;
    padding-right: 30.78px;
  }

  header ul {
    display: none;
  }

  .header-image {
    width: 103px;
  }

  .mobile-menu {
    position: absolute;
    top: 99px;
    left: 0;
    width: 327px;
    background-color: white;
    font-family: "Thunderhouse", Fallback, sans-serif;
  }

  .mobile-menu div {
    display: flex;
    padding-top: 24px;
    padding-bottom: 26px;
    padding-left: 55px;
    padding-right: 77.95px;
    justify-content: space-between;
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    header {
      font-size: 40px;
      justify-content: space-between;
      padding-left: 233px;

    }
    .burger {
      display: none;
    }
    .header-image {
      width: 175px;
      padding-top: 140px;
    }
    header ul {
      display: flex;
      padding-top: 159px;
      padding-right: 188.14px;
      justify-content: space-between;
      max-width: 1005px;
      width: 100%;
    }

    .is-selected {
      color: #0349F7;
    }
    .dark-mode {
      color: #fff;
    }

    .dark-mode .is-selected {
      color: #000;
    }



    .mobile-menu {
      display: none;
    }
  }
</style>
