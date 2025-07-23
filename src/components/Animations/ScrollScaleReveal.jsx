import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollScaleReveal = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  scaleFrom = 0.8,
  opacityFrom = 0.5,
  start = 'top bottom',
  end = 'center center',
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { scale: scaleFrom, opacity: opacityFrom },
      {
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          scroller,
          start,
          end,
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, scaleFrom, opacityFrom, start, end]);

  return (
    <div ref={containerRef} className={containerClassName}>
      {children}
    </div>
  );
};

export default ScrollScaleReveal;
