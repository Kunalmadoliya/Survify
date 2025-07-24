import React from "react";
import { Container, HorizontalScrollSection, Logo } from "../components/index";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const imageData = [
    {
      src: "https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      alt: "Mumbai",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
      alt: "Delhi",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1697729603596-90888a05a6bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      alt: "Bengaluru",
    },
    {
      src: "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      alt: "Kolkata",
    },
    {
      src: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      alt: "Jaipur",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const panels = [...Array(3)]
    .flatMap(() => imageData)
    .map((item, index) => (
      <div key={index} className="relative rounded-lg shadow-lg">
        <p className="absolute bottom-5 left-5 text-white font-extrabold text-2xl sm:text-4xl md:text-4xl drop-shadow-lg z-5">
          {item.alt}
        </p>
        <img
          src={item.src}
          alt={item.alt}
          className="object-cover relative w-[350px] h-[220px] sm:w-[350px] sm:h-[220px] md:w-[560px] md:h-[320px] rounded-lg shadow-md z-0"
        />
      </div>
    ));

  return (
    <section id="about" className="relative mt-5 mb-10">
      <Container>
        {location.pathname === "/about" && (
          <div className="flex items-center py-8 justify-between">
            <p
              onClick={() => navigate(-1)}
              className="text-[1.1rem] hover:cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i> Back
            </p>
            <Logo />
          </div>
        )}

        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-10 mb-8 px-4 sm:px-6 md:px-0 items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            <p>We are Serving</p>
            <p>
              in <span className="text-blue-600">Various Cities</span>
            </p>
          </div>

          <div className="max-w-lg text-sm sm:text-base md:text-md text-gray-600 leading-relaxed">
            <p>
              HomeServify ensures the security and monitoring of your property
              with reliable, smart, and modern solutions. Wherever you are, we
              make your home safer and smarter.
            </p>
          </div>
        </div>

        <HorizontalScrollSection
          panels={panels}
          autoSpeed={0.5}
          pinAt={0}
          className="py-10"
        />
      </Container>
    </section>
  );
};

export default About;
