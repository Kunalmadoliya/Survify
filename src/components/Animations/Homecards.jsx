import React, {useState} from "react";
import {motion} from "framer-motion";

const services = [
  {
    title: "Plumber",
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
const Homecards = ({className = ""}) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const cardVariants = {
    open: {width: 450},
    close: {width: 150},
  };

  return (
    <div
      className={`flex flex-wrap gap-6 justify-center w-full md:w-3/4 mx-auto ${className}`}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer"
          variants={cardVariants}
          animate={hoveredIndex === index ? "open" : "close"}
          initial="close"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <img
            src={service.image}
            alt={service.title}
            className="h-130 w-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Homecards;
