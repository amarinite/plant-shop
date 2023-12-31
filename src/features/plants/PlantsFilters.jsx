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

function PlantsFilters() {
  const handleClick = (value) => {};

  return (
    <StyledFilters>
      <h3>Filters</h3>
      <fieldset>
        <legend>Family</legend>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="calathea"
            name="family"
            value="calathea"
            onClick={() => handleClick("calathea")}
          />
          <label htmlFor="calathea">Calathea</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="ficus"
            name="family"
            value="ficus"
            onClick={() => handleClick("ficus")}
          />
          <label htmlFor="ficus">Ficus</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="philodendron"
            name="family"
            value="philodendron"
            onClick={() => handleClick("philodendron")}
          />
          <label htmlFor="philodendron">Philodendron</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="monstera"
            name="family"
            value="monstera"
            onClick={() => handleClick("monstera")}
          />
          <label htmlFor="monstera">Monstera</label>
        </StyledCheckbox>
      </fieldset>
      <fieldset>
        <legend>Size</legend>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="m"
            name="size"
            value="m"
            onClick={() => handleClick("m")}
          />
          <label htmlFor="m">M</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="l"
            name="size"
            value="l"
            onClick={() => handleClick("l")}
          />
          <label htmlFor="l">L</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="xl"
            name="size"
            value="xl"
            onClick={() => handleClick("xl")}
          />
          <label htmlFor="xl">XL</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="xxl"
            name="size"
            value="xxl"
            onClick={() => handleClick("xxl")}
          />
          <label htmlFor="xxl">XXL</label>
        </StyledCheckbox>
      </fieldset>
      <fieldset>
        <legend>Characteristics</legend>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="airPurifying"
            name="characteristics"
            value="airPurifying"
            onClick={() => handleClick("airPurifying")}
          />
          <label htmlFor="airPurifying">Air purifying</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="petFriendly"
            name="characteristics"
            value="petFriendly"
            onClick={() => handleClick("petFriendly")}
          />
          <label htmlFor="petFriendly">Pet friendly</label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input
            type="checkbox"
            id="easy"
            name="characteristics"
            value="easy"
            onClick={() => handleClick("easy")}
          />
          <label htmlFor="easy">Easy care</label>
        </StyledCheckbox>
      </fieldset>
      <Button variation="secondary">Apply filters</Button>
    </StyledFilters>
  );
}

export default PlantsFilters;
