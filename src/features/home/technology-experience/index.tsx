"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const technologies = [
  "FLUTTER", "DART", "REACT", "NEXT.JS", "TYPESCRIPT", 
  "JAVASCRIPT", "NODE.JS", "EXPRESS", "POSTGRESQL", 
  "MONGODB", "SUPABASE", "TAILWIND CSS", "FRAMER MOTION", "GSAP"
];

export function TechnologyExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 md:gap-32">
        <h3 className="text-sm font-semibold tracking-wide uppercase text-text-secondary text-center">
          Tools I Build With
        </h3>
        
        <div className="relative w-full max-w-5xl flex flex-wrap justify-center items-center gap-x-8 gap-y-12 md:gap-x-16 md:gap-y-16">
          {technologies.map((tech, i) => {
            const yTransform = i % 3 === 0 ? y1 : i % 2 === 0 ? y2 : y3;
            const size = i % 4 === 0 ? "text-4xl md:text-6xl text-text-primary" : i % 3 === 0 ? "text-3xl md:text-5xl text-text-secondary" : "text-2xl md:text-4xl text-text-secondary opacity-70";
            
            return (
              <motion.div
                key={tech}
                style={{ y: yTransform }}
                whileHover={{ scale: 1.1, color: "var(--text-primary)", opacity: 1 }}
                className={`font-medium tracking-tight cursor-default transition-colors duration-300 ${size}`}
              >
                {tech}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
