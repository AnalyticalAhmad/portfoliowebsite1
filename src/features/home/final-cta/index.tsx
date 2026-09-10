"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-64 px-6 bg-bg-primary flex flex-col justify-center items-center text-center">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 md:gap-12 items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
        >
          HAVE AN IDEA?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl md:text-8xl lg:text-[140px] font-medium tracking-tighter leading-[0.9]"
        >
          Let's Make <br/>
          <span className="text-text-secondary">It Real.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-text-secondary mt-8"
        >
          Available for selected web and mobile projects.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12"
        >
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-accent text-text-inverse rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 font-medium tracking-wide">START A PROJECT ↗</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
