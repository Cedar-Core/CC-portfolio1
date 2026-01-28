"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui";
import { Button } from "@/components/ui-components/shared";

export function EcosystemHero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20"
      ref={heroRef}
    >
      {/* Background accent */}
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
        style={{ y: gridY }}
      />

      <motion.div
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10"
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
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="heading-xl text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-tight tracking-tight mb-8"
          >
            <span className="block">One ecosystem.</span>
            <span className="block mt-2 text-primary">
              Every system connected.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-lg text-foreground-muted leading-relaxed font-light max-w-2xl mx-auto mb-12"
          >
            We don&apos;t build isolated projects. We architect connected
            digital systems that scale with your business—frontend to
            infrastructure, data to automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            {/* Primary CTA */}
            <Link href="/contact">
              <Button
                text="Build your ecosystem"
                className="rounded-full px-8 py-4 sm:px-10 sm:py-5 bg-linear-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
              />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/architecture"
              className="inline-flex items-center gap-2 px-6 py-4 text-foreground-muted hover:text-foreground transition-colors font-medium"
            >
              <span>See the architecture</span>
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
