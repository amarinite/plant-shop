import styled from "styled-components";

const Pages = styled.div`
  margin: 2rem auto 1rem auto;
  display: flex;
  gap: 2rem;
`;

const Page = styled.button`
  border: none;
  height: 3rem;
  width: 3rem;
  background-color: var(--color-secondary-400);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Pagination() {
  return (
    <Pages>
      <Page>1</Page>
      <Page>2</Page>
      <Page>...</Page>
      <Page>5</Page>
    </Pages>
  );
}

export default Pagination;
