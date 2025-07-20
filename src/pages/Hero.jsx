import React, {useState} from "react";
import {motion} from "framer-motion";
import {Header, Container, Hoverbutton, Homecards} from "../components/index";
import Text from "../components/Animations/Text";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Container>
        <div className="relative flex  ">
          <div className="w-2/4 flex flex-col items-center justify-center">
            <div className=" h-100 w-full px-10">
              <h1 className="text-7xl font-extrabold">Best.</h1>
              <h1 className="text-7xl font-extrabold">In The.</h1>
              <div className="overflow-hidden w-[320px] h-[80px] bg-blue-600 mt-2">
                <Text />
              </div>
            </div>{" "}
            <div className="flex absolute z-5  bottom-18 left-10 flex-col sm:flex-row items-center mt-4 duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
              {" "}
              <input
                type="text"
                placeholder="Find Services...."
                className="w-100 px-4 py-9 text-2xl  border border-gray-300 focus:outline-none focus:ring-0"
              />
              <Hoverbutton className="h-26 text-3xl">Go</Hoverbutton>
            </div>
          </div>

          <div className=" w-3/4 h-3/4 flex items-center justify-center z-0">
            <Homecards />
          </div>
        </div>
        <div className=" text-center p-10">
          <p className="text-gray-500">Join 150+ households trusting HomeServify for reliable home services.</p>
        </div>

      </Container>
    </>
  );
};

export default Hero;
