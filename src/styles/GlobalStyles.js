import { createGlobalStyle } from "styled-components";

// inspo credit https://www.behance.net/gallery/128175175/Greenie-Plant-Nursery-Landing-Page

const GlobalStyles = createGlobalStyle`
:root {
  /* Greenish */
  --color-primary-50: #fbfcf9;
  --color-primary-100: #f0f5eb;
  --color-primary-200: #d1e2c3;
  --color-primary-300: #c1d8af;
  --color-primary-400: #b2cf9c;
  --color-primary-500: #a3c588;
  --color-primary-600: #93bb74;
  --color-primary-700: #84b160;
  --color-primary-800: #74a84c;
  --color-primary-900: #659e38;
  --color-primary-900: #659e38;

    /* Yellowish */
  --color-secondary-50: #f4f5ec;
  --color-secondary-100: #e8ebd8;
  --color-secondary-200: #dde2c5;
  --color-secondary-300: #d1d8b1;
  --color-secondary-400: #c6ce9e;
  --color-secondary-500: #bac48b;
  --color-secondary-600: #afba77;
  --color-secondary-700: #a3b164;
  --color-secondary-800: #98a750;
  --color-secondary-900: #8c9d3d;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #eaeaea;
  --color-grey-100: #d4d4d4;
  --color-grey-200: #bfbfbf;
  --color-grey-300: #a9a9a9;
  --color-grey-400: #949494;
  --color-grey-500: #7f7f7f;
  --color-grey-600: #545454;
  --color-grey-700: #3e3e3e;
  --color-grey-800: #292929;
  --color-grey-900: #212121;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
