"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export function HorizontalWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!wrapperRef.current || !containerRef.current) return;
    
    const sections = gsap.utils.toArray(".horizontal-item");
    
    const tl = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + wrapperRef.current?.offsetWidth,
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={wrapperRef} className="w-full h-screen bg-bg-secondary overflow-hidden flex items-center">
      <div ref={containerRef} className="flex h-[70vh] items-center pl-6 md:pl-24">
        {projects.map((project, i) => (
          <div key={i} className="horizontal-item w-[80vw] md:w-[50vw] h-full flex-shrink-0 pr-8 md:pr-16 flex flex-col gap-6">
            <Link href={`/work/${project.slug}`} className="relative w-full h-[80%] block group overflow-hidden">
              <Image 
                src={project.cover} 
                alt={project.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </Link>
            <div>
              <h4 className="text-2xl font-medium">{project.title}</h4>
              <p className="text-text-secondary">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
