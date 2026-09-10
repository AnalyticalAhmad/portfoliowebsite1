"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check if we've already shown the intro in this session
    const hasSeenIntro = sessionStorage.getItem("novaaacode_intro");
    if (hasSeenIntro) {
      setIsVisible(false);
      return;
    }
    
    setIsMounted(true);
    document.body.classList.add("intro-playing");
    
    // Hide curtain after sequence completes
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove("intro-playing");
      sessionStorage.setItem("novaaacode_intro", "true");
    }, 2600);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("intro-playing");
    };
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-curtain"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] bg-bg-dark text-text-inverse flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="overflow-hidden pb-1">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-[100px] font-medium tracking-tighter uppercase leading-none"
              >
                Novaaacode
              </motion.h1>
            </div>
            
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-text-inverse-secondary"
              >
                Design / Development / Motion
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
