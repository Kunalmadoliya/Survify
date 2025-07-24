import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Painting",
    description: "Fix leaks, install pipes & more",
    image:
      "https://plus.unsplash.com/premium_photo-1681566677688-9b6b09cfadd2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Hair Style",
    description: "Professional grooming at home",
    image:
      "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Home Cleaning",
    description: "Deep cleaning for your space",
    image:
      "https://images.unsplash.com/photo-1581578949510-fa7315c4c350?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

const Homecards = ({ className = "" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const cardVariants = {
    open: { flex: 3 },
    close: { flex: 1 },
  };

  return (
    <div
      className={`flex gap-4 w-full max-w-6xl h-[580px] rounded-3xl overflow-hidden ${
        className || ""
      } sm:flex-row flex-col sm:overflow-hidden overflow-x-scroll`}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ease-in-out flex flex-col min-w-full sm:min-w-0"
          variants={cardVariants}
          animate={hoveredIndex === index ? "open" : "close"}
          initial="close"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(0)}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />

          {hoveredIndex === index && (
            <div className="absolute bottom-5 left-5 right-5 text-white z-10">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              {service.topics && (
                <p className="text-md font-medium">{service.topics} TOPICS</p>
              )}
            </div>
          )}

          {hoveredIndex !== index && (
            <div className="absolute bottom-0 left-0 w-full h-[60px] flex items-center justify-center z-10 ">
              <p className="text-white text-lg font-semibold">
                {service.title}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Homecards;
