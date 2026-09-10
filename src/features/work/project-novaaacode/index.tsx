"use client";

import { projects } from "@/data/projects";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ProjectNovaaacode() {
  const project = projects[0];
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section id={`project-${project.slug}`} ref={containerRef} className="w-full pt-32 pb-12 md:pt-48 md:pb-24 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* INTRO */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-text-secondary">01 / SELECTED WORK</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mt-4">{project.title}</h2>
            <div className="flex flex-col gap-1 mt-6 text-sm text-text-secondary">
              <span className="uppercase tracking-wider">{project.category}</span>
              <span className="mt-4">Design • Frontend • Motion • Interaction</span>
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
              A developer portfolio built to feel like an interactive digital experience rather than a conventional collection of project cards.
            </motion.h3>
          </div>
        </div>

        {/* PRIMARY VISUAL */}
        <div className="w-full relative aspect-[16/10] md:aspect-[21/9] bg-bg-dark overflow-hidden rounded-sm">
          <Image src={project.cover} alt={project.title} fill className="object-cover object-center opacity-90" />
        </div>

        {/* PROJECT THINKING & DESIGN/DEV SPLIT */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 border-t border-border pt-16">
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">The Idea</h4>
            <p className="text-lg md:text-xl text-text-primary">
              The portfolio was designed around one principle: 
              <br/><br/>
              <span className="font-medium text-2xl">The work should be experienced, not simply listed.</span>
            </p>
            <p className="text-text-secondary mt-2">
              This required intentional typography, motion, non-template composition, and continuous storytelling from start to finish.
            </p>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="flex flex-col gap-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary border-b border-border pb-2">Design</h4>
              <ul className="flex flex-col gap-3 text-lg">
                <li>Visual hierarchy</li>
                <li>Typography system</li>
                <li>Motion direction</li>
                <li>Interaction states</li>
                <li>Responsive composition</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary border-b border-border pb-2">Engineering</h4>
              <ul className="flex flex-col gap-3 text-lg">
                <li>Component architecture</li>
                <li>Responsive implementation</li>
                <li>Animation integration</li>
                <li>Performance tuning</li>
                <li>Reusable UI tokens</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* TECH STACK */}
        <div className="flex flex-col gap-4 border-t border-border pt-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-text-secondary">Technologies</span>
          <div className="flex flex-wrap gap-4 text-lg">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 border border-border rounded-full">{tech}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
