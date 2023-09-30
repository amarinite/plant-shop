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

const StyledSort = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  select {
    appearance: none;
    /* safari */
    -webkit-appearance: none;
    font-size: 1.2rem;
    padding: 0.5rem 6rem 0.5rem 1.5rem;
    background-color: white;
    border: 1px solid var(--color-grey-200);
    border-radius: 15px;
    cursor: pointer;
  }

  div {
    margin-left: auto;
  }
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
      <StyledSort>
        <p>Sort by...</p>
        <select>
          <option value="nameAscending">Name (ascending)</option>
          <option value="nameDescending">Name (descending)</option>
          <option value="priceHigher">Price (higher first)</option>
          <option value="priceLower">Price (lower first)</option>
        </select>
        <div>
          <HiOutlineSquares2X2 />
          <HiOutlineListBullet />
        </div>
      </StyledSort>
      {plants.map((plant) => (
        <PlantItem plant={plant} key={plant.id} />
      ))}
    </StyledPlantsList>
  );
}

export default PlantsList;
