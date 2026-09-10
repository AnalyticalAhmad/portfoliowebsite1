"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tech = [
  { group: "INTERFACE", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"] },
  { group: "MOBILE", items: ["React Native", "Flutter", "Dart"] },
  { group: "BACKEND", items: ["Node.js", "Express.js", "NestJS"] },
  { group: "DATA", items: ["PostgreSQL", "MongoDB", "Supabase", "Redis"] },
  { group: "INFRASTRUCTURE", items: ["REST APIs", "Git", "Docker", "Vercel"] }
];

export function TechnologyToolbox() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-24 md:py-48 px-6 bg-bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
        >
          TOOLS I WORK WITH
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-8">
          {tech.map((category, i) => (
            <motion.div
              key={category.group}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-8"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">{category.group}</h4>
              <ul className="flex flex-col gap-4 text-lg md:text-xl font-medium tracking-tight">
                {category.items.map((item) => (
                  <li key={item} className="hover:text-text-secondary transition-colors cursor-default">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
