import { styled } from "styled-components";
import hero from "../../hero.jpg";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

const StyledHero = styled.section`
  display: flex;

  margin: 5rem 10rem;
  gap: 12rem;
`;

const HeroText = styled.div`
  min-height: 80vh;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 6rem;
    margin-bottom: 2rem;
  }

  span {
    color: var(--color-primary-900);
  }

  ${Button} {
    width: fit-content;
    font-size: 1.5rem;
    margin-top: 4rem;
  }
`;

const Img = styled.img`
  max-height: 72rem;
  width: auto;
`;

function Hero() {
  return (
    <StyledHero>
      <HeroText>
        <h1>
          There's a right <span>plant</span> for everyone
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, enim
          iste! Dolore impedit tenetur neque animi dignissimos voluptates
          nesciunt fuga! Enim unde vitae sequi natus illo, ipsam possimus quos
          explicabo?
        </p>
        <NavLink to="/catalog">
          <Button>Discover our catalog</Button>
        </NavLink>
      </HeroText>
      <Img src={hero} alt="hero" />
    </StyledHero>
  );
}

export default Hero;
