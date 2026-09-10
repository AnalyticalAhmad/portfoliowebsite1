"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const layers = [
  { num: "01", name: "INTERFACE", desc: "What the user sees." },
  { num: "02", name: "INTERACTION", desc: "How the product responds." },
  { num: "03", name: "STATE", desc: "What the application remembers." },
  { num: "04", name: "LOGIC", desc: "What determines what happens." },
  { num: "05", name: "DATA", desc: "What the product stores and retrieves." },
  { num: "06", name: "INTEGRATION", desc: "How external services connect." },
  { num: "07", name: "FEEDBACK", desc: "Loading, success, error and empty states." },
  { num: "08", name: "EDGE CASES", desc: "What happens when things do not go perfectly." }
];

export function ProductLayers() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="w-full py-24 md:py-48 px-6 bg-bg-dark text-text-inverse">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        <div>
          <span className="text-sm font-semibold tracking-wide uppercase text-text-inverse-secondary">
            WHAT GOES INTO A PRODUCT
          </span>
        </div>
        
        <div className="flex flex-col gap-12 md:gap-16">
          {layers.map((layer, i) => (
            <LayerItem key={layer.num} layer={layer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LayerItem({ layer, index }: { layer: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col md:flex-row gap-6 md:gap-24 items-start border-t border-border-dark pt-12 group"
    >
      <div className="w-full md:w-1/2 flex items-center gap-8 md:gap-12">
        <span className="text-text-inverse-secondary text-xl">{layer.num}</span>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-500">{layer.name}</h3>
      </div>
      <div className="w-full md:w-1/2 pt-2 md:pt-4">
        <p className="text-xl md:text-2xl text-text-inverse-secondary leading-relaxed">
          {layer.desc}
        </p>
      </div>
    </motion.div>
  );
}
