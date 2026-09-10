"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function WebService() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 bg-bg-secondary border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-sm font-semibold tracking-wide uppercase text-text-secondary"
          >
            <span>01</span>
            <span className="w-8 h-[1px] bg-border-dark"></span>
            <span>WEB</span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]"
          >
            WEB<br/>EXPERIENCES.
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-md mt-4"
          >
            Websites and applications that combine clear interfaces, responsive layouts, interaction and thoughtful motion.
          </motion.p>
          
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-4 text-lg tracking-tight"
          >
            <li className="border-b border-border pb-2 flex justify-between"><span>Portfolios</span></li>
            <li className="border-b border-border pb-2 flex justify-between"><span>Landing Pages</span></li>
            <li className="border-b border-border pb-2 flex justify-between"><span>Web Applications</span></li>
            <li className="border-b border-border pb-2 flex justify-between"><span>Dashboards</span></li>
            <li className="border-b border-border pb-2 flex justify-between"><span>Interactive Experiences</span></li>
          </motion.ul>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/3] order-1 lg:order-2"
        >
          <div className="absolute inset-0 bg-bg-primary rounded-xl overflow-hidden border border-border">
            <Image 
              src="/projects/onyx_design.png" 
              alt="Web interface visual" 
              fill 
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
