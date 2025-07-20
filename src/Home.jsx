import React from "react";
import {Container, Header, Hero, About, Service} from "./components/index";

const Home = () => {
  return (
    <>
      <Container>
        <Hero/>
        <About />
        <Service />
      </Container>
    </>
  );
};

export default Home;
