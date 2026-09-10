"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CurrentFocus() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-24 md:py-48 px-6 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        
        <div className="flex flex-col gap-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
          >
            RIGHT NOW
          </motion.span>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl font-medium tracking-tight leading-relaxed max-w-lg"
          >
            Currently focused on building complete mobile and web products, improving product-level engineering skills and creating digital experiences that combine strong interface work with reliable underlying systems.
          </motion.p>
        </div>

        <div className="flex flex-col gap-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
          >
            WHEN I'M NOT BUILDING
          </motion.span>
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 text-lg md:text-xl text-text-secondary max-w-md"
          >
            <li className="border-b border-border pb-2">Exploring design trends</li>
            <li className="border-b border-border pb-2">Experimenting with new product ideas</li>
            <li className="border-b border-border pb-2">Learning new web technologies</li>
            <li className="border-b border-border pb-2">Creative side projects</li>
          </motion.ul>
        </div>

      </div>
    </section>
  );
}
