import { styled } from "styled-components";
import { Link, useParams } from "react-router-dom";
import Button from "../ui/Button";

function PlantDetail() {
  const { id } = useParams();

  const sizes = ["S", "M", "L", "XL"];

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
  } = {
    img: "https://ogvpzcluvdtmiliwrqlo.supabase.co/storage/v1/object/public/plant-images/White-Fusion.jpg",
    name: "White Fusion",
    family: "Calathea",
    description:
      "The Calathea originates from the tropical rain forests of Southern America. In these rainforests they grow in the shadows of trees and other big plants, which is why they are also called “Shadow plant”. This beautiful Calathea White Fusion is rare because of her variegated leaves. Asides from that she also has air filtering qualities, so that’s a win-win! The Calathea is also known for folding up her leaves in the evening when she goes to ‘sleep’ and unfolding them again as the first sunrays peak above the horizon. Isn't that beautiful?",
    price: 26.95,
    inStock: true,
    size: "M",
    easy: false,
    airPurifying: true,
    petFriendly: true,
    onSale: false,
  };

  const Container = styled.div`
    margin: 3rem 21rem;
  `;

  const Main = styled.main`
    display: grid;
    grid-template-columns: 3fr 3fr 2fr;
    gap: 8rem;
  `;

  const Sizes = styled.div`
    display: flex;
    gap: 1rem;
  `;

  const Size = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    background-color: var(--color-secondary-400);
    border-radius: 50%;
  `;

  return (
    <>
      <Container>
        <p>
          <Link to="/">Home</Link> &gt; {name}
        </p>
        <Main>
          <img src={img} alt={name} />
          <div>
            <h2>{name}</h2>
            <p>{family}</p>
            <p>{description}</p>
            <div>
              {easy && <span>👶 Easy</span>}
              {airPurifying && <span>🌬️ Air Purifying</span>}
              {petFriendly && <span>🐈 Pet friendly</span>}
            </div>
          </div>
          <div>
            <p>Sizes</p>
            <Sizes>
              {sizes.map((size) => (
                <Size>{size}</Size>
              ))}
            </Sizes>
            <button>{size}</button>

            <p>{price}</p>
            {inStock && <Button>Add to cart</Button>}
            <ul>
              <li>✅ 100% recyclable packaging materials</li>
              <li>✅ The most exclusive houseplants</li>
              <li>✅ Choose your own delivery day</li>
            </ul>
          </div>
        </Main>
      </Container>
    </>
  );
}

export default PlantDetail;
