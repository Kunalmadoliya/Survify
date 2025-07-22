import React from "react";
import {
  Container,
  Header,
  Hero,
  About,
  Service,
  ScrollFloat,
} from "./components/index";

const Home = () => {
  return (
    <>
      <ScrollFloat>
        <Hero />
      </ScrollFloat>
      <ScrollFloat>
        <About />
      </ScrollFloat>
      <ScrollFloat>
        <Service />
      </ScrollFloat>

      <Service />
    </>
  );
};

export default Home;
