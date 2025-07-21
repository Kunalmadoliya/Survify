import React from "react";
import {Container, Stack} from "../components/index";

const About = () => {
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
      <Container>
        <div className=" flex h-screen">
          <div className=" w-2/4 flex flex-col  justify-center items-center">
            <h1 className="text-7xl font-extrabold">
              Trusted professionals, people just like you!
            </h1>
            <div className="flex w-full justify-center p-15 gap-5">
              <button className="border px-10 p-3 rounded-lg bg-black text-[#F9F8F4]">
                Get Started <i className="ri-arrow-right-line"></i>
              </button>
              <button className="border px-10 p-3 rounded-lg">Book a Service</button>
            </div>
          </div>
          <div className=" w-2/4 flex  justify-center items-center">
            <Stack
              randomRotation={true}
              sensitivity={280}
              sendToBackOnClick={false}
              cardDimensions={{width: 450, height: 580}}
              cardsData={images}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
