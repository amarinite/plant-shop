import { css, styled } from "styled-components";

const variations = {
  primary: css`
    background-color: var(--color-primary-900);
    color: var(--color-primary-50);

    &:hover {
      background-color: var(--color-primary-700);
      box-shadow: var(--shadow-lg);
    }
  `,
  secondary: css`
    background-color: transparent;
    color: var(--color-primary-900);
    border: 1px solid var(--color-primary-900);

    &:hover {
      box-shadow: var(--shadow-lg);
      /* border: none;
      background-color: var(--color-secondary-700);
      color: var(--color-primary-50); */
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  padding: 1rem 1.2rem;
  font-weight: 500;
  width: 100%;

  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
};

export default Button;
