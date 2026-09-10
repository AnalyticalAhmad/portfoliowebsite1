"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function AboutContactCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-64 px-6 bg-bg-primary border-t border-border flex flex-col justify-center items-center text-center">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 md:gap-12 items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl lg:text-[120px] font-medium tracking-tighter leading-[0.9]"
        >
          HAVE SOMETHING <br/>
          <span className="text-text-secondary">IN MIND?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-3xl font-medium tracking-tight mt-4 text-text-primary"
        >
          LET'S BUILD IT.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <span className="text-sm font-semibold tracking-wide text-text-secondary uppercase">Available for selected web and mobile projects.</span>
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
