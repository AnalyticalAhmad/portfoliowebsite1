"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ProjectIndex() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-24 md:py-32 px-6 bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
        >
          Selected Projects
        </motion.p>
        
        <div className="flex flex-col border-t border-border">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link 
                href={`#project-${project.slug}`} 
                className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-border hover:bg-bg-secondary transition-colors px-4 -mx-4 rounded-sm"
              >
                <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto mb-4 md:mb-0">
                  <span className="text-sm text-text-secondary w-8">0{i + 1}</span>
                  <span className="text-xl md:text-3xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300">
                    {project.title}
                  </span>
                </div>
                <div className="flex items-center justify-between w-full md:w-auto md:gap-16 text-sm text-text-secondary pl-16 md:pl-0">
                  <span className="w-48 hidden lg:block uppercase tracking-wider text-xs">{project.category}</span>
                  <span className="w-12 text-right">{project.year}</span>
                  <span className="w-6 text-right group-hover:translate-x-2 transition-transform duration-300">↗</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
