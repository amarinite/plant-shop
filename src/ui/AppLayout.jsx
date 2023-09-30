import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  background-color: var(--color-primary-50);
  scrollbar-gutter: stable;
`;

const Container = styled.div`
  margin: 0 5rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Container>
        <Outlet />
      </Container>

      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
