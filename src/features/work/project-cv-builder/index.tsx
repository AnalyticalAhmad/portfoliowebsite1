"use client";

import { projects } from "@/data/projects";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ProjectCVBuilder() {
  const project = projects[1]; // AI Smart CV Builder
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section id={`project-${project.slug}`} ref={containerRef} className="w-full pt-32 pb-12 md:pt-48 md:pb-24 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* INTRO */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-text-secondary">02 / SELECTED WORK</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mt-4">{project.title}</h2>
            <div className="flex flex-col gap-1 mt-6 text-sm text-text-secondary">
              <span className="uppercase tracking-wider">{project.category}</span>
              <span className="mt-4">{project.year}</span>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl font-medium leading-tight max-w-3xl"
            >
              {project.subtitle}
            </motion.h3>
          </div>
        </div>

        {/* VISUALS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          <div className="md:col-span-8 w-full relative aspect-[4/3] bg-bg-secondary overflow-hidden rounded-sm">
            <Image src={project.cover} alt={project.title} fill className="object-cover object-center opacity-90" />
          </div>
          <div className="md:col-span-4 flex flex-col gap-6 md:gap-12">
             <div className="w-full relative aspect-square bg-bg-secondary overflow-hidden rounded-sm">
               <Image src={project.cover} alt={`${project.title} Detail`} fill className="object-cover object-left-top scale-125 opacity-90" />
             </div>
             <div className="w-full relative aspect-square bg-bg-dark overflow-hidden rounded-sm">
               <Image src={project.cover} alt={`${project.title} Detail 2`} fill className="object-cover object-right-bottom scale-[1.5] opacity-80" />
             </div>
          </div>
        </div>

        {/* CAPABILITIES & TECH SNAPSHOT */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 border-t border-border pt-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary border-b border-border pb-2">Product Capabilities</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span className="block font-medium mb-1">Real-Time Preview</span>
                <span className="text-text-secondary text-sm">Instant visual feedback while editing.</span>
              </div>
              <div>
                <span className="block font-medium mb-1">AI-Assisted Content</span>
                <span className="text-text-secondary text-sm">Context-aware suggestions for experience.</span>
              </div>
              <div>
                <span className="block font-medium mb-1">ATS-Friendly Structure</span>
                <span className="text-text-secondary text-sm">Optimized semantic parsing.</span>
              </div>
              <div>
                <span className="block font-medium mb-1">PDF Generation</span>
                <span className="text-text-secondary text-sm">High-fidelity document rendering.</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary border-b border-border pb-2">Technical Snapshot</h4>
            <div className="flex flex-wrap gap-4 text-lg">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 border border-border rounded-full">{tech}</span>
              ))}
            </div>
            <p className="text-text-secondary mt-4">
              {project.description} Architecture ensures smooth state management between the complex document structure and the AI completion layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
