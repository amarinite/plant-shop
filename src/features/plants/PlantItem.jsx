import { styled } from "styled-components";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

// plants info from https://plnts.com

const StyledPlantItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  background-color: var(--color-primary-50);
  padding: 2rem 3rem;
  border: 1px solid var(--color-grey-100);
  box-shadow: var(--shadow-md);
`;

const Img = styled.img`
  width: 20rem;
  z-index: 0;
`;

const PlantInfo = styled.div`
  flex-grow: 1;

  p {
    margin-top: 1.2rem;
    font-size: 1.5rem;
  }
`;

const BuyBlock = styled.div`
  width: 25rem;
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
  const { id, img, name, description, price } = plant;

  return (
    <StyledPlantItem>
      <Img src={img} alt={name} />
      <PlantInfo>
        <h3>{name}</h3>
        <p>{description.slice(0, 170).trim() + "..."}</p>
      </PlantInfo>
      <BuyBlock>
        <Price>${price}</Price>
        <Link to={`${id}`}>
          <Button variation="secondary">See details</Button>
        </Link>
        <Button>Add to cart</Button>
      </BuyBlock>
    </StyledPlantItem>
  );
}

export default PlantItem;
