"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Shad } from "@/components/ui";

interface ExperienceSectionProps {
  className?: string;
}

const experiences = [
  {
    year: "2023",
    title: "Scaled E-commerce Platform",
    description:
      "Architected and deployed a system handling 10M+ daily requests with 99.9% uptime.",
    tech: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    year: "2022",
    title: "FinTech API Platform",
    description:
      "Built secure, compliant APIs processing $2B+ in transactions annually.",
    tech: ["Python", "Django", "Kubernetes"],
  },
  {
    year: "2021",
    title: "Healthcare Data System",
    description:
      "Developed HIPAA-compliant platform managing sensitive patient data at scale.",
    tech: ["React", "TypeScript", "MongoDB"],
  },
  {
    year: "2020",
    title: "IoT Infrastructure",
    description:
      "Engineered backend for 100K+ connected devices with real-time analytics.",
    tech: ["Go", "Redis", "Docker"],
  },
];

const ExperienceSection = ({ className }: ExperienceSectionProps) => {
  return (
    <section className={cn("relative py-20 md:py-32 px-6", className)}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 font-bold"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Our Experience
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Years of building production systems that perform under pressure.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                className="relative flex items-start gap-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary border-4 border-background relative z-10 hidden md:block" />

                {/* Year */}
                <div className="flex-shrink-0 w-16 text-primary font-mono text-sm font-semibold hidden md:block">
                  {exp.year}
                </div>

                {/* Content */}
                <Shad.Card className="flex-1 p-6 hover:shadow-lg transition-shadow">
                  <div className="md:hidden mb-2">
                    <span className="text-primary font-mono text-sm font-semibold">
                      {exp.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-foreground-muted mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Shad.Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
