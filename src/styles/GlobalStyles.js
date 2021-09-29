import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


.theme{
    --primary-color: white;
    --primary-color-light: rgb(249,249,249);
    --background-color:#EFEFEF;
    --sideCard-color:rgb(239,239,239);
    --card-border:rgb(215,215,215);
    --active-button:rgb(59,73,223);
    --tag-color:rgb(161,161,161);
    --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --main-0: #f9fafa;
  --main-1: #eef0f1;
  --main-2: rgb(214,214,215);
  --main-3: #b5bdc4;
  --main-4: #99a3ad;
  --main-5: #7d8a97;
  --main-6: rgba(0,0,0,.9);
  --main-7: #4d5760;
  --main-8: #363d44;
  --main-9: #202428;

  --main-a: rgba(8, 9, 10, 0.05);

  --main-theme: #3b49df;
  --main-theme-darker: #1827ce;
  --main-theme-lighter: #8d95f2;

  --theme-background: #eef0f1;
  --font-color: #08090a;

  --site-width: 1280px;

  --header-height: 56px;
  --header-bg: #fff;
}

.overlay {
  background-color: black;
  opacity: 0.5;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 300;
}

.main-container {
  height: 100vh;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  padding: 1rem 3rem;

  display: grid;
  grid-template-columns: 240px 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem 1rem;
}
@media screen and (max-width: 805px) {

    .community{
      width: 100%;
      position: sticky;
      top: 0;
      background-color: white;
      display: flex !important;
      align-items: center;
      font-size: 18px;
      transform: translateX(0%) !important;
      z-index: 1000;
      overflow: hidden;
      margin-left: -10px;
      z-index: 200;
      font-weight: 700;
      justify-content: space-between;
      line-height: 40px;
      padding: 5px 10px;
      border-bottom: 1px solid rgba(0,0,0,.2);
      transition: 300ms ease-in-out;

      margin-bottom: 10px;
      & span{
        display: flex;
      align-items: center;
      }
      & span>svg{
        height: 23px;
        width: 23px;
      }
    }
    .show{
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      background-color: white;
      overflow-y: scroll;
      z-index: 500 !important;
      transform: translateX(0%);
      padding-left: 10px;
      padding-right: 10px;
      transition: 300ms ease-in-out;

    
    }
  }

`;
