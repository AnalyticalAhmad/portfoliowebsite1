"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function TechnologyConnection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-24 md:py-48 px-6 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-24">
        
        <div className="flex flex-col items-center gap-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
          >
            THE RIGHT TOOL FOR THE RIGHT LAYER
          </motion.p>
        </div>
        
        <div className="flex flex-col items-center gap-16 md:gap-24 w-full">
          
          <TechLayer title="INTERFACE" tools="React / Next.js / TypeScript" index={0} />
          
          <div className="w-[1px] h-16 md:h-24 bg-border-dark"></div>
          
          <TechLayer title="MOBILE" tools="Flutter / Dart" index={1} />
          
          <div className="w-[1px] h-16 md:h-24 bg-border-dark"></div>
          
          <TechLayer title="SERVER" tools="Node.js / Express.js" index={2} />
          
          <div className="w-[1px] h-16 md:h-24 bg-border-dark"></div>
          
          <TechLayer title="DATA" tools="PostgreSQL / MongoDB / Supabase" index={3} />
          
          <div className="w-[1px] h-16 md:h-24 bg-border-dark"></div>
          
          <TechLayer title="INFRASTRUCTURE" tools="Git / Docker / APIs" index={4} />

        </div>
      </div>
    </section>
  );
}

function TechLayer({ title, tools, index }: { title: string, tools: string, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-4"
    >
      <h3 className="text-3xl md:text-5xl font-medium tracking-tight">{title}</h3>
      <p className="text-lg md:text-xl text-text-secondary">{tools}</p>
    </motion.div>
  );
}
