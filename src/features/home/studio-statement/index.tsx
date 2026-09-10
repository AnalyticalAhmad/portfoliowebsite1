"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function StudioStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-64 px-6 bg-bg-dark text-text-inverse overflow-hidden">
      <motion.div style={{ y }} className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-medium leading-tight">
          We believe in complex experiences powered by simple systems. Every interaction must justify its existence.
        </h2>
      </motion.div>
    </section>
  );
}
