<script lang="ts">
  import logo from "../images/header/breakneck.svg";
  import instagramLogo from "../images/footer/instagram.svg";
  export let isDarkMode: boolean = false;
  const currentYear = new Date().getFullYear();
</script>

<footer class:dark-mode={isDarkMode}>
  <div>
    <img
      class:light-mode-svg={isDarkMode}
      src={logo}
      alt="logo"
      class="logo-footer"
    />
  </div>
  <div class="footer-menu">
    <!-- <div class="footer-menu-items" id='uppercase-items'> -->
    <a href="/policies/terms-and-conditions"> TERMS & CONDITIONS </a>
    <a style="justify-self: center;" href="/policies/privacy-policy">
      PRIVACY POLICY
    </a>
    <a style="justify-self: end;" href="/policies/refunds-and-cancellations">
      REFUNDS & CANCELLATIONS
    </a>
    <!-- </div> -->
    <!-- <div class="footer-menu-items"> -->
    <div id="copyright">© Breakneck {currentYear}</div>
    <a
      id="instagram-logo"
      href="https://www.instagram.com/breakneck.in/"
      target="_blank"
      rel="noreferrer"
      ><img
        class:light-mode-svg={isDarkMode}
        src={instagramLogo}
        alt="Instagram Logo"
        class="instagram-logo"
      /></a
    >
    <!-- </div> -->
    <!-- <div class="footer-menu-items"> -->
    <div id="address">B2 Hawa Apartments, Andheri East, Mumbai, India</div>
    <div id="tide"><a href="https://www.tidextide.com" target="_blank" rel="noreferrer">Website by Tide x Tide</a></div>
    <!-- </div> -->
  </div>
</footer>

<style>
  footer {
    background-color: black;
    color: white;
    display: grid;
    row-gap: 19.48px;
    font-family: "Brother", Fallback, sans-serif;
    padding-left: 57px;
  }
  .instagram-logo {
    width: 9px;
  }
  .logo-footer {
    width: 74px;
    padding-top: 31px;
  }
  .footer-menu {
    display: grid;
    width: 75vw;
    max-width: 270px;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 5px;
    font-size: 6px;
    line-height: 9px;
    padding-bottom: 27.58px;
  }

  #copyright {
    grid-row: 2;
    grid-column: 1;
  }
  #instagram-logo {
    grid-row: 2;
    grid-column: 3;
    justify-self: end;
  }
  #address {
    grid-row: 3;
    grid-column-start: 1;
    grid-column-end: span 2;
  }
  #tide {
    grid-row: 3;
    grid-column: 3;
    justify-self: end;
  }

  .dark-mode {
    background-color: white;
    color: black;
  }

  .light-mode-svg {
    filter: invert(100%);
  }

  @media (min-width: 1024px) {
    footer {
      width: 87vw;
      max-width: 87vw;
      display: grid;
      padding-left: 13vw;

      padding-bottom: 80px;
    }
    .footer-menu {
      padding-left: 0px;
      width: auto;
      max-width: fit-content;
      row-gap: 20px;
      font-size: 16px;
      line-height: 25px;
      padding-top: 50px;
    }
    .logo-footer {
      width: 168px;
      padding-top: 100px;
    }
    .instagram-logo {
      width: 26px;
    }
  }

  @media (min-width: 1200px) {
    footer {
      display: flex;
    }
    .footer-menu {
      padding-left: 86px;
      padding-top: 130px;
    }
  }
</style>
