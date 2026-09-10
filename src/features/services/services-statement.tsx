"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ServicesStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-64 px-6 bg-bg-dark text-text-inverse text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-[80px] font-medium tracking-tighter leading-[1.1]"
        >
          <span className="block">DESIGN THE EXPERIENCE.</span>
          <span className="block text-text-inverse-secondary">ENGINEER THE REST.</span>
        </motion.h3>
      </div>
    </section>
  );
}
