"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function BuiltAroundCuriosity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-24 md:py-48 px-6 bg-bg-dark text-text-inverse relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
        
        <div className="flex flex-col gap-8 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wide uppercase text-text-inverse-secondary"
          >
            BUILT AROUND CURIOSITY
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]"
          >
            I like understanding how things work.<br/>
            <span className="text-text-inverse-secondary">Then finding a cleaner way to build them.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 pt-8 border-t border-border-dark">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6 mt-8"
          >
            <h4 className="text-2xl md:text-3xl font-medium tracking-tight">INTERFACES</h4>
            <p className="text-lg text-text-inverse-secondary">How a product looks and communicates.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6 mt-8"
          >
            <h4 className="text-2xl md:text-3xl font-medium tracking-tight">SYSTEMS</h4>
            <p className="text-lg text-text-inverse-secondary">How everything behind the interface connects.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-6 mt-8"
          >
            <h4 className="text-2xl md:text-3xl font-medium tracking-tight">EXPERIMENTATION</h4>
            <p className="text-lg text-text-inverse-secondary">Trying new interactions, technologies and product ideas.</p>
          </motion.div>
        </div>
      </div>
      
      {/* Background visual element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05] pointer-events-none mix-blend-screen translate-x-1/4">
        <Image src="/about/abstract_2.png" alt="Abstract structure" fill className="object-contain" />
      </div>
    </section>
  );
}
