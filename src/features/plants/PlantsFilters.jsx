import { styled } from "styled-components";
import Button from "../../ui/Button";

const StyledFilters = styled.aside`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    font-size: 2rem;
  }

  fieldset {
    border: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  legend {
    width: 100%;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--color-grey-200);
  }
`;

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 2rem;
`;

// price,
// inStock,
// size,
// easy,
// airPurifying,
// petFriendly,
// onSale,

function PlantsFilters() {
  return (
    <StyledFilters>
      <h3>Filters</h3>
      <fieldset>
        <legend>Family</legend>
        <StyledCheckbox>
          <input type="checkbox" id="calathea" name="family" value="calathea" />
          <label htmlFor="calathea">Calathea</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input type="checkbox" id="ficus" name="family" value="ficus" />
          <label htmlFor="ficus">Ficus</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="philodendron"
            name="family"
            value="philodendron"
          />
          <label htmlFor="philodendron">Philodendron</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input type="checkbox" id="monstera" name="family" value="monstera" />
          <label htmlFor="monstera">Monstera</label>
        </StyledCheckbox>
      </fieldset>
      <fieldset>
        <legend>Size</legend>
        <StyledCheckbox>
          <input type="checkbox" id="m-size" name="size" value="m-size" />
          <label htmlFor="m-size">M</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input type="checkbox" id="l-size" name="size" value="l-size" />
          <label htmlFor="l-size">L</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input type="checkbox" id="xl-size" name="size" value="xl-size" />
          <label htmlFor="xl-size">XL</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input type="checkbox" id="xxl-size" name="size" value="xxl-size" />
          <label htmlFor="xxl-size">XXL</label>
        </StyledCheckbox>
      </fieldset>
      <Button variation="secondary">Apply filters</Button>
    </StyledFilters>
  );
}

export default PlantsFilters;
