"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    num: "01",
    title: "CLARITY OVER\nCOMPLEXITY.",
    desc: "Interfaces should make the next action obvious. Complexity can exist underneath the product without being pushed onto the user."
  },
  {
    num: "02",
    title: "MOTION SHOULD\nEXPLAIN.",
    desc: "Animation should reinforce hierarchy, direction and interaction rather than exist simply because something can move."
  },
  {
    num: "03",
    title: "BUILD THE WHOLE\nEXPERIENCE.",
    desc: "A polished interface means little if the APIs, data flow, state management or application behavior behind it are unreliable."
  },
  {
    num: "04",
    title: "DETAILS MATTER.",
    desc: "Spacing, loading states, transitions, feedback, empty states, responsiveness and edge cases often determine whether software feels finished."
  }
];

export function ProductPrinciples() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="w-full py-24 md:py-48 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        <div>
          <span className="text-sm font-semibold tracking-wide uppercase text-text-secondary">
            HOW I THINK ABOUT PRODUCTS
          </span>
        </div>
        
        <div className="flex flex-col gap-32 md:gap-48">
          {principles.map((p, i) => (
            <PrincipleItem key={p.num} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipleItem({ p, index }: { p: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  return (
    <div ref={ref} className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-text-secondary"
        >
          {p.num}
        </motion.span>
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] whitespace-pre-line"
        >
          {p.title}
        </motion.h3>
      </div>
      <div className="w-full md:w-1/2 pt-2 md:pt-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-lg"
        >
          {p.desc}
        </motion.p>
      </div>
    </div>
  );
}
