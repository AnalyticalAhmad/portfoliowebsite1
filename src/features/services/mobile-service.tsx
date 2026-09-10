"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function MobileService() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 bg-bg-dark text-text-inverse overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0"
        >
          <div className="absolute inset-0 bg-bg-primary rounded-[3rem] overflow-hidden border-8 border-border-dark">
            <Image 
              src="/projects/vanguard_app.png" 
              alt="Mobile application visual" 
              fill 
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-sm font-semibold tracking-wide uppercase text-text-inverse-secondary"
          >
            <span>02</span>
            <span className="w-8 h-[1px] bg-border-dark"></span>
            <span>MOBILE</span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]"
          >
            MOBILE<br/>PRODUCTS.
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-text-inverse-secondary leading-relaxed max-w-md mt-4"
          >
            Cross-platform applications designed around complete user flows, responsive interaction and real product behavior.
          </motion.p>
          
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-4 text-lg tracking-tight"
          >
            <li className="border-b border-border-dark pb-2 flex justify-between"><span>App Interfaces</span></li>
            <li className="border-b border-border-dark pb-2 flex justify-between"><span>User Flows</span></li>
            <li className="border-b border-border-dark pb-2 flex justify-between"><span>Map Experiences</span></li>
            <li className="border-b border-border-dark pb-2 flex justify-between"><span>Authentication</span></li>
            <li className="border-b border-border-dark pb-2 flex justify-between"><span>Real-time States</span></li>
            <li className="border-b border-border-dark pb-2 flex justify-between"><span>API Integration</span></li>
          </motion.ul>
        </div>

      </div>
    </section>
  );
}
