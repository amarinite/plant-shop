import { styled } from "styled-components";
import Button from "../../ui/Button";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

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

const StyledFieldset = styled.fieldset`
  margin-bottom: 1rem;
`;

function PlantsFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeFilters, setActiveFilters] = useState({
    family: [],
    size: [],
    characteristics: [],
  });

  const handleCheckboxChange = (e) => {
    const { name: group, value, checked } = e.target;

    if (checked) {
      const newFilters = { ...activeFilters };
      newFilters[group] = [...newFilters[group], value];
      setActiveFilters(newFilters);
    } else {
      const index = activeFilters[group].indexOf(value);
      if (index !== -1) {
        activeFilters[group].splice(index, 1);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const [group, value] of Object.entries(activeFilters)) {
      if (value.length > 0) {
        searchParams.set(group, value);
      } else {
        searchParams.delete(group);
      }
    }
    setSearchParams(searchParams.toString());
  };

  return (
    <StyledFilters>
      <h3>Filters</h3>
      <form onSubmit={handleSubmit}>
        <StyledFieldset>
          <legend>Family</legend>
          <StyledCheckbox>
            <input
              type="checkbox"
              id="calathea"
              name="family"
              value="calathea"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="calathea">Calathea</label>
          </StyledCheckbox>
          <StyledCheckbox>
            <input
              type="checkbox"
              id="ficus"
              name="family"
              value="ficus"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="ficus">Ficus</label>
          </StyledCheckbox>
          <StyledCheckbox>
            <input
              type="checkbox"
              id="philodendron"
              name="family"
              value="philodendron"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="philodendron">Philodendron</label>
          </StyledCheckbox>
          <StyledCheckbox>
            <input
              type="checkbox"
              id="monstera"
              name="family"
              value="monstera"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="monstera">Monstera</label>
          </StyledCheckbox>
        </StyledFieldset>
        <StyledFieldset>
          <legend>Size</legend>
          <StyledCheckbox>
            <input
              type="checkbox"
              id="m"
              name="size"
              value="m"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="m">M</label>
          </StyledCheckbox>
          <StyledCheckbox>
            <input
              type="checkbox"
              id="l"
              name="size"
              value="l"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="l">L</label>
          </StyledCheckbox>
          <StyledCheckbox>
            <input
              type="checkbox"
              id="xl"
              name="size"
              value="xl"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="xl">XL</label>
          </StyledCheckbox>
          <StyledCheckbox>
            <input
              type="checkbox"
              id="xxl"
              name="size"
              value="xxl"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="xxl">XXL</label>
          </StyledCheckbox>
        </StyledFieldset>
        <StyledFieldset>
          <legend>Characteristics</legend>
          <StyledCheckbox>
            <input
              type="checkbox"
              id="airPurifying"
              name="characteristics"
              value="airPurifying"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="airPurifying">Air purifying</label>
          </StyledCheckbox>
          <StyledCheckbox>
            <input
              type="checkbox"
              id="petFriendly"
              name="characteristics"
              value="petFriendly"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="petFriendly">Pet friendly</label>
          </StyledCheckbox>
          <StyledCheckbox>
            <input
              type="checkbox"
              id="easy"
              name="characteristics"
              value="easy"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="easy">Easy care</label>
          </StyledCheckbox>
        </StyledFieldset>
        <Button variation="secondary">Apply filters</Button>
      </form>
    </StyledFilters>
  );
}

export default PlantsFilters;
