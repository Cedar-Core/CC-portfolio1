"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@/components/ui";
import { Button } from "@/components/ui-components/shared";

interface ServicesCTAProps {
  className?: string;
}

export default function ServicesCTA({ className }: ServicesCTAProps) {
  return (
    <section className={cn("relative py-24 md:py-32 px-6", className)}>
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(93, 158, 255, 0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-linear-to-r from-transparent to-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-[0.3em]">
              Ready to Start?
            </span>
            <div className="w-8 h-px bg-linear-to-l from-transparent to-primary" />
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight mb-6"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Let&apos;s build something
            <br />
            <span className="text-primary">that lasts.</span>
          </h2>
          <p className="text-foreground-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re starting from scratch or scaling an existing
            system, we&apos;re here to help you build software that grows with
            your business.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Primary CTA */}
          <Link href="/contact">
            <Button
              text="Start a conversation"
              className="rounded-full px-8 py-4 sm:px-10 sm:py-5 bg-linear-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
            />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-4 text-foreground-muted hover:text-foreground transition-colors font-medium"
          >
            <span>Learn about us</span>
            <Icon name="ArrowRight" size={20} />
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border/30"
        >
          <p className="text-sm text-foreground-muted mb-6">
            Trusted by teams building the next generation of software
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-foreground-muted/60">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={18} className="text-primary/60" />
              <span className="text-sm">Secure by design</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={18} className="text-primary/60" />
              <span className="text-sm">Built for scale</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="GitBranch" size={18} className="text-primary/60" />
              <span className="text-sm">Production-ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
