"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function UIImplementation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-sm font-semibold tracking-wide uppercase text-text-secondary"
          >
            <span>04</span>
            <span className="w-8 h-[1px] bg-border-dark"></span>
            <span>INTERFACE</span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]"
          >
            DESIGN<br/>→ CODE.
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-md mt-4"
          >
            Turning interface concepts into responsive, interactive and maintainable product experiences.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center"
        >
          {/* Abstract visualization of design turning to code */}
          <div className="w-full h-full border border-border rounded-xl relative overflow-hidden bg-bg-secondary flex flex-col p-6">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-border-dark"></div>
              <div className="w-3 h-3 rounded-full bg-border-dark"></div>
              <div className="w-3 h-3 rounded-full bg-border-dark"></div>
            </div>
            
            <div className="flex-1 flex flex-col gap-4">
              <motion.div 
                initial={{ width: "20%" }} 
                animate={isInView ? { width: "100%" } : { width: "20%" }} 
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="h-8 bg-border-dark rounded-md opacity-20"
              />
              <motion.div 
                initial={{ width: "30%" }} 
                animate={isInView ? { width: "80%" } : { width: "30%" }} 
                transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                className="h-8 bg-border-dark rounded-md opacity-20"
              />
              
              <div className="grid grid-cols-2 gap-4 mt-8 flex-1">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="bg-bg-primary rounded-lg border border-border p-4 flex flex-col gap-2"
                >
                  <div className="w-full h-24 bg-border-dark/10 rounded-md"></div>
                  <div className="w-1/2 h-4 bg-border-dark/20 rounded-sm mt-2"></div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="bg-bg-primary rounded-lg border border-border p-4 flex flex-col gap-2"
                >
                  <div className="w-full h-24 bg-border-dark/10 rounded-md"></div>
                  <div className="w-3/4 h-4 bg-border-dark/20 rounded-sm mt-2"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
