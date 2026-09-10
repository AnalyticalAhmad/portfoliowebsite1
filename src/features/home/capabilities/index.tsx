"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    num: "01",
    title: "WEB DEVELOPMENT",
    description: "Modern websites, landing pages, portfolios, dashboards and interactive web experiences."
  },
  {
    num: "02",
    title: "MOBILE APPLICATIONS",
    description: "Cross-platform mobile applications with polished interfaces and real product functionality."
  },
  {
    num: "03",
    title: "FULL-STACK PRODUCTS",
    description: "Complete products connecting frontend experiences with APIs, authentication, databases and backend systems."
  },
  {
    num: "04",
    title: "UI IMPLEMENTATION",
    description: "Turning interface concepts and designs into responsive, accurate and interactive production interfaces."
  }
];

export function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        <div className="lg:w-1/3">
          <motion.div 
            className="sticky top-32 flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight">WHAT I DO</h3>
            <Link 
              href="/services" 
              className="inline-block w-fit text-sm border-b border-border-dark pb-1 hover:opacity-60 transition-opacity"
            >
              EXPLORE SERVICES ↗
            </Link>
          </motion.div>
        </div>
        
        <div className="lg:w-2/3 flex flex-col gap-12 md:gap-24">
          {capabilities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col gap-4 border-t border-border pt-8 md:pt-12"
            >
              <span className="text-sm font-semibold text-text-secondary">{item.num}</span>
              <h4 className="text-2xl md:text-4xl font-medium tracking-tight group-hover:text-text-secondary transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-lg md:text-xl text-text-secondary max-w-lg mt-4 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
