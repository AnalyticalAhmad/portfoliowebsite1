"use client";

import { motion } from "framer-motion";

export function MotionInterlude() {
  return (
    <section className="w-full py-24 md:py-32 bg-bg-dark text-text-inverse overflow-hidden flex flex-col gap-8 md:gap-12 select-none border-y border-border-dark">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-8 md:gap-16 text-5xl md:text-8xl lg:text-[120px] font-medium tracking-tighter uppercase shrink-0"
        >
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="flex gap-8 md:gap-16 shrink-0">
              <span>DESIGN — DEVELOP — REFINE — SHIP —</span>
            </span>
          ))}
        </motion.div>
      </div>
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-8 md:gap-16 text-2xl md:text-5xl text-text-inverse-secondary tracking-widest uppercase shrink-0"
        >
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="flex gap-8 md:gap-16 shrink-0">
              <span>WEB • MOBILE • EXPERIENCES • PRODUCTS •</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
