import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

const AnimatedCardStack = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Left card (More spread, less rotate)
  const card1X = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const card1Rotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const card1Scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  // Middle card (No transform)
  const card2X = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const card2Rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const card2Scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  // Right card (More spread, less rotate)
  const card3X = useTransform(scrollYProgress, [0, 1], [0, 320]);
  const card3Rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const card3Scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <div
      ref={ref}
      className="relative h-[550px] w-full flex items-center justify-center  overflow-hidden"
    >
      <div className="relative w-[800px] h-[400px] flex justify-center items-center">
        {/* Left Card */}
        <motion.div
          style={{x: card1X, rotate: card1Rotate, scale: card1Scale}}
          className="absolute bg-black h-[400px] w-[380px] rounded-3xl shadow-2xl"
        />

        {/* Middle Card */}
        <motion.div
          style={{x: card2X, rotate: card2Rotate, scale: card2Scale}}
          className="absolute bg-white h-[400px] w-[380px] rounded-3xl shadow-2xl z-20"
        />

        {/* Right Card */}
        <motion.div
          style={{x: card3X, rotate: card3Rotate, scale: card3Scale}}
          className="absolute bg-gray-100 h-[400px] w-[380px] rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default AnimatedCardStack;
