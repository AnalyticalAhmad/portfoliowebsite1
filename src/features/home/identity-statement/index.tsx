"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function IdentityStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section 
      ref={containerRef}
      className="w-full py-32 md:py-48 px-6 bg-bg-primary flex flex-col justify-center items-center text-center"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight leading-[1.1]"
        >
          <motion.span 
            className="block text-text-secondary"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Digital Experiences
          </motion.span>
          <motion.span 
            className="block text-text-secondary"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Built With
          </motion.span>
          <motion.span 
            className="block text-text-primary"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Design + Code
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-sm md:text-base text-text-secondary tracking-widest uppercase"
        >
          Mobile • Web • Full Stack • Product
        </motion.p>
      </div>
    </section>
  );
}
