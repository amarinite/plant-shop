import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 20rem;
  ${Button} {
    width: fit-content;
  }
`;

function PageNotFound() {
  return (
    <NotFound>
      <h2>Page Not Found</h2>
      <p>Unfortunately, the page you are looking for does not exist.</p>
      <Button>
        <NavLink to="/"> Go back to shopping</NavLink>
      </Button>
    </NotFound>
  );
}

export default PageNotFound;
