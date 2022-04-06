import { css } from '@emotion/react';

export default css`
  * {
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    -webkit-font-smoothing: 'antialiased';
    -moz-osx-font-smoothing: 'grayscale';
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New,
      monospace;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #__next {
    isolation: isolate;
  }
`;
