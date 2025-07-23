import {motion, AnimatePresence} from "motion/react";
import {useState, useEffect} from "react";

const Text = ({className}) => {
  const words = [
    "Cleaning.",
    "Repair.",
    "Salon.",
    "Massage.",
    "Fitness.",
    "Painting.",
    "Plumbing.",
    "Makeup.",
    "Puja.",
    "Coaching.",
    "Shifting.",
    "Styling.",
    "Renovation.",
    "Consulting.",
    "Training.",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`overflow-hidden h-[80px] bg-blue-600  ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={words[current]}
          initial={{y: "100%"}}
          animate={{y: 0}}
          exit={{y: "-120%"}}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 400,
          }}
          className="text-7xl font-bold text-white"
        >
          {words[current]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Text;
