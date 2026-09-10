"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function PersonalIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-24 md:py-48 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 justify-between">
        <div className="w-full md:w-3/5">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]"
          >
            I BUILD DIGITAL PRODUCTS <br/>
            FROM INTERFACE TO SYSTEM.
          </motion.h2>
        </div>
        <div className="w-full md:w-2/5 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-text-secondary space-y-6 leading-relaxed max-w-md"
          >
            <p>
              I'm a software developer working across web and mobile products, with a particular interest in the point where interface design and engineering meet.
            </p>
            <p>
              I enjoy taking an idea beyond the screen — thinking about how it looks, how it behaves, how the frontend is structured, and what needs to happen behind it to make the product actually work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
