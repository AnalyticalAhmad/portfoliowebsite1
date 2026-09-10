"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Base mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Smooth spring for the trail
  const trailX = useSpring(mouseX, { damping: 25, stiffness: 150, mass: 0.8 });
  const trailY = useSpring(mouseY, { damping: 25, stiffness: 150, mass: 0.8 });
  
  // Fast spring for the dot
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 400, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 400, mass: 0.1 });

  useEffect(() => {
    setIsMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
        
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isMounted) return null;

  return (
    <>
      {/* Elastic Trail */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full pointer-events-none z-[100] hidden md:flex items-center justify-center mix-blend-difference"
        style={{
          x: trailX,
          y: trailY,
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ scale: { duration: 0.2 } }}
      >
        <div className={`absolute inset-0 rounded-full border transition-colors duration-300 ${isPointer ? 'border-transparent bg-white' : 'border-white bg-transparent'}`} />
      </motion.div>
      
      {/* Fast Dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-white rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          opacity: isVisible ? (isPointer ? 0 : 1) : 0,
        }}
      />
    </>
  );
}
