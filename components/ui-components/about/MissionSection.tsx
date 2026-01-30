"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Shad } from "@/components/ui";

interface MissionSectionProps {
  className?: string;
}

const MissionSection = ({ className }: MissionSectionProps) => {
  return (
    <section
      className={cn("relative py-32 md:py-48 px-6 overflow-hidden", className)}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight mb-8 font-bold"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Engineering with <span className="text-primary">Purpose</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-foreground-muted max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          We build systems that last. From foundational architecture to scalable
          ecosystems, every decision compounds over time.
        </motion.p>
      </div>
    </section>
  );
};

export default MissionSection;
