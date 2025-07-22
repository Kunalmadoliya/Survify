"use client";
import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export default function HorizontalScrollSection({
  panels = [],
  className = "",
  pinAt = 0.5, // pin when section hits 50% viewport height
  autoSpeed = 0.5, // speed of forward animation
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [rowHeight, setRowHeight] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Calculate width & height
  const measure = useCallback(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth;
    const trackHeight = trackRef.current.getBoundingClientRect().height;

    setRowHeight(trackHeight);
    setScrollWidth((trackWidth - window.innerWidth) / 8); // horizontal distance
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Scroll Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const baseX = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);
  const xSpring = useSpring(baseX, { stiffness: 80, damping: 20, mass: 0.3 });

  // Auto-forward animation
  const manualX = useMotionValue(0);

  useEffect(() => {
    const frame = () => {
      manualX.set(manualX.get() - autoSpeed);
      requestAnimationFrame(frame);
    };
    frame();
  }, [autoSpeed, manualX]);

  // Combine scroll + forward animation
  const combinedX = useTransform([xSpring, manualX], ([scrollX, autoX]) => scrollX + autoX);

  return (
    <section
      ref={containerRef}
      style={{ height: scrollWidth + rowHeight }}
      className={`relative w-full ${className}`}
    >
      <div
        className="sticky bottom-0 overflow-hidden"
        style={{
          top: `${pinAt * 1}px`,
        }}
      >
        <motion.div
          ref={trackRef}
          style={{ x: combinedX }}
          className="flex gap-6 md:gap-10 px-4"
        >
          {panels.map((panel, i) => (
            <div key={i} className="flex-shrink-0">
              {panel}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
