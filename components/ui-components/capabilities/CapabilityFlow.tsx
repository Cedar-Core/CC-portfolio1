"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui";
import { SectionWrapper } from "@/components/ui-components/shared";

interface CapabilityFlowProps {
  className?: string;
}

const capabilities = [
  {
    id: "backend",
    title: "Backend Systems",
    description:
      "Scalable APIs, microservices, and data pipelines that handle millions of requests.",
    icon: "Server",
    position: "left",
  },
  {
    id: "web",
    title: "Web Applications",
    description:
      "Production-grade frontends built with React, Next.js, and modern tooling.",
    icon: "LayoutDashboard",
    position: "right",
  },
  {
    id: "data",
    title: "Data Platforms",
    description:
      "Real-time analytics, warehousing, and ML-ready data infrastructure.",
    icon: "Database",
    position: "left",
  },
  {
    id: "integration",
    title: "APIs & Integrations",
    description:
      "Connect systems, automate workflows, and build developer ecosystems.",
    icon: "GitBranch",
    position: "right",
  },
  {
    id: "security",
    title: "Security Architecture",
    description:
      "Authentication, authorization, and compliance built into the foundation.",
    icon: "Shield",
    position: "left",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description:
      "Cross-platform apps with native performance and shared business logic.",
    icon: "Smartphone",
    position: "right",
  },
];

/**
 * CapabilityFlow — "What We Do"
 * Not a cards grid. A visual flow diagram showing interconnected capabilities.
 * Each capability is a node connected to a central flow line.
 */
const CapabilityFlow = ({ className }: CapabilityFlowProps) => {
  return (
    <SectionWrapper id="capabilities" className={cn("relative", className)}>
      {/* Section header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-linear-to-r from-transparent to-primary" />
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Capabilities
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

      {/* Flow diagram layout */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central vertical line */}
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
          style={{
            background:
              "linear-gradient(180deg, transparent, var(--border) 10%, var(--border) 90%, transparent)",
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Capability nodes */}
        <div className="relative space-y-8 md:space-y-0">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              className={cn(
                "relative md:w-[45%]",
                capability.position === "left"
                  ? "md:mr-auto md:pr-8"
                  : "md:ml-auto md:pl-8",
                index > 0 && "md:mt-[-40px]",
              )}
              initial={{
                opacity: 0,
                x: capability.position === "left" ? -40 : 40,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Connection line to center - desktop only */}
              <div
                className={cn(
                  "absolute top-1/2 w-8 h-px bg-border hidden md:block",
                  capability.position === "left" ? "right-0" : "left-0",
                )}
              />

              {/* Connection dot on center line */}
              <div
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background hidden md:block",
                  capability.position === "left"
                    ? "right-[-22px]"
                    : "left-[-22px]",
                )}
              />

              {/* Capability card */}
              <div className="capability-node group">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon
                      name={capability.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div
        className="mt-20 flex items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="w-12 h-px bg-linear-to-r from-transparent to-border" />
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="w-12 h-px bg-linear-to-l from-transparent to-border" />
      </motion.div>
    </SectionWrapper>
  );
};

export default CapabilityFlow;
