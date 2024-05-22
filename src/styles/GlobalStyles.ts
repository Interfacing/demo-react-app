import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  /* Add more global styles here */
`;

export default GlobalStyle;
