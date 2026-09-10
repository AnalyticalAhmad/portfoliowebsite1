"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function AdditionalProjects() {
  const additional = projects.slice(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-wide uppercase text-text-secondary"
        >
          MORE WORK
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-border pt-12">
          {additional.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col gap-6"
            >
              <Link href={`#project-${project.slug}`} className="w-full aspect-[4/3] bg-bg-primary relative overflow-hidden rounded-sm">
                <Image src={project.cover} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </Link>
              
              <div className="flex flex-col gap-2">
                <span className="text-sm text-text-secondary">0{i + 3}</span>
                <h4 className="text-2xl font-medium tracking-tight mt-2">{project.title}</h4>
                <span className="text-sm text-text-secondary">{project.category} • {project.year}</span>
                <p className="text-text-primary mt-2">{project.description}</p>
                <Link href={`#project-${project.slug}`} className="text-sm border-b border-border-dark pb-1 hover:opacity-60 transition-opacity w-fit mt-4">
                  VIEW ↗
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
