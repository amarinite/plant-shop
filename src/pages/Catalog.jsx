import { styled } from "styled-components";
import PlantsFilters from "../features/plants/PlantsFilters";
import PlantsList from "../features/plants/PlantsList";

const Main = styled.main`
  display: grid;
  grid-template-columns: 24rem 1fr;
  gap: 4rem;
  margin: 3rem 11rem;
  /* min-height: 100vh; */
`;

function Catalog() {
  return (
    <Main>
      <PlantsFilters />
      <PlantsList />
    </Main>
  );
}

export default Catalog;
