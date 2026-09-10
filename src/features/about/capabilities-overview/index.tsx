"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  { title: "WEB", desc: "Modern responsive websites and web applications." },
  { title: "MOBILE", desc: "Cross-platform mobile products and application interfaces." },
  { title: "FRONTEND", desc: "Component architecture, state, interactions and responsive UI." },
  { title: "BACKEND", desc: "APIs, authentication, application logic and integrations." },
  { title: "DATA", desc: "Relational and document databases, application data and real-time state." },
  { title: "PRODUCT", desc: "Thinking beyond individual screens toward complete user flows and application behavior." }
];

export function CapabilitiesOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-24 md:py-32 px-6 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
        >
          WHAT I WORK ACROSS
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-xl md:text-2xl font-medium tracking-tight border-b border-border pb-4">{cap.title}</h4>
              <p className="text-text-secondary">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
