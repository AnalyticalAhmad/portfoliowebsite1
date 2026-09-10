"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FeaturedWorkExit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="w-full pb-32 md:pb-64 px-6 bg-bg-primary flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <Link 
          href="/work" 
          className="group flex items-center gap-4 text-xl md:text-3xl font-medium hover:text-text-secondary transition-colors"
        >
          VIEW ALL WORK 
          <span className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">↗</span>
        </Link>
      </motion.div>
    </section>
  );
}
