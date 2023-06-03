import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-green: #00875F;
    --color-green-light: #00B37E;
    --color-red-danger: #F75A68;
    --color-gray1: #121214;
    --color-gray2: #202024;
    --color-gray3: #323238;
    --color-gray4: #7C7C8A;
    --color-gray5: #8D8D99;
    --color-gray6: #C4C4CC;
    --color-gray7: #E1E1E6;
    --color-white: #FFFFFF;

    font-size: 60%;
  }


  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray1);
    color: var(--color-white);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
