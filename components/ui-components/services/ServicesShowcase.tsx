"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Icon, Shad } from "@/components/ui";
import { useRef, useEffect, useState, useMemo } from "react";
import { getServices } from "@/config/helpers";

interface ServicesShowcaseProps {
  className?: string;
}

/**
 * ServicesShowcase — Scroll-driven services reveal
 * Pinned section that reveals each service sequentially as user scrolls.
 * Pattern derived from TeamScrollSection and CapabilityFlow.
 */
export default function ServicesShowcase({ className }: ServicesShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const services = getServices();

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

  // Smooth the scroll progress for a weighted, Lenis-like feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Compute ranges for each service
  const serviceRanges = useMemo(() => {
    return services.map((_, index) => {
      const start = 0.1 + (index * 0.8) / services.length;
      const end = 0.1 + ((index + 1) * 0.8) / services.length;
      const mid = (start + end) / 2;
      return { start, end, mid };
    });
  }, [services]);

  // Progress indicator for left column
  const progressIndicatorHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"],
  );

  // Service opacities - computed at top level
  // Each service fades in when active and completely hides when not
  const serviceOpacities = [
    useTransform(
      smoothProgress,
      [
        0,
        0.02,
        serviceRanges[0]?.end - 0.02 || 0.15,
        serviceRanges[0]?.end || 0.2,
      ],
      [1, 1, 1, 0],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[1]?.start || 0.2) - 0.02,
        serviceRanges[1]?.start || 0.2,
        (serviceRanges[1]?.end || 0.35) - 0.02,
        serviceRanges[1]?.end || 0.35,
      ],
      [0, 1, 1, 0],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[2]?.start || 0.35) - 0.02,
        serviceRanges[2]?.start || 0.35,
        (serviceRanges[2]?.end || 0.5) - 0.02,
        serviceRanges[2]?.end || 0.5,
      ],
      [0, 1, 1, 0],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[3]?.start || 0.5) - 0.02,
        serviceRanges[3]?.start || 0.5,
        (serviceRanges[3]?.end || 0.65) - 0.02,
        serviceRanges[3]?.end || 0.65,
      ],
      [0, 1, 1, 0],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[4]?.start || 0.65) - 0.02,
        serviceRanges[4]?.start || 0.65,
        (serviceRanges[4]?.end || 0.8) - 0.02,
        serviceRanges[4]?.end || 0.8,
      ],
      [0, 1, 1, 0],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[5]?.start || 0.8) - 0.02,
        serviceRanges[5]?.start || 0.8,
        serviceRanges[5]?.end || 0.95,
        1,
      ],
      [0, 1, 1, 1],
    ),
  ];

  // Y transforms for services
  const serviceYTransforms = [
    useTransform(smoothProgress, [0, 0.05], [20, 0]),
    useTransform(
      smoothProgress,
      [(serviceRanges[1]?.start || 0.2) - 0.05, serviceRanges[1]?.start || 0.2],
      [30, 0],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[2]?.start || 0.35) - 0.05,
        serviceRanges[2]?.start || 0.35,
      ],
      [30, 0],
    ),
    useTransform(
      smoothProgress,
      [(serviceRanges[3]?.start || 0.5) - 0.05, serviceRanges[3]?.start || 0.5],
      [30, 0],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[4]?.start || 0.65) - 0.05,
        serviceRanges[4]?.start || 0.65,
      ],
      [30, 0],
    ),
    useTransform(
      smoothProgress,
      [(serviceRanges[5]?.start || 0.8) - 0.05, serviceRanges[5]?.start || 0.8],
      [30, 0],
    ),
  ];

  // Scale transforms
  const serviceScales = [
    useTransform(
      smoothProgress,
      [0, 0.05, serviceRanges[0]?.end || 0.2],
      [1, 1, 0.98],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[1]?.start || 0.2) - 0.05,
        serviceRanges[1]?.start || 0.2,
        serviceRanges[1]?.end || 0.35,
      ],
      [0.98, 1, 0.98],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[2]?.start || 0.35) - 0.05,
        serviceRanges[2]?.start || 0.35,
        serviceRanges[2]?.end || 0.5,
      ],
      [0.98, 1, 0.98],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[3]?.start || 0.5) - 0.05,
        serviceRanges[3]?.start || 0.5,
        serviceRanges[3]?.end || 0.65,
      ],
      [0.98, 1, 0.98],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[4]?.start || 0.65) - 0.05,
        serviceRanges[4]?.start || 0.65,
        serviceRanges[4]?.end || 0.8,
      ],
      [0.98, 1, 0.98],
    ),
    useTransform(
      smoothProgress,
      [
        (serviceRanges[5]?.start || 0.8) - 0.05,
        serviceRanges[5]?.start || 0.8,
        1,
      ],
      [0.98, 1, 1],
    ),
  ];

  // Mobile fallback: render stacked content
  if (isMobile) {
    return (
      <section
        id="services-showcase"
        className={cn("py-24 md:py-32 px-6", className)}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-linear-to-r from-primary to-transparent" />
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                Our Services
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 font-bold"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              End-to-End Solutions
            </h2>
            <p className="text-foreground-muted max-w-xl">
              From initial concept to production deployment—we build complete
              software systems tailored to your needs.
            </p>
          </div>

          {/* Stacked services for mobile */}
          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-xl bg-surface-elevated border border-border"
              >
                <div className="flex gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-foreground mb-1"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground-muted">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
                {service.features && service.features.length > 0 && (
                  <ul className="grid grid-cols-2 gap-2 mt-4">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-foreground-muted"
                      >
                        <Icon
                          name="Check"
                          size={14}
                          className="text-primary shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      id="services-showcase"
      ref={containerRef}
      className={cn("relative h-[400vh]", className)}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            {/* Left Column - Static Anchor */}
            <div className="relative">
              {/* Vertical accent line with progress */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-primary"
                  style={{ height: progressIndicatorHeight }}
                />
              </div>

              <div className="pl-8">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono text-primary uppercase tracking-widest">
                    Our Services
                  </span>
                </div>

                {/* Main heading */}
                <h2
                  className="text-4xl lg:text-5xl xl:text-6xl text-foreground font-bold leading-tight"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  What We
                  <br />
                  <span className="text-primary">Build</span>
                </h2>

                {/* Subtext */}
                <p className="mt-6 text-foreground-muted leading-relaxed max-w-sm">
                  Comprehensive software solutions designed for scale,
                  reliability, and long-term maintainability.
                </p>

                {/* Service indicators */}
                <div className="mt-12 space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      className="flex items-center gap-3"
                      style={{
                        opacity: serviceOpacities[index] || 1,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {service.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Dynamic Content */}
            <div className="relative min-h-125">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="absolute inset-0"
                  style={{
                    opacity: serviceOpacities[index] || 1,
                    y: serviceYTransforms[index] || 0,
                    scale: serviceScales[index] || 1,
                  }}
                >
                  <Shad.Card className="h-full border-border p-2 sm:p-4">
                    <Shad.CardHeader className="flex flex-row items-start gap-5 space-y-0 pb-6 mb-2">
                      <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon
                          name={service.icon}
                          size={32}
                          className="text-primary"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Shad.CardTitle
                          className="text-2xl lg:text-3xl font-bold text-foreground mb-2"
                          style={{ fontFamily: "var(--font-oswald)" }}
                        >
                          {service.title}
                        </Shad.CardTitle>
                        <Shad.CardDescription className="text-foreground-muted text-base leading-relaxed">
                          {service.shortDescription}
                        </Shad.CardDescription>
                      </div>
                    </Shad.CardHeader>

                    <Shad.CardContent className="space-y-8">
                      {/* Full description */}
                      <p className="text-foreground-secondary leading-relaxed text-lg">
                        {service.description}
                      </p>

                      {/* Features grid */}
                      {service.features && service.features.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 border border-border/50"
                            >
                              <Icon
                                name="Check"
                                size={16}
                                className="text-primary shrink-0"
                              />
                              <span className="text-sm text-foreground-muted">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </Shad.CardContent>
                  </Shad.Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background subtle accent */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(93, 158, 255, 0.04) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
