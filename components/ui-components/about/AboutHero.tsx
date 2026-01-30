"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui";
import { Button } from "@/components/ui-components/shared";

/**
 * AboutHero — About page hero section
 * Uses EcosystemHero pattern with parallax background
 */
export default function AboutHero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20"
      ref={heroRef}
    >
      {/* Background accent - parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(93, 158, 255, 0.08) 0%, transparent 60%)",
          y: backgroundY,
        }}
      />

      {/* Grid pattern */}
      <motion.div
        className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"
        style={{ y: backgroundY }}
      />

      <motion.div
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10"
        style={{ y: textY }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
          },
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-linear-to-r from-transparent to-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-[0.3em]">
              About Cedar Core
            </span>
            <div className="w-8 h-px bg-linear-to-l from-transparent to-primary" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="heading-xl text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-tight tracking-tight mb-8"
          >
            Building Digital <span className="text-primary">Foundations</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-lg md:text-xl text-foreground-muted leading-relaxed font-light max-w-2xl mx-auto mb-12"
          >
            We engineer the systems that other software depends on.
            Backend-first architecture built for decades, not deadlines.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link href="/contact">
              <Button
                text="Start a conversation"
                className="rounded-full px-8 py-4 sm:px-10 sm:py-5 bg-linear-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
              />
            </Link>

            <Link
              href="#journey"
              className="inline-flex items-center gap-2 px-6 py-4 text-foreground-muted hover:text-foreground transition-colors font-medium"
            >
              <span>Our journey</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon name="ChevronDown" size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
}
