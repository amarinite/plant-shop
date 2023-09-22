import { styled } from "styled-components";
import hero from "../../hero.jpg";

const StyledHero = styled.section`
  display: flex;
  align-items: center;
  margin: 5rem 10rem;
`;

const Img = styled.img`
  height: 72rem;
`;

function Hero() {
  return (
    <StyledHero>
      <div>
        <h1>There's a right plant for everyone</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, enim
          iste! Dolore impedit tenetur neque animi dignissimos voluptates
          nesciunt fuga! Enim unde vitae sequi natus illo, ipsam possimus quos
          explicabo?
        </p>
      </div>
      <Img src={hero} alt="hero" />
    </StyledHero>
  );
}

export default Hero;
