import { styled } from "styled-components";
import PlantItem from "./PlantItem";
import { getPlants } from "../../services/apiPlants";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import Sort from "../../ui/Sort";
import { useState } from "react";

const StyledPlantsList = styled.section`
  background-color: var(--color-primary-50);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function PlantsList() {
  const [sortBy, setSortBy] = useState("default");
  const [sortedPlants, setSortedPlants] = useState([]);

  const handleInputChange = (i) => {
    setSortBy(i);
  };

  const {
    isLoading,
    data: plants,
    error,
  } = useQuery({
    queryKey: ["plant"],
    queryFn: getPlants,
  });

  const sortPlants = () => {
    switch (sortBy) {
      case "nameAscending":
        console.log("nameA");
        return plants;
      case "nameDescending":
        console.log("nameD");
        return plants;
      case "priceHigher":
        console.log("priceH");
        return plants;
      case "priceLower":
        console.log("priceL");
        return plants;
      default:
        return plants;
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <StyledPlantsList>
        <h2>Plant List</h2>
        <Sort onInputChange={handleInputChange} />
        {sortedPlants.map((plant) => (
          <PlantItem plant={plant} key={plant.id} />
        ))}
        <Pagination />
      </StyledPlantsList>
    </>
  );
}

export default PlantsList;
