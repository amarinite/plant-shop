import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  background-color: var(--color-primary-50);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />

      <Outlet />

      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
