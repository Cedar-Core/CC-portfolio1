"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { Button } from "@/components/ui-components/shared";

export function EcosystemCTA() {
  return (
    <SectionWrapper id="cta" className="relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(93, 158, 255, 0.08) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {/* Pre-heading */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-6"
        >
          <span className="text-sm text-primary font-medium tracking-[0.3em] uppercase">
            Ready to start?
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="heading-lg text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8"
        >
          Build your ecosystem
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-lg text-foreground-muted leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Let&apos;s discuss your vision and architect a connected digital
          system that scales with your ambition.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <Link href="/contact">
            <Button
              text="Start the conversation"
              className="rounded-full px-10 py-5 bg-linear-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
            />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-4 text-foreground-muted hover:text-foreground transition-colors font-medium"
          >
            <Icon
              name="MoveLeft"
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to home</span>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-foreground-muted">
            <div className="flex items-center gap-2">
              <Icon name="Check" size={16} className="text-cedar" />
              <span>No commitment consultation</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Icon name="Check" size={16} className="text-cedar" />
              <span>Response within 24 hours</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Icon name="Check" size={16} className="text-cedar" />
              <span>Technical team available</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
