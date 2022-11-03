import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  
  html,
  body {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  @media only screen and (max-width: 480px) {
  html {
    font-size: 35%;
  }
}
`;

export const PagesContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;
