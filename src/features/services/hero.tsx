"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-end px-6 pb-24 pt-48 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl md:text-8xl lg:text-[120px] font-medium tracking-tighter leading-[0.9]">
            Services.
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-xl font-medium tracking-tight">
            Capabilities and disciplines across design, engineering, and product.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
