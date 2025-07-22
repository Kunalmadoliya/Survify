import {Container, ScrollFloat} from "../components/index";
import React from "react";

const Service = () => {
  return (
    <Container>
      <div className="h-screen">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          <h1>helooooooo</h1>
        </ScrollFloat>
      </div>
    </Container>
  );
};

export default Service;
