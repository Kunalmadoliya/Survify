import React, {useState} from "react";
import {motion} from "framer-motion";
import {Header, Container, Hoverbutton, Homecards} from "../components/index";
import Text from "../components/Animations/Text";
import ScrollVelocity from "../components/Animations/ScrollVelocity";
import "../styles/temp.css";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const companyNames = ["Home Survify", "Home Survify"];

  return (
    <>
      <Container>
        <div className="relative flex hero-wrapper">
          <div className="w-1/2 flex flex-col items-center justify-center hero-left">
            <div className="h-100 w-full px-10 hero-heading-wrapper">
              <div className="main-header">
                <h1 className="text-7xl font-extrabold hero-title">Best.</h1>
                <h1 className="text-7xl font-extrabold hero-title">In The.</h1>
              </div>
              <div className="overflow-hidden w-[400px] h-[80px] bg-blue-600 mt-2 hero-text-box">
                <Text />
              </div>
            </div>

            <div className="flex absolute z-5 bottom-18 left-10 flex-col sm:flex-row items-center mt-4 duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hero-search-wrapper">
              <input
                type="text"
                placeholder="Find Services...."
                className="w-100 px-4 py-9 text-2xl border border-gray-300 focus:outline-none focus:ring-0 hero-search-input"
              />
              <Hoverbutton className="h-26 text-3xl hero-search-button">
                Go
              </Hoverbutton>
            </div>
          </div>

          <div className="w-3/4 h-3/4 flex items-center justify-center z-0 hero-right">
            <Homecards />
          </div>
        </div>

        <div className="text-center p-6 hero-subtext">
          <p className="text-gray-500 hero-subtext-paragraph">
            Join 150+ households trusting HomeServify for reliable home
            services.
          </p>
        </div>

        <div className="bg-blue-600 w-full flex justify-center items-center overflow-hidden hero-marquee">
          <ScrollVelocity
            texts={companyNames.map((name, index) => (
              <p
                key={index}
                className="text-white text-7xl p-1 font-extrabold hero-marquee-text"
              >
                {name}
              </p>
            ))}
          />
        </div>
      </Container>
    </>
  );
};

export default Hero;
