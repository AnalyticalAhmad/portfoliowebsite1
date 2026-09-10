"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FullstackService() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  const layer1Y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 bg-bg-primary overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-24 relative z-10">
        
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-sm font-semibold tracking-wide uppercase text-text-secondary"
          >
            <span>03</span>
            <span className="w-8 h-[1px] bg-border-dark"></span>
            <span>SYSTEM</span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]"
          >
            MORE THAN<br/>THE SCREEN.
          </motion.h3>
        </div>

        <div className="relative w-full h-[60vh] flex flex-col items-center justify-center pointer-events-none">
          <motion.div style={{ y: layer1Y }} className="absolute text-[80px] md:text-[180px] font-bold tracking-tighter opacity-10 text-text-primary mix-blend-difference">
            INTERFACE
          </motion.div>
          <motion.div style={{ y: layer2Y }} className="absolute text-[70px] md:text-[160px] font-bold tracking-tighter opacity-20 text-text-secondary translate-y-[20%]">
            LOGIC
          </motion.div>
          <motion.div style={{ y: layer3Y }} className="absolute text-[60px] md:text-[140px] font-bold tracking-tighter opacity-10 text-text-secondary translate-y-[40%] blur-sm">
            DATA
          </motion.div>
        </div>

      </div>
    </section>
  );
}
