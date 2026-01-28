"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface SystemComponent {
  id: string;
  title: string;
  purpose: string;
  capabilities: string[];
  icon: string;
}

const components: SystemComponent[] = [
  {
    id: "frontend",
    title: "Frontend",
    purpose: "User-facing experiences that engage and convert",
    capabilities: [
      "Responsive web applications",
      "Native mobile experiences",
      "Progressive web apps (PWA)",
    ],
    icon: "Monitor",
  },
  {
    id: "backend",
    title: "Backend",
    purpose: "Robust systems that power your business logic",
    capabilities: [
      "RESTful & GraphQL APIs",
      "Secure authentication",
      "Business rule engines",
    ],
    icon: "Server",
  },
  {
    id: "data",
    title: "Data",
    purpose: "Structured storage and intelligent insights",
    capabilities: [
      "Scalable databases",
      "Real-time analytics",
      "Automated reporting",
    ],
    icon: "Database",
  },
  {
    id: "integrations",
    title: "Integrations",
    purpose: "Seamless connections to external services",
    capabilities: [
      "Payment processing",
      "CRM synchronization",
      "Third-party APIs",
    ],
    icon: "Plug",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    purpose: "Reliable foundation that scales with demand",
    capabilities: [
      "Cloud hosting",
      "CDN & edge delivery",
      "Security hardening",
    ],
    icon: "Cloud",
  },
  {
    id: "operations",
    title: "Operations",
    purpose: "Continuous improvement and monitoring",
    capabilities: [
      "Workflow automation",
      "Performance monitoring",
      "Maintenance & updates",
    ],
    icon: "Settings",
  },
];

export function EcosystemArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity0 = useTransform(scrollYProgress, [0, 0, 0.1, 1], [0, 0, 1, 1]);
  const y0 = useTransform(scrollYProgress, [0, 0, 0.1, 1], [30, 30, 0, 0]);
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 1],
    [0, 0, 1, 1],
  );
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [30, 30, 0, 0]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 1],
    [0, 0, 1, 1],
  );
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [30, 30, 0, 0]);
  const opacity3 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 1],
    [0, 0, 1, 1],
  );
  const y3 = useTransform(scrollYProgress, [0, 0.3, 0.4, 1], [30, 30, 0, 0]);
  const opacity4 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 1],
    [0, 0, 1, 1],
  );
  const y4 = useTransform(scrollYProgress, [0, 0.4, 0.5, 1], [30, 30, 0, 0]);
  const opacity5 = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 1],
    [0, 0, 1, 1],
  );
  const y5 = useTransform(scrollYProgress, [0, 0.5, 0.6, 1], [30, 30, 0, 0]);

  const cardTransforms = [
    { opacity: opacity0, y: y0 },
    { opacity: opacity1, y: y1 },
    { opacity: opacity2, y: y2 },
    { opacity: opacity3, y: y3 },
    { opacity: opacity4, y: y4 },
    { opacity: opacity5, y: y5 },
  ];

  return (
    <SectionWrapper id="architecture" className="relative">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(93, 158, 255, 0.05) 0%, transparent 60%)",
        }}
      />

      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-linear-to-r from-transparent to-primary" />
          <span className="text-sm font-mono text-primary uppercase tracking-[0.3em]">
            Components
          </span>
          <div className="w-8 h-px bg-linear-to-l from-transparent to-primary" />
        </div>
        <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Ecosystem Components
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          Each layer is purpose-built, production-ready, and designed to
          integrate seamlessly.
        </p>
      </motion.div>

      {/* Components Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        ref={containerRef}
      >
        {components.map((component, index) => (
          <motion.div
            key={component.id}
            initial={{ opacity: 0, y: 30 }}
            style={cardTransforms[index]}
          >
            <Card
              className={cn(
                "group p-6 lg:p-8 hover:border-primary/30 transition-all duration-500",
              )}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon
                  name={component.icon}
                  size={24}
                  className="text-primary"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {component.title}
              </h3>

              {/* Purpose */}
              <p className="text-foreground-muted text-sm mb-5 leading-relaxed">
                {component.purpose}
              </p>

              {/* Capabilities */}
              <ul className="space-y-2.5">
                {component.capabilities.map((capability, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span className="text-foreground-secondary">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
