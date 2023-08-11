import { styled } from "styled-components";
import Hero from "../features/home/Hero";
import Carroussel from "../features/home/Carroussel";
import Sections from "../features/home/Sections";

function Home() {
  return (
    <>
      <Hero />
      <Carroussel />
      <Sections />
    </>
  );
}

export default Home;
