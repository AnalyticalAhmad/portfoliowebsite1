"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SurfaceToSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 bg-bg-dark text-text-inverse overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl font-medium tracking-tighter leading-[1.1] max-w-4xl"
        >
          A PRODUCT ISN'T<br/>JUST WHAT YOU SEE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-text-inverse-secondary max-w-2xl leading-relaxed mt-4"
        >
          Great digital products depend on the relationship between interface, interaction, application logic and data.
        </motion.p>
        
      </div>
    </section>
  );
}
