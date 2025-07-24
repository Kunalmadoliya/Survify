import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";


const AnimatedCardStack = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });


  const card1X = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const card1Rotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const card1Scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);


  const card2X = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const card2Rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const card2Scale = useTransform(scrollYProgress, [0, 1], [1, 1]);


  const card3X = useTransform(scrollYProgress, [0, 1], [0, 320]);
  const card3Rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const card3Scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <div
      ref={ref}
      className="relative h-[450px] w-full flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-[800px] h-[400px] flex justify-center items-center">
       
        <motion.div
          style={{x: card1X, rotate: card1Rotate, scale: card1Scale}}
          className="relative bg-black h-[400px] w-[380px] rounded-3xl shadow-2xl flex"
        >
          <div className="p-6 flex flex-col items-start justify-between h-full">
            <div className="p-5">
              <h3 className="text-white text-4xl text-center font-bold mb-2 bg-green-600 p-3 w-65 rounded-md">
                24/7 Available
              </h3>
              <p className="text-white/80 text-md  leading-relaxed">
                Book expert professionals for home cleaning, repair, and
                maintenance—anytime, anywhere. Fast, reliable, and hassle-free
                service at your doorstep.
              </p>
            </div>
            <img
              src="/public/assets/clock.png"
              alt="Icon"
              className="w-70 h-70 right-10 absolute -bottom-22  "
            />
          </div>
        </motion.div>

        <motion.div
          style={{x: card2X, rotate: card2Rotate, scale: card2Scale}}
          className="absolute bg-white h-[400px] w-[380px] rounded-3xl shadow-2xl z-20 flex flex-col items-center text-center px-6 pt-20 pb-6"
        >
          <div className="">
            <img
              src="/public/assets/verfied.png"
              alt="Middle"
              className="w-70 h-70 absolute -top-10 -rotate-3 object-contain"
            />
            <h3 className="text-white text-3xl mt-29 font-semibold mb-3 bg-blue-600 px-4 py-2 w-full rounded-md">
              Verified Professionals
            </h3>
            <p className="text-gray-700 text-md  leading-relaxed">
              We connect you with trusted, background-verified professionals for
              all your home services. Quality, safety, and
              reliability—guaranteed every time.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{x: card3X, rotate: card3Rotate, scale: card3Scale}}
          className="absolute bg-gray-100 h-[400px] w-[380px] rounded-3xl shadow-2xl flex items-center justify-center"
        >
          {" "}
          <div className="p-6 flex flex-col items-start justify-between h-full">
            <div className="pl-10">
              <h3 className="text-white text-4xl text-center font-bold mb-2 bg-green-600 p-3  rounded-md">
               Fast & Reliable
              </h3>
              <p className="text-black text-md  leading-relaxed">
                Book expert professionals for home cleaning, repair, and
                maintenance—anytime, anywhere. Fast, reliable, and hassle-free
                service at your doorstep.
              </p>
            </div>
            <img
              src="/public/assets/transport.png"
              alt="Icon"
              className="w-70 h-70 self-end absolute -bottom-10  "
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCardStack;
