import React, {useEffect} from "react";
import {motion, transform, useAnimate} from "motion/react";

const HeroIntro = () => {
  const [scope, animate] = useAnimate();

  const sequence = [
    [".box1", {scale: 0.9, opacity: 1}, {duration: 0.2, ease: "easeInOut"}],
    [".box2", {scale: 0.9, opacity: 1}, {duration: 0.2, ease: "easeInOut"}],
    [".box3", {scale: 0.9, opacity: 1}, {duration: 0.2, ease: "easeInOut"}],
    [".box4", {scale: 0.9, opacity: 1}, {duration: 0.2, ease: "easeInOut"}],
    [".parent-box", {rotate: 360}, {duration: 0.5}],
    
    [".parent-box", {width: 600, scale: 0.5}, {duration: 0.5}],
  ];
  const startAnimation = async () => {
    for (const step of sequence) {
      await animate(...step);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      startAnimation();
    }, 1000);
    return () => clearTimeout(timeout);
  });

  return (
    <div
      ref={scope}
      className="bg-black h-screen w-full flex flex-col items-center justify-center"
    >
      <motion.h1 className="text-white text-6xl font-extrabold leading-[8rem] border border-white">
        HomeSurvify
      </motion.h1>

      <motion.div
        style={{width: 300}}
        className="parent-box relative h-80  grid grid-rows-2 grid-cols-2 gap-2"
      >
        {/* ✅ Center Static Div */}
        <motion.div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white -translate-x-1/2 -translate-y-1/2 z-10 ">
          <motion.p className="text-white text-xl font-semibold border border-white">
            Center
          </motion.p>
        </motion.div>

        {/* ✅ Consistent Box Size */}
        <motion.div
          style={{opacity: 0}}
          className="box1 w-36 h-36 border border-white rounded-md flex items-center justify-center text-white"
        >
          box1
        </motion.div>
        <motion.div
          style={{opacity: 0}}
          className="box2 w-36 h-36 border border-white rounded-md flex items-center justify-center text-white"
        >
          box2
        </motion.div>
        <motion.div
          style={{opacity: 0}}
          className="box3 w-36 h-36 border border-white rounded-md flex items-center justify-center text-white"
        >
          box3
        </motion.div>
        <motion.div
          style={{opacity: 0}}
          className="box4 w-36 h-36 border border-white rounded-md flex items-center justify-center text-white"
        >
          box4
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroIntro;
