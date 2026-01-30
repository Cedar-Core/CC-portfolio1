"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import { Icon } from "@/components/ui";

interface TeamScrollSectionProps {
  className?: string;
}

interface TeamMember {
  id: string;
  name: string;
  title: string;
  experiences: {
    role: string;
    description: string;
    icon: string;
  }[];
}

const teamMembers: TeamMember[] = [
  {
    id: "dev1",
    name: "Backend Architect",
    title: "Systems & Infrastructure",
    experiences: [
      {
        role: "API Design",
        description:
          "Designing RESTful and GraphQL APIs that scale to millions of requests. Clean contracts, and developer-first documentation.",
        icon: "Server",
      },
      {
        role: "Database Systems",
        description:
          "PostgreSQL, Redis, and distributed data architectures. Query optimization, replication, and data modeling for complex domains.",
        icon: "Database",
      },
      {
        role: "Cloud Infrastructure",
        description:
          "AWS, GCP, and infrastructure-as-code. Kubernetes orchestration, CI/CD pipelines, and production-grade deployment strategies.",
        icon: "Cloud",
      },
    ],
  },
  {
    id: "dev2",
    name: "Full-Stack Engineer",
    title: "Web & Mobile Applications",
    experiences: [
      {
        role: "Frontend Architecture",
        description:
          "React, Next.js, and TypeScript at scale. Component libraries, state management, and performance optimization for production apps.",
        icon: "LayoutDashboard",
      },
      {
        role: "Mobile Development",
        description:
          "Cross-platform applications with React Native and Flutter. Shared business logic, native performance, and offline-first design.",
        icon: "Smartphone",
      },
      {
        role: "Integration Layer",
        description:
          "Connecting frontends to backends with clean abstractions. API clients, caching strategies, and real-time data synchronization.",
        icon: "GitBranch",
      },
    ],
  },
  {
    id: "dev3",
    name: "Systems Engineer",
    title: "Security & Reliability",
    experiences: [
      {
        role: "Security Architecture",
        description:
          "Authentication, authorization, and compliance from day one. OAuth, JWT, RBAC, and zero-trust security models.",
        icon: "Shield",
      },
      {
        role: "Observability",
        description:
          "Logging, metrics, and distributed tracing. Building systems that are debuggable, auditable, and production-ready.",
        icon: "Activity",
      },
      {
        role: "Performance Engineering",
        description:
          "Load testing, profiling, and optimization. Ensuring systems perform under pressure and scale gracefully.",
        icon: "Zap",
      },
    ],
  },
];

// Total scroll steps: 3 developers × 3 experiences each = 9 steps
const TOTAL_STEPS = teamMembers.length * 3;

/**
 * TeamScrollSection — Lenis-style pinned scroll section
 * Left column: static anchor with section title
 * Right column: dynamic content that changes per scroll step
 */
