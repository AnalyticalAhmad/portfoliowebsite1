"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function PhilosophyStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-64 px-6 bg-bg-dark text-text-inverse overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col gap-12 text-center items-center">
        <motion.h3 
          className="text-4xl md:text-7xl lg:text-[90px] font-medium tracking-tight leading-[1.1]"
        >
          <motion.span 
            className="block text-text-inverse-secondary"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            GOOD DESIGN GETS ATTENTION.
          </motion.span>
          <motion.span 
            className="block text-text-inverse mt-4 md:mt-8"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            GOOD ENGINEERING MAKES IT STAY.
          </motion.span>
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-2xl text-text-inverse-secondary mt-8 leading-relaxed"
        >
          Novaaacode combines thoughtful interface design with practical engineering to create digital products that look intentional, feel responsive and work reliably.
        </motion.p>
      </div>
    </section>
  );
}
