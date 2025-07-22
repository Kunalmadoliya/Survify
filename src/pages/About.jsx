import React from "react";
import {Container, Stack} from "../components/index";
import ScrollVelocity from "../components/Animations/ScrollVelocity";

const About = () => {
  const companyNames = ["Home Survify", "Home Survify"];
  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    },
  ];
  return (
    <>
      <div className="w-full px-5 ">
        <div className="bg-blue-600  w-full flex justify-center items-center overflow-hidden ">
          <ScrollVelocity
            texts={companyNames.map((name, index) => (
              <p
                key={index}
                className="text-white text-7xl p-1 font-extrabold "
              >
                {name}
              </p>
            ))}
          />
        </div>
        <Container>
          <div className="  h-screen">
            <div className="border  flex justify-between gap-10">
              <div className="border p-10">
                <div className="text-5xl font-bold">
                  <h1>Thats The Way</h1>
                  <h1>To Camp!</h1>
                </div>

                <p className="font-bold text-lg text-gray-400">
                  try a variety of benifts when using our services!
                </p>
              </div>
              <div className="border"></div>
              <div className="border"></div>
              <div className="border"></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
