import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { Theme } from "./themes";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${normalize}
  
  *, ::before, ::after {
    border-width: 0;
    border-style: solid;
    border-color: theme('borderColor.DEFAULT', currentColor);
  }

  blockquote, dl, dd, h1, h2, h3,
  h4, h5, h6, hr, figure, p, pre {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  img, svg, video, canvas, audio, 
  iframe, embed, object {
    display: block;
  }

  body {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text[100]};
  }

  input[type=text] {
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text[100]};
    caret-color: ${({ theme }) => theme.colors.primary};
  }
  input[type=text]:focus-visible {
    outline: none;
  }
`;

export default GlobalStyle;
