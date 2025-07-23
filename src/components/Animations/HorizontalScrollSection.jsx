"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function HorizontalScrollSection({
  panels = [],
  className = "",
  autoSpeed = 0.5, // Speed of movement
}) {
  const x = useMotionValue(0);

  useEffect(() => {
    let raf;
    const animate = () => {
      x.set(x.get() - autoSpeed); // Continuous movement
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [autoSpeed, x]);

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <motion.div
        style={{ x }}
        className="flex gap-6 md:gap-10 px-4"
      >
        {panels.map((panel, i) => (
          <div key={i} className="flex-shrink-0">
            {panel}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
