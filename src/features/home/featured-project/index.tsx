"use client";

import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ProjectNumber({ num }: { num: string }) {
  return <span className="text-sm font-semibold tracking-wide text-text-secondary">0{num}</span>;
}

export function FeaturedProjects() {
  const p1 = projects[0]; // Portfolio
  const p2 = projects[1]; // Mobile App
  const p3 = projects[2]; // Web Experience
  const p4 = projects[3]; // Dashboard

  // Refs for scroll parallax if needed
  const p2Ref = useRef(null);
  const { scrollYProgress: p2Scroll } = useScroll({ target: p2Ref, offset: ["start end", "end start"] });
  const p2Y = useTransform(p2Scroll, [0, 1], [50, -50]);

  return (
    <div className="w-full bg-bg-primary flex flex-col gap-32 md:gap-48 pb-24 md:pb-48">
      
      {/* PROJECT 01 - Portfolio Website */}
      <section className="w-full px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <ProjectNumber num="1" />
            <h4 className="text-4xl md:text-6xl font-medium tracking-tight">{p1.title}</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-text-secondary">
              <span>{p1.category}</span>
              <span>{p1.year}</span>
            </div>
          </div>
          
          <Link href={`/work/${p1.slug}`} className="group relative block w-full aspect-[4/3] md:aspect-[21/9] bg-bg-secondary overflow-hidden rounded-sm">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative"
            >
              <Image src={p1.cover} alt={p1.title} fill className="object-cover object-center" />
            </motion.div>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-4">
            <p className="max-w-md text-text-secondary text-lg">{p1.description}</p>
            <Link href={`/work/${p1.slug}`} className="text-sm border-b border-border-dark pb-1 hover:opacity-60 transition-opacity whitespace-nowrap">
              VIEW PROJECT ↗
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT 02 - Mobile Application */}
      <section ref={p2Ref} className="w-full px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="flex flex-col gap-8 order-2 md:order-1">
            <div className="flex flex-col gap-4">
              <ProjectNumber num="2" />
              <h4 className="text-4xl md:text-6xl font-medium tracking-tight">{p2.title}</h4>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">{p2.subtitle}</p>
            </div>
            
            <div className="flex flex-col gap-2 border-t border-border pt-6 mt-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-text-secondary">Technologies</span>
              <p className="text-text-primary">{p2.technologies.join(", ")}</p>
            </div>
            
            <div className="mt-4">
              <Link href={`/work/${p2.slug}`} className="inline-block text-sm border-b border-border-dark pb-1 hover:opacity-60 transition-opacity">
                VIEW PROJECT ↗
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 w-full h-[60vh] md:h-[80vh] relative flex justify-center items-center bg-bg-secondary overflow-hidden rounded-sm">
             <motion.div style={{ y: p2Y }} className="relative w-[60%] h-[90%]">
                <Image src={p2.cover} alt={p2.title} fill className="object-contain" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT 03 - Web / Product Project */}
      <section className="w-full px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <ProjectNumber num="3" />
            <h4 className="text-5xl md:text-7xl font-medium tracking-tight">{p3.title}</h4>
            <p className="text-lg md:text-xl text-text-secondary">{p3.subtitle}</p>
          </div>
          
          <Link href={`/work/${p3.slug}`} className="group relative block w-full aspect-[4/5] md:aspect-video bg-bg-dark overflow-hidden rounded-sm">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            >
              <Image src={p3.cover} alt={p3.title} fill className="object-cover object-center" />
            </motion.div>
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-border">
            <div className="flex gap-4 text-sm text-text-secondary">
              <span>{p3.category}</span>
              <span>•</span>
              <span>{p3.year}</span>
            </div>
            <Link href={`/work/${p3.slug}`} className="text-sm border-b border-border-dark pb-1 hover:opacity-60 transition-opacity">
              VIEW PROJECT ↗
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT 04 - Additional Project */}
      <section className="w-full px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="w-full md:w-1/2 aspect-[4/5] relative bg-bg-secondary overflow-hidden rounded-sm group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative"
            >
              <Image src={p4.cover} alt={p4.title} fill className="object-cover object-center" />
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <ProjectNumber num="4" />
            <h4 className="text-4xl md:text-5xl font-medium tracking-tight">{p4.title}</h4>
            <p className="text-lg text-text-secondary mb-4">{p4.subtitle}</p>
            
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-4 text-sm">
                <div>
                  <span className="block text-text-secondary mb-1">Category</span>
                  <span>{p4.category}</span>
                </div>
                <div>
                  <span className="block text-text-secondary mb-1">Year</span>
                  <span>{p4.year}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href={`/work/${p4.slug}`} className="inline-block text-sm border-b border-border-dark pb-1 hover:opacity-60 transition-opacity">
                VIEW PROJECT ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
