import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 1.6rem;
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">All our plants</StyledNavLink>
        <StyledNavLink to="/">Contact us</StyledNavLink>
        <input type="text" placeholder="Search your plant..." />
        <li>
          <StyledNavLink to="/">
            <HiOutlineUser />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/">
            <HiOutlineShoppingCart />
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
