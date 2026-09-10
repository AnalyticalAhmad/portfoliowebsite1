"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function AboutWorkCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 bg-bg-secondary border-t border-border flex flex-col justify-center items-center text-center">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
        >
          SEE WHAT THAT LOOKS LIKE
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl md:text-7xl lg:text-[100px] font-medium tracking-tighter leading-none"
        >
          EXPLORE THE WORK.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8"
        >
          <Link 
            href="/work" 
            className="text-sm border-b border-border-dark pb-1 hover:opacity-60 transition-opacity tracking-wider uppercase"
          >
            VIEW PROJECTS ↗
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
