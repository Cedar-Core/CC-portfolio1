"use client";

import { cn } from "@/lib/utils";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { motion } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
} from "@/components/ui/motion-variants";
import { getProcessSteps } from "@/config/helpers";

interface ProcessSectionProps {
  className?: string;
}

const ProcessSection = ({ className }: ProcessSectionProps) => {
  const processSteps = getProcessSteps();
  return (
    <SectionWrapper
      id="process"
      variant="alternate"
      className={cn("relative", className)}
    >
      {/* Background effects - Premium glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--primary-glow)_0%,_transparent_60%)] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--secondary-glow)_0%,_transparent_60%)] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 digital-grid opacity-15 pointer-events-none" />

      <SectionHeader
        label="Our Process"
        title="How We Work"
        description="A proven methodology that delivers results on time and within budget."
      />

      {/* Process Timeline */}
      <div className="relative">
        {/* Connecting line - visible on larger screens with glow */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent blur-sm" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerReveal}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={staggerRevealItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative group"
            >
              {/* Step card - Glass morphism */}
              <div className="h-full p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 hover-glow">
                {/* Step number + Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary/20 to-secondary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/20 transition-all">
                      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon
                        name={step.icon}
                        size={24}
                        className="text-primary relative z-10"
                      />
                    </div>
                    {/* Step number badge */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-linear-to-r from-primary to-secondary text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                      {step.id}
                    </span>
                  </div>

                  {/* Arrow connecting steps - visible on lg */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-10 text-primary/40 z-10">
                      <Icon name="ChevronRight" size={16} />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="pt-4 border-t border-border/30">
                  <p className="text-xs text-primary uppercase tracking-wider mb-2 font-mono">
                    Deliverables
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {step.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-foreground-muted border border-primary/20"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA - Premium style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-foreground-muted mb-6 text-lg">
          Ready to start your project? Let's discuss your requirements.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover-glow"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Start a Conversation
          <Icon name="ArrowRight" size={18} />
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProcessSection;
