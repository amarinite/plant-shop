import { styled } from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-grey-700);
  padding: 2rem 5rem;
  color: var(--color-grey-50);
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Greenie</p>
      <p>Copyright 2023</p>
      <p>All rights reserved</p>
    </StyledFooter>
  );
}

export default Footer;
