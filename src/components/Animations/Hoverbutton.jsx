import React, {useState} from "react";
import {motion} from "framer-motion";

const Hoverbutton = ({
  children,
  type = "button",
  bgColor = "bg-custom-oklch",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const blueVariant = {
    initial: {y: 0, opacity: 1},
   
  };

  const greenVariant = {
    initial: {y: -100, opacity: 0},
    hover: {y: 0, opacity: 1},
  };

  return (
    <motion.button
      type={type}
      className={`relative hover:cursor-pointer overflow-hidden h-10 w-30  ${bgColor} ${textColor} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      {...props}
     initial="initial"
      
    >
      <motion.div
        className="absolute inset-0 bg-blue-500 z-0"
        variants={blueVariant}
        animate={isHovered ? "hover" : "initial"}
        transition={{duration: 0.3}}
      />
      <motion.div
        className="absolute inset-0 bg-green-500 "
        variants={greenVariant}
      
        animate={isHovered ? "hover" : "initial"}
        transition={{duration: 0.3}}
      />
      <span className="relative z-20">{children}</span>
    </motion.button>
  );
};

export default Hoverbutton;
