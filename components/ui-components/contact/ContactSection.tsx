"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

interface ContactSectionProps {
  className?: string;
}

const contactInfo = [
  {
    icon: "Mail",
    label: "Email",
    value: "hello@cedarcore.dev",
    href: "mailto:hello@cedarcore.dev",
  },
  {
    icon: "Calendar",
    label: "Schedule",
    value: "Book a call",
    href: "https://cal.com/cedarcore",
  },
];

/**
 * ContactSection — "Initialize Connection"
 * Calm, confident CTA. System-like. No urgency, no pressure.
 * Feels like "opening a channel".
 */
const ContactSection = ({ className }: ContactSectionProps) => {
  return (
    <SectionWrapper id="contact" className={cn("relative", className)}>
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(93, 158, 255, 0.04) 0%, transparent 60%)",
        }}
      />

      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-linear-to-r from-transparent to-primary" />
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Connect
          </span>
          <div className="w-8 h-px bg-linear-to-l from-transparent to-primary" />
        </div>
        <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Start a Conversation
        </h2>
        <p className="text-foreground-muted max-w-xl mx-auto">
          Ready to build something? Let&apos;s discuss your project.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <div className="p-8 rounded-2xl system-card">
            <ContactForm />
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <a
                  href={info.href}
                  className="group flex items-start gap-4 p-5 rounded-xl system-card hover:border-primary/30 transition-all duration-300"
                >
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={info.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground-muted uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Response time indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-5 rounded-xl system-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-cedar animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Quick Response
              </span>
            </div>
            <p className="text-sm text-foreground-muted">
              We typically respond within 24 hours.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
