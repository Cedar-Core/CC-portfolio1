"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui-components/shared";

interface EntrySectionProps {
  className?: string;
}

const EntrySection = ({ className }: EntrySectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={cn(
        "relative min-h-screen flex flex-col items-center justify-center py-20",
        className,
      )}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
        <div className="text-left">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-oswald)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Strong Roots, <span className="text-primary">Infinite Scale</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-foreground-muted max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Engineering robust backend architectures, scalable APIs, and data
            platforms for ambitious software projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/contact">
              <Button
                text="Start Your Project"
                className="rounded-full px-8 py-4 sm:px-10 sm:py-5 bg-linear-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
              />
            </Link>

            <Link href="/ecosystem" className="ml-6">
              <Button
                text="Explore Our Ecosystem"
                variant="outline"
                className="rounded-full px-8 py-4 sm:px-10 sm:py-5 border-white/30 text-white hover:border-primary/50 hover:bg-white/5 transition-all"
              />
            </Link>
          </motion.div>

          <motion.p
            className="text-sm text-foreground-muted mt-8"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Trusted by teams building the next generation of software.
          </motion.p>
        </div>
        <div>{/* Right side - empty for now */}</div>
      </div>
    </section>
  );
};

export default EntrySection;
