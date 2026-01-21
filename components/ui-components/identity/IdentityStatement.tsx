"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import ProductShowcase from "./ProductShowcase";
import { TypewriterText } from "@/components/ui-components/shared";

interface IdentityStatementProps {
  className?: string;
}

// Word lists for typewriter animation
// To change words: simply modify these arrays
const SYSTEM_WORDS = [
  "systems",
  "infrastructure",
  "foundations",
  "core layers",
  "architectures",
  "platforms",
];

const DEPENDS_WORDS = [
  "depends on.",
  "runs on.",
  "is built on.",
  "is powered by.",
  "is anchored to.",
];

/**
 * IdentityStatement — "Core Signal"
 * Short, sharp, confident. No marketing fluff.
 * Large typography with structural accent lines.
 * Features animated typewriter text for key phrases.
 */
const IdentityStatement = ({ className }: IdentityStatementProps) => {
  return (
    <section
      className={cn("relative py-32 md:py-48 px-6 overflow-hidden", className)}
    >
      <div className="max-w-5xl mx-auto">
        {/* Structural accent line - top */}
        <motion.div
          className="w-16 h-px bg-linear-to-r from-primary to-transparent mb-12"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />

        {/* Main statement with animated words */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="heading-xl text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight mb-8">
            We build the{" "}
            <TypewriterText
              words={SYSTEM_WORDS}
              className="text-primary text-glow-subtle"
              typingSpeed={70}
              deletingSpeed={40}
              pauseDuration={1800}
            />
            <br className="hidden md:block" /> that other software{" "}
            <TypewriterText
              words={DEPENDS_WORDS}
              className="text-primary text-glow-subtle"
              typingSpeed={70}
              deletingSpeed={40}
              pauseDuration={1800}
              showCursor={false}
            />
          </h2>
        </motion.div>

        {/* Supporting statement */}
        <motion.p
          className="text-lg md:text-xl text-foreground-muted max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Backend-first. Architecture-driven. Built to last.
        </motion.p>
      </div>

      {/* Background accent glow */}
      <div
        className="absolute top-1/2 right-0 w-[40%] h-[60%] -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right center, rgba(93, 158, 255, 0.05) 0%, transparent 60%)",
        }}
      />

      {/* 2.5. Product Showcase - Systems We've Built */}
      <ProductShowcase />
    </section>
  );
};

export default IdentityStatement;
