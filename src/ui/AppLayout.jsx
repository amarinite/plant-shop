import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  background-color: orangered;
`;

const Main = styled.main`
  background-color: yellowgreen;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
