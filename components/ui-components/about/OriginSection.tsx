"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface OriginSectionProps {
  className?: string;
}

/**
 * OriginSection — Philosophy and origin story
 * Uses IdentityStatement pattern with large typography and accent lines
 */
export default function OriginSection({ className }: OriginSectionProps) {
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

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8 font-bold"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            We believe in <span className="text-primary">ecosystems</span>,
            <br className="hidden md:block" />
            not isolated projects.
          </h2>
        </motion.div>

        {/* Philosophy blocks */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              The Problem
            </h3>
            <p className="text-foreground-muted leading-relaxed">
              Most software gets built in silos. Teams ship features without
              thinking about how systems connect. The result? Technical debt,
              integration nightmares, and infrastructure that needs replacing
              every few years.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Our Approach
            </h3>
            <p className="text-foreground-muted leading-relaxed">
              We architect connected systems from day one. Every API, every
              database schema, every service boundary is designed to scale and
              integrate. We build the foundation that makes future growth
              effortless.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background accent glow */}
      <div
        className="absolute top-1/2 left-0 w-[40%] h-[60%] -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, rgba(93, 158, 255, 0.05) 0%, transparent 60%)",
        }}
      />
    </section>
  );
}
