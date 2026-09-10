"use client";

import { motion } from "framer-motion";

export function HeroComposition() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end px-6 pb-24 bg-bg-primary">
      <div className="max-w-7xl">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-[160px] leading-[0.9] font-medium tracking-tighter"
        >
          We Build
          <br />
          <span className="text-text-secondary">Digital Products.</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 md:mt-24 max-w-md text-lg text-text-secondary"
        >
          <p>Novaaacode is an independent software design and engineering studio creating premium digital experiences.</p>
        </motion.div>
      </div>
    </section>
  );
}
