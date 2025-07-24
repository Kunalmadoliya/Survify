import {
  AnimatedCardStack,
  Container,
  ScrollScaleReveal,
} from "../components/index";
import React from "react";

const Service = () => {
  return (
    <section id="service" className="py-10 px-4 sm:px-6 md:py-16">
      <Container>
        <ScrollScaleReveal>
          <div className="flex flex-col p-6 sm:p-10 font-bold text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-400 leading-tight">
              From grooming to gadgets, get trained
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mt-2 text-gray-400 leading-snug">
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
