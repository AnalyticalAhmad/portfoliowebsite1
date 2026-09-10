"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function VisualInterlude() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-64 px-6 bg-bg-dark text-text-inverse border-y border-border-dark flex flex-col items-center justify-center text-center">
      <motion.div 
        className="max-w-5xl flex flex-col gap-8 md:gap-16 text-5xl md:text-8xl lg:text-[130px] font-medium tracking-tighter leading-none"
      >
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block"
        >
          INTERFACES.
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="block text-text-inverse-secondary"
        >
          SYSTEMS.
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="block"
        >
          PRODUCTS.
        </motion.span>
      </motion.div>
    </section>
  );
}
