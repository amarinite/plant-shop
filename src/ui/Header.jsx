import { styled } from "styled-components";
import MainNav from "./MainNav";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;
  border-bottom: 1px solid var(--color-grey-100);
  box-shadow: var(--shadow-sm);

  position: sticky;
  top: 0;
  background-color: var(--color-primary-50);
  z-index: 1;
`;

const Logo = styled.p`
  color: var(--color-primary-900);
  font-size: 3rem;
  font-family: "Nunito", sans-serif;
`;

const Searchbar = styled.input`
  background-color: var(--color-primary-100);
  padding: 0.8rem 12rem 0.8rem 2rem;
  border: none;
  border-radius: 15px;
  color: var(--color-grey-600);
`;

function Header() {
  return (
    <StyledHeader>
      <NavLink to="/">
        <Logo>Greenie</Logo>
      </NavLink>
      <Searchbar type="text" placeholder="Search your plant..." />
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
