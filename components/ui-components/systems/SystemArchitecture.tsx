"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui";
import { SectionWrapper } from "@/components/ui-components/shared";

interface SystemArchitectureProps {
  className?: string;
}

/**
 * Capability data for the system architecture diagram
 * Left side: foundational/backend capabilities
 * Right side: interfaces/connectivity capabilities
 */
const capabilities = [
  {
    id: "backend",
    title: "Backend Systems",
    description: "Scalable APIs and services designed to handle real-world load.",
    icon: "Server",
    side: "left" as const,
    offset: 0,
  },
  {
    id: "web",
    title: "Web Applications",
    description: "High-performance interfaces built on modern frontend systems.",
    icon: "LayoutDashboard",
    side: "right" as const,
    offset: 80,
  },
  {
    id: "data",
    title: "Data Platforms",
    description: "Real-time pipelines, analytics, and data foundations built to scale.",
    icon: "Database",
    side: "left" as const,
    offset: 160,
  },
  {
    id: "integration",
    title: "APIs & Integrations",
    description: "Reliable connections between products, platforms, and partners.",
    icon: "GitBranch",
    side: "right" as const,
    offset: 240,
  },
  {
    id: "security",
    title: "Security Architecture",
    description: "Authentication, authorization, and compliance embedded by design.",
    icon: "Shield",
    side: "left" as const,
    offset: 320,
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description: "Cross-platform apps with shared logic and native performance.",
    icon: "Smartphone",
    side: "right" as const,
    offset: 400,
  },
];

/**
 * SystemArchitecture — Visual System Diagram
 *
 * A calm, architectural representation of Cedar Core's capabilities.
 * Central spine with branching capability nodes.
 * Not a feature list — a system diagram brought to life.
 */
const SystemArchitecture = ({ className }: SystemArchitectureProps) => {
  return (
    <SectionWrapper
      id="architecture"
      className={cn("relative overflow-hidden", className)}
    >
      {/* Atmospheric background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central glow */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-[600px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse 100% 50% at center, rgba(93, 158, 255, 0.08) 0%, transparent 70%)",
          }}
        />
        {/* Subtle particles/stars effect */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      {/* Section header */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-linear-to-r from-transparent to-primary" />
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            System Architecture
          </span>
          <div className="w-8 h-px bg-linear-to-l from-transparent to-primary" />
        </div>
        <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          What We Build
        </h2>
        <p className="text-foreground-muted max-w-xl mx-auto">
          Full-stack systems designed for scale, security, and longevity.
        </p>
      </motion.div>

      {/* Architecture diagram */}
      <div className="relative max-w-5xl mx-auto min-h-[800px] md:min-h-[700px]">
        {/* Central spine with glow */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block">
          {/* Outer glow layer */}
          <motion.div
            className="absolute inset-0 w-8 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(93, 158, 255, 0.15) 10%, rgba(93, 158, 255, 0.2) 50%, rgba(82, 95, 249, 0.15) 90%, transparent 100%)",
              filter: "blur(12px)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          {/* Core spine line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, var(--primary) 10%, var(--primary) 90%, transparent 100%)",
              boxShadow: "0 0 20px rgba(93, 158, 255, 0.5)",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Animated pulse traveling down the spine */}
          <motion.div
            className="absolute left-1/2 w-2 h-32 -translate-x-1/2 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(93, 158, 255, 0.8), rgba(82, 95, 249, 0.6), transparent)",
              filter: "blur(4px)",
            }}
            animate={{
              top: ["-10%", "110%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5,
            }}
          />
        </div>

        {/* Capability cards with connectors */}
        <div className="relative">
          {capabilities.map((capability, index) => {
            const isLeft = capability.side === "left";
            const nodeTop = capability.offset + 50; // Position for the connector node

            return (
              <motion.div
                key={capability.id}
                className={cn(
                  "relative mb-8 md:mb-0 md:absolute md:w-[42%]",
                  isLeft ? "md:left-0" : "md:right-0"
                )}
                style={{
                  top: `${capability.offset}px`,
                }}
                initial={{
                  opacity: 0,
                  x: isLeft ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1 + 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Connector line to spine - desktop only */}
                <motion.div
                  className={cn(
                    "absolute top-1/2 h-[2px] hidden md:block",
                    isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"
                  )}
                  style={{
                    width: "calc(8% + 20px)",
                    background: isLeft
                      ? "linear-gradient(90deg, transparent, var(--primary))"
                      : "linear-gradient(90deg, var(--primary), transparent)",
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Connector node on spine - desktop only */}
                <motion.div
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center",
                    isLeft ? "right-[-58%]" : "left-[-58%]"
                  )}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute w-6 h-6 rounded-full bg-primary/20"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.1, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />
                  {/* Core node */}
                  <div
                    className="w-3 h-3 rounded-full bg-primary"
                    style={{
                      boxShadow:
                        "0 0 10px rgba(93, 158, 255, 0.6), 0 0 20px rgba(93, 158, 255, 0.3)",
                    }}
                  />
                </motion.div>

                {/* Capability card */}
                <motion.div
                  className="group p-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm transition-all duration-400"
                  whileHover={{
                    borderColor: "rgba(93, 158, 255, 0.3)",
                    boxShadow:
                      "0 0 30px rgba(93, 158, 255, 0.1), 0 10px 40px rgba(0, 0, 0, 0.2)",
                    y: -4,
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon container */}
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                      <Icon
                        name={capability.icon}
                        size={24}
                        className="text-primary"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
                        {capability.title}
                      </h3>
                      <p className="text-sm text-foreground-muted leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div
        className="mt-16 flex items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="w-16 h-px bg-linear-to-r from-transparent to-border" />
        <motion.div
          className="w-2 h-2 rounded-full bg-primary"
          style={{
            boxShadow: "0 0 10px rgba(93, 158, 255, 0.5)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="w-16 h-px bg-linear-to-l from-transparent to-border" />
      </motion.div>
    </SectionWrapper>
  );
};

export default SystemArchitecture;


