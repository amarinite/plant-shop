import { HiOutlineListBullet, HiOutlineSquares2X2 } from "react-icons/hi2";
import styled from "styled-components";

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

function Sort({ onInputChange }) {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };
  return (
    <StyledSort>
      <p>Sort by...</p>
      <select onChange={handleChange}>
        <option value="default">Recommended sorting</option>
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
  );
}

export default Sort;
