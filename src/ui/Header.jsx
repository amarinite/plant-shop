import { styled } from "styled-components";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  background-color: lavender;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

const Logo = styled.img`
  background-color: lavenderblush;
  width: 20rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo src="https://begreen-site.imgix.net/build/begreen/images/begreen-logo.png?auto=format" />
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
