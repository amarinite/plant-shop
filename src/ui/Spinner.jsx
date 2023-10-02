import { styled } from "styled-components";

const StyledSpinner = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 350px;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading-spinner {
    width: 6rem;
    height: 6rem;
    border: 10px solid var(--color-grey-100);
    border-top: 10px solid var(--color-secondary-600);
    border-radius: 50%;
    animation: spinner 1s linear infinite;
  }
`;

function Spinner() {
  return (
    <StyledSpinner>
      <div className="loading-spinner"></div>
    </StyledSpinner>
  );
}

export default Spinner;
