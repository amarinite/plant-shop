import { styled } from "styled-components";
import Button from "../../ui/Button";

// plants info from https://plnts.com

const StyledPlantItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  background-color: var(--color-primary-50);
  padding: 2rem 3rem;
  border: 1px solid var(--color-grey-100);
`;

const Img = styled.img`
  width: 20rem;
`;

const PlantInfo = styled.div`
  flex-grow: 1;
`;

const BuyBlock = styled.div`
  width: 22rem;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Price = styled.p`
  color: var(--color-primary-900);
  font-size: 2.8rem;

  margin-bottom: 1.5rem;
`;

function PlantItem({ plant }) {
  const {
    img,
    name,
    family,
    description,
    price,
    inStock,
    size,
    easy,
    airPurifying,
    petFriendly,
    onSale,
  } = plant;

  return (
    <StyledPlantItem>
      <Img src={img} alt={name} />
      <PlantInfo>
        <h3>{name}</h3>
        <p>{description.slice(0, 170).trim() + "..."}</p>
      </PlantInfo>
      <BuyBlock>
        <Price>${price}</Price>
        <Button variation="secondary">See details</Button>
        <Button>Add to cart</Button>
      </BuyBlock>
    </StyledPlantItem>
  );
}

export default PlantItem;
