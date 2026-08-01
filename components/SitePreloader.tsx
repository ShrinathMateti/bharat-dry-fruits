"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SitePreloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hides the loader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              filter: "blur(10px)",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-ivory flex flex-col items-center justify-center"
          >
            {/* Inline Loader UI */}
            <div className="relative flex items-center justify-center w-24 h-24">
              {/* Ambient Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />

              {/* Outer Orbiting Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary/80"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Inner Counter-Rotating Ring */}
              <motion.div
                className="absolute inset-2 rounded-full border-b-2 border-l-2 border-accent"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Center Pulsing Orb */}
              <motion.div
                className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Animated Text */}
            <div className="mt-8 flex items-center text-sm font-medium tracking-[0.2em] text-primary/80 uppercase">
              Preparing Your Experience
              <div className="flex ml-1 w-6">
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                >
                  .
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                >
                  .
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                >
                  .
                </motion.span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Content */}
      {children}
    </>
  );
}