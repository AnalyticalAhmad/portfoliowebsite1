"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function TypographyInterlude() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-64 px-6 bg-bg-primary flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.div 
        className="max-w-5xl flex flex-col gap-8 md:gap-16 text-5xl md:text-8xl lg:text-[130px] font-medium tracking-tighter leading-none"
      >
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block"
        >
          DESIGN.
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="block text-text-secondary"
        >
          BUILD.
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="block"
        >
          REFINE.
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="block text-text-secondary"
        >
          REPEAT.
        </motion.span>
      </motion.div>
    </section>
  );
}
