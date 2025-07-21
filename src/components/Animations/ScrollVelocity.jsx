import {useRef, useLayoutEffect, useState} from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// Hook to get width of an element
function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

function wrap(min, max, v) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = {input: [0, 1000], output: [0, 5]},
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityText({children, baseVelocity = velocity}) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef
      ? {container: scrollContainerRef}
      : {};
    const {scrollY} = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {damping, stiffness});
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping.input,
      velocityMapping.output,
      {clamp: false}
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((_, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      const factor = velocityFactor.get();

      if (factor < 0) directionFactor.current = -1;
      else if (factor > 0) directionFactor.current = 1;

      moveBy += directionFactor.current * moveBy * factor;
      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        <div
          className={`flex-shrink-0 ${className}`}
          key={i}
          ref={i === 0 ? copyRef : null}
        >
          {children}
        </div>
      );
    }

    return (
      <div
        className={`overflow-hidden ${parallaxClassName}`}
        style={parallaxStyle}
      >
        <motion.div
          className={`flex ${scrollerClassName}`}
          style={{x, ...scrollerStyle}}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          baseVelocity={index % 2 === 0 ? velocity : -velocity}
        >
          {text}
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
