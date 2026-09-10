"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projectTypes = [
  "PORTFOLIO",
  "MOBILE APP",
  "SAAS PRODUCT",
  "DASHBOARD",
  "BOOKING SYSTEM",
  "E-COMMERCE",
  "REAL-TIME APP",
  "CUSTOM WEB EXPERIENCE"
];

export function ProjectTypes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
        >
          WHAT COULD THIS BECOME?
        </motion.p>
        
        <div className="flex flex-col items-start gap-4 md:gap-8">
          {projectTypes.map((type, i) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`text-5xl md:text-7xl lg:text-[100px] font-medium tracking-tighter cursor-default transition-all duration-500 ease-out ${
                hoveredIndex === null 
                  ? "text-text-primary" 
                  : hoveredIndex === i 
                    ? "text-text-primary translate-x-8" 
                    : "text-text-secondary opacity-30"
              }`}
            >
              {type}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
