"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { motion } from "framer-motion";

interface AboutSectionProps {
  className?: string;
}

const principles = [
  {
    icon: "GitBranch",
    title: "Deep Roots",
    description:
      "We invest time upfront to understand your domain deeply. Strong foundations lead to sustainable growth.",
  },
  {
    icon: "Layers",
    title: "Core Strength",
    description:
      "Our systems are built from the inside out—solid architecture that scales gracefully under pressure.",
  },
  {
    icon: "Repeat",
    title: "Organic Growth",
    description:
      "We believe in iterative development. Ship early, learn fast, and evolve based on real feedback.",
  },
  {
    icon: "Shield",
    title: "Resilience",
    description:
      "Like the cedar tree, our software is built to weather storms—reliable, tested, and production-ready.",
  },
];

/**
 * AboutSection — "Architecture Mindset" / "How We Think"
 * Engineering philosophy conveyed through visual metaphor.
 * Terminal-style process indicator with principles.
 */
const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <SectionWrapper
      id="about"
      className={cn("relative overflow-hidden", className)}
    >
      {/* Background subtle accent */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(93, 158, 255, 0.03) 0%, transparent 50%)",
        }}
      />

      {/* Section header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-linear-to-r from-primary to-transparent" />
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Philosophy
          </span>
        </div>
        <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          How We Think
        </h2>
        <p className="text-foreground-muted max-w-2xl">
          Engineering is more than code. It&apos;s about making decisions that
          compound over time.
        </p>
      </motion.div>

      {/* Main content - Two column layout */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Engineering Principles */}
        <div className="space-y-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group flex gap-4 p-5 rounded-xl system-card hover:border-primary/30 transition-all duration-300">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon
                    name={principle.icon}
                    size={20}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Terminal-style visualization */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Terminal window */}
          <div className="rounded-2xl bg-[#0a0a10] border border-border overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-[#050508]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-xs text-foreground-muted font-mono">
                cedar-core.sh
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-primary">$</span>
                <span className="text-foreground-muted ml-2">
                  cedar init --project
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-2 pl-4 border-l border-border/50"
              >
                <div className="flex items-center gap-2">
                  <span className="text-cedar">✓</span>
                  <span className="text-foreground-secondary">
                    Discovery & Planning
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cedar">✓</span>
                  <span className="text-foreground-secondary">
                    Architecture Design
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cedar">✓</span>
                  <span className="text-foreground-secondary">
                    Iterative Development
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cedar">✓</span>
                  <span className="text-foreground-secondary">
                    Testing & QA
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cedar">✓</span>
                  <span className="text-foreground-secondary">
                    Deployment & Launch
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-primary">$</span>
                <span className="text-foreground-muted ml-2">
                  project.status
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="pl-4"
              >
                <span className="text-foreground">Ready for production</span>
                <span className="ml-2 text-cedar">●</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="flex items-center gap-2 pt-2"
              >
                <span className="text-primary">$</span>
                <span className="text-foreground-muted">_</span>
                <motion.span
                  className="w-2 h-4 bg-primary"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
