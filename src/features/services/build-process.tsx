"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  { step: "01", title: "UNDERSTAND", desc: "Define what needs to exist and why." },
  { step: "02", title: "STRUCTURE", desc: "Map screens, flows, components, states and data." },
  { step: "03", title: "DESIGN", desc: "Establish hierarchy, interaction and responsive behavior." },
  { step: "04", title: "BUILD", desc: "Implement the interface and supporting systems." },
  { step: "05", title: "CONNECT", desc: "Integrate APIs, data and external services." },
  { step: "06", title: "TEST", desc: "Validate functionality, responsiveness and edge cases." },
  { step: "07", title: "REFINE", desc: "Improve motion, feedback, performance and details." }
];

export function BuildProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="w-full py-24 md:py-48 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        <div>
          <span className="text-sm font-semibold tracking-wide uppercase text-text-secondary">
            FROM IDEA TO PRODUCT
          </span>
        </div>
        
        <div className="flex flex-col">
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
      className="flex flex-col md:flex-row gap-4 md:gap-16 items-start py-12 border-b border-border group"
    >
      <div className="w-full md:w-1/3 flex items-center gap-6 text-xl md:text-3xl font-medium tracking-tight">
        <span className="text-text-secondary w-12">{s.step}</span>
        <span className="group-hover:translate-x-2 transition-transform duration-300">{s.title}</span>
      </div>
      <div className="w-full md:w-2/3 pt-2">
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
          {s.desc}
        </p>
      </div>
    </motion.div>
  );
}
