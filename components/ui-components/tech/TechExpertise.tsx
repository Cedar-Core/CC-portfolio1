"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { motion } from "framer-motion";

interface TechExpertiseProps {
  className?: string;
}

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "Redis", category: "Cache" },
];

/**
 * TechExpertise — "Trust / Signal Clarity"
 * Trust through design restraint, not logos or testimonials.
 * Clean metrics, technology mastery, structural confidence.
 */
const TechExpertise = ({ className }: TechExpertiseProps) => {
  return (
    <SectionWrapper id="expertise" className={cn("relative", className)}>
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(93, 158, 255, 0.04) 0%, transparent 60%)",
        }}
      />

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
            Expertise
          </span>
          <div className="w-8 h-px bg-linear-to-l from-transparent to-primary" />
        </div>
        <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Technologies We Master
        </h2>
        <p className="text-foreground-muted max-w-xl mx-auto">
          A focused stack, deeply understood.
        </p>
      </motion.div>

      {/* Tech grid - Clean, minimal */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="group"
          >
            <div className="flex flex-col items-center p-5 rounded-xl system-card hover:border-primary/30 transition-all duration-300 h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Icon name="Code" size={20} className="text-primary" />
              </div>
              <span className="font-medium text-foreground text-sm text-center group-hover:text-primary transition-colors">
                {tech.name}
              </span>
              <span className="text-xs text-foreground-muted mt-1">
                {tech.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Expertise metrics - Clean, no fake stats */}
      <motion.div
        className="mt-20 grid md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="text-center p-6 rounded-xl system-card">
          <div className="text-3xl font-display font-medium text-primary mb-2">
            5+
          </div>
          <div className="text-sm text-foreground-muted">
            Years Building Software
          </div>
        </div>
        <div className="text-center p-6 rounded-xl system-card">
          <div className="text-3xl font-display font-medium text-primary mb-2">
            Full Stack
          </div>
          <div className="text-sm text-foreground-muted">
            End-to-End Delivery
          </div>
        </div>
        <div className="text-center p-6 rounded-xl system-card">
          <div className="text-3xl font-display font-medium text-primary mb-2">
            Production
          </div>
          <div className="text-sm text-foreground-muted">
            Battle-Tested Systems
          </div>
        </div>
      </motion.div>

      {/* Structural line */}
      <motion.div
        className="mt-16 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="w-full max-w-md h-px bg-linear-to-r from-transparent via-border to-transparent" />
      </motion.div>
    </SectionWrapper>
  );
};

export default TechExpertise;
