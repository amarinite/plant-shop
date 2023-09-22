import { styled } from "styled-components";
import PlantItem from "./PlantItem";
import { getPlants } from "../../services/apiPlants";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineSquares2X2, HiOutlineListBullet } from "react-icons/hi2";

const StyledPlantsList = styled.section`
  background-color: var(--color-primary-50);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function PlantsList() {
  const {
    isLoading,
    data: plants,
    error,
  } = useQuery({
    queryKey: ["plant"],
    queryFn: getPlants,
  });

  if (isLoading) return;

  return (
    <StyledPlantsList>
      <h2>Plant List</h2>
      <div>
        <p>Sort by...</p>
        <select>
          <option value="nameAscending">Name (ascending)</option>
          <option value="nameDescending">Name (descending)</option>
          <option value="priceHigher">Price (higher first)</option>
          <option value="priceLower">Price (lower first)</option>
        </select>
        <HiOutlineSquares2X2 />
        <HiOutlineListBullet />
      </div>
      {plants.map((plant) => (
        <PlantItem plant={plant} key={plant.id} />
      ))}
    </StyledPlantsList>
  );
}

export default PlantsList;
