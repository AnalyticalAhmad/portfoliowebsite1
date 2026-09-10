"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CapabilityStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="w-full py-24 md:py-48 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
        >
          WHAT I BUILD
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.1] max-w-4xl"
        >
          FROM INTERFACES<br/>
          TO COMPLETE<br/>
          DIGITAL PRODUCTS.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed mt-4"
        >
          Web, mobile and full-stack experiences designed and engineered as complete products rather than isolated screens.
        </motion.div>
      </div>
    </section>
  );
}
