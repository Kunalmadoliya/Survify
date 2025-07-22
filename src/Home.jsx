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
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=100%"
        scrollEnd="bottom bottom-=100%"
        stagger={0.09}
      >
        <Service />
      </ScrollFloat>
    </>
  );
};

export default Home;
