"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui";

interface EntrySectionProps {
  className?: string;
}

/**
 * EntrySection — "System Awakening"
 * Not a typical hero. A presence. The user arrives into a system that's already running.
 * Motion before message. Core node with radiating energy paths.
 */
const EntrySection = ({ className }: EntrySectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Slight delay for dramatic entrance
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={cn(
        "relative min-h-screen flex flex-col items-center justify-center overflow-hidden",
        className,
      )}
    >
      {/* Energy paths SVG - Radiating from center */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="energy-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(93, 158, 255, 0)" />
            <stop offset="50%" stopColor="rgba(93, 158, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(82, 95, 249, 0)" />
          </linearGradient>
          <linearGradient
            id="energy-gradient-2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(82, 95, 249, 0)" />
            <stop offset="50%" stopColor="rgba(82, 95, 249, 0.4)" />
            <stop offset="100%" stopColor="rgba(93, 158, 255, 0)" />
          </linearGradient>
        </defs>

        {/* Radiating energy paths */}
        <motion.path
          d="M600 400 L200 200"
          stroke="url(#energy-gradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isLoaded ? { pathLength: 1, opacity: 0.4 } : {}}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
        <motion.path
          d="M600 400 L1000 200"
          stroke="url(#energy-gradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isLoaded ? { pathLength: 1, opacity: 0.4 } : {}}
          transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
        />
        <motion.path
          d="M600 400 L100 400"
          stroke="url(#energy-gradient-2)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isLoaded ? { pathLength: 1, opacity: 0.3 } : {}}
          transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
        />
        <motion.path
          d="M600 400 L1100 400"
          stroke="url(#energy-gradient-2)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isLoaded ? { pathLength: 1, opacity: 0.3 } : {}}
          transition={{ duration: 2.5, delay: 0.9, ease: "easeOut" }}
        />
        <motion.path
          d="M600 400 L300 600"
          stroke="url(#energy-gradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isLoaded ? { pathLength: 1, opacity: 0.35 } : {}}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        />
        <motion.path
          d="M600 400 L900 600"
          stroke="url(#energy-gradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isLoaded ? { pathLength: 1, opacity: 0.35 } : {}}
          transition={{ duration: 2, delay: 1.1, ease: "easeOut" }}
        />
      </svg>

      {/* Outer ring - Rotating */}
      <motion.div
        className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(93, 158, 255, 0.15) 25%, transparent 50%, rgba(82, 95, 249, 0.15) 75%, transparent 100%)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isLoaded ? { opacity: 1, scale: 1, rotate: 360 } : {}}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          scale: { duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Middle ring */}
      <motion.div
        className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full border border-primary/20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Core node - Central element */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="core-node" />
      </motion.div>

      {/* Identity text - Appears last */}
      <motion.div
        className="absolute bottom-[20%] md:bottom-[25%] text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="heading-xl text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          <span className="text-primary">Cedar</span> Core
        </h1>
        <p className="text-foreground-muted text-sm md:text-base max-w-md mx-auto">
          Systems architecture for ambitious software
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 2.5 }}
      >
        <div className="scroll-indicator">
          <span className="text-xs text-foreground-muted font-mono tracking-wider uppercase">
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon name="ChevronDown" size={16} className="text-primary" />
          </motion.div>
        </div>
      </motion.div>

      {/* Corner accents */}
      <motion.div
        className="absolute top-8 left-8 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <div className="accent-dot accent-dot-pulse" />
        <span className="text-xs font-mono text-foreground-muted">
          Systems Online
        </span>
      </motion.div>

      <motion.div
        className="absolute top-8 right-8 hidden md:flex items-center gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        <span className="text-xs font-mono text-foreground-muted">v2.0</span>
        <div className="w-px h-3 bg-border" />
        <span className="text-xs font-mono text-primary">Production</span>
      </motion.div>
    </section>
  );
};

export default EntrySection;
