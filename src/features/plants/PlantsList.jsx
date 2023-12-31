import { styled } from "styled-components";
import PlantItem from "./PlantItem";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import Sort from "../../ui/Sort";
import { useEffect, useState } from "react";
import { usePlants } from "./usePlants";

const StyledPlantsList = styled.section`
  background-color: var(--color-primary-50);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function PlantsList() {
  const { isLoading, plants } = usePlants();
  // const [sortBy, setSortBy] = useState("default");
  // const [sortedPlants, setSortedPlants] = useState([]);

  // const handleInputChange = (i) => {
  //   setSortBy(i);
  // };

  // const sortPlants = () => {
  //   switch (sortBy) {
  //     case "nameAscending":
  //       console.log("nameA");
  //       console.log(sortedPlants);
  //       setSortedPlants(plants);
  //       break;
  //     case "nameDescending":
  //       console.log("nameD");
  //       setSortedPlants(plants);
  //       break;
  //     case "priceHigher":
  //       console.log("priceH");
  //       setSortedPlants(plants);
  //       break;
  //     case "priceLower":
  //       console.log("priceL");
  //       setSortedPlants(plants);
  //       break;
  //     default:
  //       setSortedPlants(plants);
  //   }
  // };

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
