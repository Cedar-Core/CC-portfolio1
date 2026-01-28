"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Icon } from "@/components/ui";
import { SectionWrapper } from "@/components/ui-components/shared";
import { useRef, useEffect, useState, useMemo } from "react";

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
 * CapabilityFlow — "What We Build"
 * Inspired by Lens-style scroll storytelling.
 * Pinned section that reveals capabilities sequentially based on scroll progress.
 */
const CapabilityFlow = ({ className }: CapabilityFlowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile to disable pinning
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll progress for a more "Lens-like" weighted feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Precompute ranges for transforms
  const ranges = useMemo(() => {
    return capabilities.map((_, index) => {
      const start = 0.1 + (index * 0.8) / capabilities.length;
      const end = 0.1 + ((index + 1) * 0.8) / capabilities.length;
      const mid = (start + end) / 2;
      return { start, end, mid };
    });
  }, []);

  // Define all transforms at top level to avoid hook calls in callbacks
  const opacities = [
    useTransform(smoothProgress, [0, 0.05, ranges[0].start, ranges[0].mid, ranges[0].end, ranges[0].end + 0.05], [1, 1, 1, 1, 0.4, 0.2]),
    useTransform(smoothProgress, [ranges[1].start - 0.05, ranges[1].start, ranges[1].mid, ranges[1].end, ranges[1].end + 0.05], [0, 1, 1, 0.4, 0.2]),
    useTransform(smoothProgress, [ranges[2].start - 0.05, ranges[2].start, ranges[2].mid, ranges[2].end, ranges[2].end + 0.05], [0, 1, 1, 0.4, 0.2]),
    useTransform(smoothProgress, [ranges[3].start - 0.05, ranges[3].start, ranges[3].mid, ranges[3].end, ranges[3].end + 0.05], [0, 1, 1, 0.4, 0.2]),
    useTransform(smoothProgress, [ranges[4].start - 0.05, ranges[4].start, ranges[4].mid, ranges[4].end, ranges[4].end + 0.05], [0, 1, 1, 0.4, 0.2]),
    useTransform(smoothProgress, [ranges[5].start - 0.05, ranges[5].start, ranges[5].mid, ranges[5].end, ranges[5].end + 0.05], [0, 1, 1, 0.4, 0.2]),
  ];

  const scales = [
    useTransform(smoothProgress, [0, 0.05, ranges[0].start, ranges[0].mid, ranges[0].end], [1, 1, 1, 1, 0.95]),
    useTransform(smoothProgress, [ranges[1].start - 0.05, ranges[1].start, ranges[1].mid, ranges[1].end], [0.9, 1, 1, 0.95]),
    useTransform(smoothProgress, [ranges[2].start - 0.05, ranges[2].start, ranges[2].mid, ranges[2].end], [0.9, 1, 1, 0.95]),
    useTransform(smoothProgress, [ranges[3].start - 0.05, ranges[3].start, ranges[3].mid, ranges[3].end], [0.9, 1, 1, 0.95]),
    useTransform(smoothProgress, [ranges[4].start - 0.05, ranges[4].start, ranges[4].mid, ranges[4].end], [0.9, 1, 1, 0.95]),
    useTransform(smoothProgress, [ranges[5].start - 0.05, ranges[5].start, ranges[5].mid, ranges[5].end], [0.9, 1, 1, 0.95]),
  ];

  const xTransforms = [
    useTransform(smoothProgress, [0, ranges[0].start], [0, 0]),
    useTransform(smoothProgress, [ranges[1].start - 0.05, ranges[1].start], [capabilities[1].position === "left" ? -40 : 40, 0]),
    useTransform(smoothProgress, [ranges[2].start - 0.05, ranges[2].start], [capabilities[2].position === "left" ? -40 : 40, 0]),
    useTransform(smoothProgress, [ranges[3].start - 0.05, ranges[3].start], [capabilities[3].position === "left" ? -40 : 40, 0]),
    useTransform(smoothProgress, [ranges[4].start - 0.05, ranges[4].start], [capabilities[4].position === "left" ? -40 : 40, 0]),
    useTransform(smoothProgress, [ranges[5].start - 0.05, ranges[5].start], [capabilities[5].position === "left" ? -40 : 40, 0]),
  ];

  const blurValues = [
    useTransform(smoothProgress, [0, ranges[0].start - 0.05, ranges[0].start, ranges[0].end, ranges[0].end + 0.05], ["blur(4px)", "blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]),
    useTransform(smoothProgress, [ranges[1].start - 0.05, ranges[1].start, ranges[1].end, ranges[1].end + 0.05], ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]),
    useTransform(smoothProgress, [ranges[2].start - 0.05, ranges[2].start, ranges[2].end, ranges[2].end + 0.05], ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]),
    useTransform(smoothProgress, [ranges[3].start - 0.05, ranges[3].start, ranges[3].end, ranges[3].end + 0.05], ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]),
    useTransform(smoothProgress, [ranges[4].start - 0.05, ranges[4].start, ranges[4].end, ranges[4].end + 0.05], ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]),
    useTransform(smoothProgress, [ranges[5].start - 0.05, ranges[5].start, ranges[5].end, ranges[5].end + 0.05], ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]),
  ];

  const lineOpacities = [
    useTransform(smoothProgress, [ranges[0].start, ranges[0].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[1].start, ranges[1].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[2].start, ranges[2].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[3].start, ranges[3].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[4].start, ranges[4].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[5].start, ranges[5].mid], [0, 1]),
  ];

  const lineScaleXs = [
    useTransform(smoothProgress, [ranges[0].start, ranges[0].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[1].start, ranges[1].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[2].start, ranges[2].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[3].start, ranges[3].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[4].start, ranges[4].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[5].start, ranges[5].mid], [0, 1]),
  ];

  const dotScales = [
    useTransform(smoothProgress, [ranges[0].start, ranges[0].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[1].start, ranges[1].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[2].start, ranges[2].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[3].start, ranges[3].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[4].start, ranges[4].mid], [0, 1]),
    useTransform(smoothProgress, [ranges[5].start, ranges[5].mid], [0, 1]),
  ];

  const dotBackgrounds = [
    useTransform(smoothProgress, [ranges[0].mid, ranges[0].mid + 0.05], ["var(--background)", "var(--primary)"]),
    useTransform(smoothProgress, [ranges[1].mid, ranges[1].mid + 0.05], ["var(--background)", "var(--primary)"]),
    useTransform(smoothProgress, [ranges[2].mid, ranges[2].mid + 0.05], ["var(--background)", "var(--primary)"]),
    useTransform(smoothProgress, [ranges[3].mid, ranges[3].mid + 0.05], ["var(--background)", "var(--primary)"]),
    useTransform(smoothProgress, [ranges[4].mid, ranges[4].mid + 0.05], ["var(--background)", "var(--primary)"]),
    useTransform(smoothProgress, [ranges[5].mid, ranges[5].mid + 0.05], ["var(--background)", "var(--primary)"]),
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative",
        !isMobile && "h-[450vh]", // Define scroll distance for desktop
      )}
    >
      {/* Header section - scrolls out before capabilities pin */}
      <div className="py-16 md:py-24 px-6">
        <motion.div
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-primary/50" />
            <motion.span
              className="text-sm font-mono text-primary uppercase tracking-[0.3em] font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              Core Systems
            </motion.span>
            <div className="w-12 h-px bg-linear-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="heading-xl text-4xl md:text-7xl lg:text-8xl text-foreground mb-6 font-bold tracking-tight">
            What We <span className="text-primary">Build</span>
          </h2>

          <p className="text-foreground-secondary max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed opacity-80 current-line">
            Engineering full-stack systems designed for extreme scale,
            uncompromising security, and long-term architectural health.
          </p>
        </motion.div>
      </div>

      {/* Sticky capabilities section */}
      <div
        className={cn(
          !isMobile &&
            "sticky top-0 h-screen flex flex-col justify-center",
        )}
      >
        <SectionWrapper id="capabilities" className="relative py-0!">
          {/* Flow diagram layout */}
          <div className="relative max-w-4xl mx-auto px-4">
            {/* Central vertical line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
              style={{
                background:
                  "linear-gradient(180deg, transparent, var(--border) 10%, var(--border) 90%, transparent)",
                scaleY: useTransform(
                  smoothProgress,
                  [0, 0.1, 0.9, 1],
                  [0, 1, 1, 0],
                ),
                originY: 0,
              }}
            />

            {/* Capability nodes */}
            <div className="relative space-y-12 md:space-y-0">
              {capabilities.map((capability, index) => {
                return (
                  <motion.div
                    key={capability.id}
                    className={cn(
                      "relative md:w-[45%]",
                      capability.position === "left"
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8",
                      index > 0 && !isMobile && "md:-mt-15",
                    )}
                    style={{
                      opacity: isMobile ? 1 : opacities[index],
                      scale: isMobile ? 1 : scales[index],
                      x: isMobile ? 0 : xTransforms[index],
                      filter: isMobile ? "none" : blurValues[index],
                    }}
                  >
                    {/* Connection line to center - desktop only */}
                    {!isMobile && (
                      <motion.div
                        className={cn(
                          "absolute top-1/2 w-8 h-px bg-primary hidden md:block",
                          capability.position === "left" ? "right-0" : "left-0",
                        )}
                        style={{
                          opacity: lineOpacities[index],
                          scaleX: lineScaleXs[index],
                          originX: capability.position === "left" ? 1 : 0,
                        }}
                      />
                    )}

                    {/* Connection dot on center line */}
                    {!isMobile && (
                      <motion.div
                        className={cn(
                          "absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background hidden md:block",
                          capability.position === "left"
                            ? "-right-5.5"
                            : "-left-5.5",
                        )}
                        style={{
                          scale: dotScales[index],
                          backgroundColor: dotBackgrounds[index],
                        }}
                      />
                    )}

                    {/* Capability card */}
                    <div className="capability-node group">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon
                            name={capability.icon}
                            size={24}
                            className="text-primary"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {capability.title}
                          </h3>
                          <p className="text-sm text-foreground-muted leading-relaxed">
                            {capability.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom accent */}
          <motion.div
            className="mt-16 md:mt-20 flex items-center justify-center gap-4"
            style={{
              opacity: useTransform(smoothProgress, [0.9, 1], [1, 0]),
            }}
          >
            <div className="w-12 h-px bg-linear-to-r from-transparent to-border" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-12 h-px bg-linear-to-l from-transparent to-border" />
          </motion.div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default CapabilityFlow;
