import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  .App{
   display: flex;
   flex-direction: column;
   .middleContent{
     display: flex;
   }
  }
  body {
    background: ${({ theme }) => theme.pageBackground};
    color: ${({ theme }) => theme.pageText};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  small {
    display: block;
  }
  button {
    display: block;
    outline: 0;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  .leaflet-container{
     height: 400px;
     width: 100%;
  }
`;