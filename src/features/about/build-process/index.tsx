"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  { step: "01", title: "UNDERSTAND", desc: "Understand the actual problem, user flow and product requirements before implementation." },
  { step: "02", title: "STRUCTURE", desc: "Define screens, components, states, data requirements and system boundaries." },
  { step: "03", title: "BUILD", desc: "Implement the interface and connect the systems required behind it." },
  { step: "04", title: "TEST", desc: "Check functionality, edge cases, responsiveness and failure states." },
  { step: "05", title: "REFINE", desc: "Improve interaction, motion, performance and details until the experience feels complete." }
];

export function BuildProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="w-full py-24 md:py-48 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        <div>
          <span className="text-sm font-semibold tracking-wide uppercase text-text-secondary">
            FROM IDEA TO WORKING PRODUCT
          </span>
        </div>
        
        <div className="flex flex-col gap-12">
          {processSteps.map((s, i) => (
            <ProcessStep key={s.step} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ s, index }: { s: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col md:flex-row gap-6 md:gap-16 items-start border-t border-border pt-12 group"
    >
      <div className="w-full md:w-1/4 flex items-center gap-6 text-xl md:text-3xl font-medium tracking-tight">
        <span className="text-text-secondary w-12">{s.step}</span>
        <span className="group-hover:translate-x-2 transition-transform duration-300">{s.title}</span>
      </div>
      <div className="w-full md:w-2/4 pt-1 md:pt-2">
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg">
          {s.desc}
        </p>
      </div>
    </motion.div>
  );
}
