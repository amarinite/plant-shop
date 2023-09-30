import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;

  .active {
    color: var(--color-primary-900);
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 1.6rem;
  }

  & svg {
    display: flex;
    align-items: center;
    color: var(--color-primary-900);
    font-size: 2.5rem;
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">All our plants</StyledNavLink>
        <StyledNavLink to="/contact-us">Contact us</StyledNavLink>
        <StyledNavLink to="/about-us">About us</StyledNavLink>
        {/* <li>
          <StyledNavLink to="/">
            <HiOutlineUser />
          </StyledNavLink>
        </li> */}

        <StyledNavLink to="/">
          <HiOutlineShoppingCart />
        </StyledNavLink>
      </NavList>
    </nav>
  );
}

export default MainNav;
