import { styled } from "styled-components";
import PlantItem from "./PlantItem";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import Sort from "../../ui/Sort";
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

  const getFilters = () => {
    const entries = Array.from(searchParams);
    return entries
      .map((entry) => entry.pop())
      .map((entry) => (entry.includes(",") ? entry.split(",") : entry))
      .flat();
  };

  let filteredPlants;

  if (getFilters().length > 0 && plants) {
    filteredPlants = plants.filter((plant) => {
      const filters = getFilters();
      const plantValues = Object.values(plant);
      const plantValuesLC = plantValues.map((value) =>
        typeof value === "string" ? value.toLowerCase() : value
      );
      return filters.some((item) => plantValuesLC.includes(item.toLowerCase()));
    });
  } else if (plants) {
    filteredPlants = plants;
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <StyledPlantsList>
        <h2>Plant List</h2>
        <Sort />
        {plants &&
          filteredPlants.map((plant) => (
            <PlantItem plant={plant} key={plant.id} />
          ))}
        <Pagination />
      </StyledPlantsList>
    </>
  );
}

export default PlantsList;
