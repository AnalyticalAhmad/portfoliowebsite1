"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="w-full pt-48 pb-24 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-text-secondary uppercase tracking-widest text-sm mb-12 font-medium"
        >
          About
        </motion.p>
        <h1 className="text-4xl md:text-7xl lg:text-[100px] leading-[1.1] font-medium tracking-tight">
          <motion.span 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.1 }}
            className="block text-text-secondary"
          >
            DESIGNING
          </motion.span>
          <motion.span 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="block"
          >
            THE INTERFACE.
          </motion.span>
          <motion.span 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="block text-text-secondary md:ml-32 mt-8 md:mt-12"
          >
            BUILDING
          </motion.span>
          <motion.span 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="block md:ml-32"
          >
            WHAT'S BEHIND IT.
          </motion.span>
        </h1>
      </div>
    </section>
  );
}
