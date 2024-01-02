import { styled } from "styled-components";
import PlantItem from "./PlantItem";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import Sort from "../../ui/Sort";
import { useEffect, useState } from "react";
import { usePlants } from "./usePlants";
import { useSearchParams } from "react-router-dom";

const StyledPlantsList = styled.section`
  background-color: var(--color-primary-50);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function PlantsList() {
  const { isLoading, plants } = usePlants();
  const [searchParams] = useSearchParams();

  const filters = Object.fromEntries([...searchParams]);

  let filteredPlants;

  if (isLoading) return <Spinner />;

  return (
    <>
      <StyledPlantsList>
        <h2>Plant List</h2>
        <Sort />
        {plants?.map((plant) => (
          <PlantItem plant={plant} key={plant.id} />
        ))}
        <Pagination />
      </StyledPlantsList>
    </>
  );
}

export default PlantsList;
