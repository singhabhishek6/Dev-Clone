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

`;
