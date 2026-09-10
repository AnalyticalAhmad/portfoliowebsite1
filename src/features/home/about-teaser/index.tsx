"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AboutTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 bg-bg-secondary flex flex-col justify-center items-center text-center border-b border-border">
      <div className="max-w-4xl mx-auto flex flex-col gap-12 items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
        >
          BEHIND THE WORK
        </motion.p>
        
        <motion.h3 
          className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight leading-tight"
        >
          <motion.span 
            className="block"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            DESIGN.
          </motion.span>
          <motion.span 
            className="block text-text-secondary"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            ENGINEERING.
          </motion.span>
          <motion.span 
            className="block"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            PRODUCT.
          </motion.span>
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-text-secondary max-w-lg mt-4 leading-relaxed"
        >
          I work across interface design and software engineering, turning ideas into digital products from concept through implementation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <Link 
            href="/about" 
            className="inline-block text-sm border-b border-border-dark pb-1 hover:opacity-60 transition-opacity uppercase tracking-wider"
          >
            MORE ABOUT ME ↗
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
