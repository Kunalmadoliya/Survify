import {
  AnimatedCardStack,
  Container,
  ScrollScaleReveal,
} from "../components/index";
import React from "react";

const Service = () => {
  return (
    <section id="service" className="min-h-screen py-10 ">
      <Container>
        <ScrollScaleReveal>
          <div className="flex flex-col p-10 font-bold text-center ">
            <h1 className="text-4xl text-gray-400">
              From grooming to gadgets, get trained
            </h1>
            <h1 className="text-5xl mt-2 text-gray-400">
              <span className="bg-green-500 rounded-full px-2 text-black">
                👷
              </span>{" "}
              <span className="text-black">Professionals</span> at your
              convenience.
            </h1>
          </div>
        </ScrollScaleReveal>

        <AnimatedCardStack />
      </Container>
    </section>
  );
};

export default Service;
