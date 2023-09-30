import { styled } from "styled-components";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

const Logo = styled.p`
  color: var(--color-primary-900);
  font-size: 3rem;
  font-family: "Nunito", sans-serif;
`;

const Searchbar = styled.input`
  background-color: var(--color-primary-100);
  padding: 0.8rem 10rem 0.8rem 1rem;
  border: none;
  border-radius: 15px;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo>Greenie</Logo>
      <Searchbar type="text" placeholder="Search your plant..." />
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
