<script lang="ts">
  import logo from "../images/header/breakneck.svg";
  import instagramLogo from "../images/footer/instagram.svg";
</script>

<footer>
  <div>
    <img src={logo} alt="logo" class="logo-footer" />
  </div>
  <div class="footer-menu">
    <div class="footer-menu-items" id='uppercase-items'>
        <div>
            TERMS & CONDITIONS
        </div>
        <div>
            PRIVACY POLICY
        </div>
        <div>
            TERMS & CONDITIONS
        </div>
    </div>
    <div class="footer-menu-items">
        <div>© Breakneck 2022</div>
        <img src={instagramLogo} alt="Instagram Logo" class="instagram-logo">
    </div>
    <div class="footer-menu-items">
        <div>B2 Hawa Apartments, Andheri East, Mumbai, India</div>
        <div>Website by Tide x Tide</div>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: black;

    color: white;
    display: grid;
    row-gap: 19.48px;
    font-family: 'Brother', Fallback, sans-serif;
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
    grid-template-rows: 3;
    row-gap: 5px;
    font-size: 6px;
    line-height: 9px;
    padding-bottom: 27.58px;
  }
  .footer-menu-items {
    display: flex;
    justify-content: space-between;
    
  }
  #uppercase-items {
    font-size: 6px;
    line-height: 7.2px;
    letter-spacing: 0.05em;
    text-transform: uppercase;    
  }

  @media (min-width: 1024px) {
    footer {
        display: flex;
      padding-left: 230px;
      padding-right: 407px;
      padding-bottom: 80px; 
    }
    .footer-menu {
        padding-left: 86.81px;
        width: 44vw;
        max-width: 764px;
        row-gap: 20px;
        font-size: 16px;
    line-height: 25px;
    padding-top: 131px;
    }
    #uppercase-items {
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;    
  }

    .logo-footer {
      width: 240.19px;
      padding-top: 76px;
    }
    .instagram-logo {
    width: 26px;
  }
  }
</style>
