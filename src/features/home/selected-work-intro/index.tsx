"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function SelectedWorkIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="w-full pt-32 pb-12 md:pt-48 md:pb-24 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
        >
          Selected Work / {new Date().getFullYear()}
        </motion.p>
        
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight leading-none max-w-4xl"
        >
          Things I've<br/>Been Building.
        </motion.h3>
      </div>
    </section>
  );
}