export default function TeamScrollSection({
  className,
}: TeamScrollSectionProps) {
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

  // Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Compute ranges for each developer (3 steps per developer)
  const developerRanges = useMemo(() => {
    return teamMembers.map((_, devIndex) => {
      const devStart = devIndex / teamMembers.length;
      const devEnd = (devIndex + 1) / teamMembers.length;
      return {
        start: devStart,
        end: devEnd,
        experienceRanges: [0, 1, 2].map((expIndex) => {
          const expStart = devStart + (expIndex / 3) * (devEnd - devStart);
          const expEnd = devStart + ((expIndex + 1) / 3) * (devEnd - devStart);
          return { start: expStart, end: expEnd };
        }),
      };
    });
  }, []);

  // Developer opacities (which developer is active)
  const devOpacities = [
    useTransform(
      smoothProgress,
      [0, 0.05, developerRanges[0].end - 0.05, developerRanges[0].end],
      [1, 1, 1, 0],
    ),
    useTransform(
      smoothProgress,
      [
        developerRanges[1].start - 0.05,
        developerRanges[1].start,
        developerRanges[1].end - 0.05,
        developerRanges[1].end,
      ],
      [0, 1, 1, 0],
    ),
    useTransform(
      smoothProgress,
      [
        developerRanges[2].start - 0.05,
        developerRanges[2].start,
        developerRanges[2].end,
        1,
      ],
      [0, 1, 1, 1],
    ),
  ];

  // Experience opacities for each developer
  const expOpacities = teamMembers.map((_, devIndex) =>
    [0, 1, 2].map((expIndex) => {
      const range = developerRanges[devIndex].experienceRanges[expIndex];
      const fadeIn = range.start;
      const fadeOut = range.end;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useTransform(
        smoothProgress,
        [fadeIn - 0.02, fadeIn + 0.02, fadeOut - 0.02, fadeOut + 0.02],
        [0, 1, 1, expIndex === 2 ? 1 : 0.3],
      );
    }),
  );

  // Y transforms for experiences (slide up as they become active)
  const expYTransforms = teamMembers.map((_, devIndex) =>
    [0, 1, 2].map((expIndex) => {
      const range = developerRanges[devIndex].experienceRanges[expIndex];
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useTransform(
        smoothProgress,
        [range.start - 0.02, range.start + 0.02],
        [30, 0],
      );
    }),
  );

  // Left column progress indicator
  const progressIndicatorHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"],
  );

  // Mobile fallback: render stacked content
  if (isMobile) {
    return (
      <section className={cn("py-24 md:py-32 px-6", className)}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-linear-to-r from-primary to-transparent" />
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                Our Team
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 font-bold"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Who Builds Your Systems
            </h2>
            <p className="text-foreground-muted max-w-xl">
              Experienced engineers focused on backend systems, full-stack
              applications, and production infrastructure.
            </p>
          </div>

          {/* Stacked team content for mobile */}
          <div className="space-y-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="space-y-8">
                <div>
                  <h3
                    className="text-2xl font-bold text-foreground mb-2"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.title}</p>
                </div>
                <div className="space-y-6">
                  {member.experiences.map((exp) => (
                    <div
                      key={exp.role}
                      className="flex gap-4 p-4 rounded-xl bg-surface-elevated border border-border"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon
                          name={exp.icon}
                          size={20}
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {exp.role}
                        </h4>
                        <p className="text-sm text-foreground-muted leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative h-[400vh]", className)} // Scroll distance for desktop
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
                    Our Team
                  </span>
                </div>

                {/* Main heading */}
                <h2
                  className="text-4xl lg:text-5xl xl:text-6xl text-foreground font-bold leading-tight"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Who Builds
                  <br />
                  Your <span className="text-primary">Systems</span>?
                </h2>

                {/* Subtext */}
                <p className="mt-6 text-foreground-muted leading-relaxed max-w-sm">
                  Experienced engineers focused on architecture, scalability,
                  and production-grade systems.
                </p>

                {/* Developer indicators */}
                <div className="mt-12 space-y-4">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      className="flex items-center gap-3"
                      style={{ opacity: devOpacities[index] }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {member.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Dynamic Content */}
            <div className="relative min-h-[400px]">
              {teamMembers.map((member, devIndex) => (
                <motion.div
                  key={member.id}
                  className="absolute inset-0"
                  style={{ opacity: devOpacities[devIndex] }}
                >
                  {/* Developer header */}
                  <div className="mb-8">
                    <h3
                      className="text-2xl lg:text-3xl font-bold text-primary mb-2"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-foreground-muted">{member.title}</p>
                  </div>

                  {/* Experiences stack */}
                  <div className="space-y-4">
                    {member.experiences.map((exp, expIndex) => (
                      <motion.div
                        key={exp.role}
                        className="p-6 rounded-xl bg-surface-elevated border border-border"
                        style={{
                          opacity: expOpacities[devIndex][expIndex],
                          y: expYTransforms[devIndex][expIndex],
                        }}
                      >
                        <div className="flex gap-4">
                          <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon
                              name={exp.icon}
                              size={24}
                              className="text-primary"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-foreground mb-2">
                              {exp.role}
                            </h4>
                            <p className="text-foreground-muted leading-relaxed">
                              {exp.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
