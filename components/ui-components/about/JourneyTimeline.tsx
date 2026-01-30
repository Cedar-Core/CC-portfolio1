"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { Card } from "@/components/ui/card";

interface JourneyTimelineProps {
  className?: string;
}

interface Milestone {
  date: string;
  title: string;
  description: string;
  type: "foundation" | "delivery" | "capability" | "growth";
  icon: string;
}

const milestones: Milestone[] = [
  {
    date: "Jun 2024",
    title: "Cedar Core Founded",
    description:
      "Started with a clear vision: build connected digital ecosystems, not isolated apps.",
    type: "foundation",
    icon: "Sprout",
  },
  {
    date: "Aug 2024",
    title: "First System Delivered",
    description:
      "Shipped production-ready backend architecture for our first client ecosystem.",
    type: "delivery",
    icon: "Rocket",
  },
  {
    date: "Oct 2024",
    title: "Internal Platform Launch",
    description:
      "Built standardized tooling to accelerate development across all projects.",
    type: "capability",
    icon: "Layers",
  },
  {
    date: "Dec 2024",
    title: "Multi-System Integration",
    description:
      "Connected disparate client systems into unified, scalable ecosystems.",
    type: "capability",
    icon: "GitBranch",
  },
  {
    date: "Jan 2026",
    title: "Scaling Operations",
    description:
      "Expanding capacity for larger ecosystem projects and long-term partnerships.",
    type: "growth",
    icon: "TrendingUp",
  },
];

const typeColors = {
  foundation: "bg-cedar/20 border-cedar/30 text-cedar",
  delivery: "bg-primary/20 border-primary/30 text-primary",
  capability: "bg-secondary/20 border-secondary/30 text-secondary",
  growth: "bg-primary/20 border-primary/30 text-primary",
};

/**
 * JourneyTimeline — Month-based timeline showing company growth
 * Uses EcosystemBenefits scroll-linked stagger pattern
 */
export default function JourneyTimeline({ className }: JourneyTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create scroll-linked transforms for each milestone
  const cardTransforms = milestones.map((_, index) => {
    const start = index * 0.12;
    const mid = start + 0.1;
    return {
      opacity: useTransform(scrollYProgress, [start, mid, 1], [0, 1, 1]),
      y: useTransform(scrollYProgress, [start, mid, 1], [40, 0, 0]),
    };
  });

  // Timeline line scale
  const lineScale = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <SectionWrapper id="journey" className={cn("relative", className)}>
      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(93, 158, 255, 0.04) 0%, transparent 60%)",
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
            Our Journey
          </span>
          <div className="w-8 h-px bg-linear-to-l from-transparent to-primary" />
        </div>
        <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Growing with Purpose
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          From founding to today — building momentum through real delivery.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto" ref={containerRef}>
        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden sm:block"
          style={{
            scaleY: lineScale,
            transformOrigin: "top",
          }}
        />

        {/* Milestone items */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={milestone.date}
                className={cn(
                  "relative flex items-start gap-6",
                  "sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-8",
                )}
                style={{
                  opacity: cardTransforms[index].opacity,
                  y: cardTransforms[index].y,
                }}
              >
                {/* Left content (even items on desktop) */}
                <div
                  className={cn(
                    "hidden sm:block",
                    isEven ? "text-right" : "order-3",
                  )}
                >
                  {isEven && (
                    <Card className="p-6 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-start gap-4 justify-end">
                        <div className="text-right">
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-foreground-muted leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                        <div
                          className={cn(
                            "shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                            typeColors[milestone.type],
                          )}
                        >
                          <Icon name={milestone.icon} size={20} />
                        </div>
                      </div>
                    </Card>
                  )}
                </div>

                {/* Center - Timeline dot and date */}
                <div className="flex flex-col items-center z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20" />
                  <span className="mt-2 text-xs font-mono text-primary font-semibold whitespace-nowrap">
                    {milestone.date}
                  </span>
                </div>

                {/* Right content (odd items on desktop, all on mobile) */}
                <div className={cn("flex-1", isEven && "hidden sm:block")}>
                  {(!isEven || true) && (
                    <Card
                      className={cn(
                        "p-6 hover:border-primary/30 transition-all duration-300",
                        isEven && "sm:hidden",
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                            typeColors[milestone.type],
                          )}
                        >
                          <Icon name={milestone.icon} size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-foreground-muted leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom statement */}
      <motion.div
        className="mt-16 lg:mt-20 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-lg text-foreground-muted leading-relaxed">
          Each milestone represents real systems shipped, real problems solved.{" "}
          <span className="text-foreground font-medium">
            No marketing fluff.
          </span>
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
