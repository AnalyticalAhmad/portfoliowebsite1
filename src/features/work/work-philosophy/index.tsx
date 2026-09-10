"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const disciplines = [
  "INTERFACE DESIGN",
  "FRONTEND DEVELOPMENT",
  "MOBILE DEVELOPMENT",
  "BACKEND SYSTEMS",
  "APIs & INTEGRATIONS",
  "REAL-TIME EXPERIENCES",
  "DATABASES",
  "PRODUCT ENGINEERING"
];

export function WorkPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-64 px-6 bg-bg-dark text-text-inverse">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 lg:gap-32">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <motion.h3 
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]"
          >
            <motion.span 
              className="block"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              I DON'T JUST
              <br/>
              BUILD SCREENS.
            </motion.span>
            <motion.span 
              className="block text-text-inverse-secondary mt-4 md:mt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              I BUILD THE SYSTEMS
              <br/>
              THAT MAKE THEM WORK.
            </motion.span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-text-inverse-secondary max-w-lg mt-4 leading-relaxed"
          >
            The work spans interface implementation, application architecture, APIs, databases, real-time behavior and the details that connect them into complete products.
          </motion.p>
        </div>
        
        <div className="w-full lg:w-1/2">
          <ul className="flex flex-col gap-6 border-t border-border-dark lg:border-t-0">
            {disciplines.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                className="text-xl md:text-2xl font-medium tracking-wide text-text-inverse-secondary border-b border-border-dark pb-6 pt-6 lg:pt-0"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
