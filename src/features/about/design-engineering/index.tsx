"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function DesignEngineering() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-24 md:py-48 px-6 bg-bg-secondary border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col gap-8 max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wide uppercase text-text-secondary relative z-10"
          >
            Design × Engineering
          </motion.span>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-[80px] font-medium tracking-tighter leading-none relative z-10"
          >
            I DON'T WANT TO JUST<br/>MAKE IT WORK.
          </motion.h3>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-[80px] font-medium tracking-tighter leading-none text-text-secondary relative z-10"
          >
            I WANT IT TO FEEL<br/>RIGHT TOO.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10 pt-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <h4 className="text-3xl font-medium tracking-tight">INTERFACE</h4>
            <ul className="flex flex-col gap-4 text-lg text-text-secondary">
              <li className="flex justify-between border-b border-border pb-2"><span>Visual hierarchy</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span>Responsive composition</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span>Typography systems</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span>Interaction design</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span>Motion behavior</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span>User flows</span></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <h4 className="text-3xl font-medium tracking-tight">SYSTEM</h4>
            <ul className="flex flex-col gap-4 text-lg text-text-secondary">
              <li className="flex justify-between border-b border-border pb-2"><span>Frontend architecture</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span>Mobile applications</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span>Backend APIs</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span>Authentication flows</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span>Database schema</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span>Real-time behavior</span></li>
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Background visual element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] opacity-[0.03] pointer-events-none mix-blend-difference">
        <Image src="/about/abstract_1.png" alt="Abstract shape" fill className="object-contain" />
      </div>
    </section>
  );
}
