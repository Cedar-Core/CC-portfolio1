"use client";

import {
  SectionHeader,
  SectionWrapper,
} from "@/components/ui-components/shared";
import { Icon, Shad } from "@/components/ui";
import ContactForm from "./ContactForm";
import { getContactLinks } from "@/config/helpers";
import {
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/ui/motion";

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className }: ContactSectionProps) => {
  const contactInfo = getContactLinks();

  return (
    <SectionWrapper id="contact" className={className}>
      <SectionHeader
        label="Get in Touch"
        title="Let's Work Together"
        description="Have a project in mind? We'd love to hear about it. Send us a message and let's create something amazing."
      />

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Form */}
        <FadeInLeft className="lg:col-span-3">
          <Shad.Card className="overflow-hidden">
            <Shad.CardContent className="p-6 md:p-8">
              <ContactForm />
            </Shad.CardContent>
          </Shad.Card>
        </FadeInLeft>

        {/* Contact Info */}
        <FadeInRight className="lg:col-span-2 space-y-6">
          {/* Info Cards */}
          <StaggerContainer className="space-y-4">
            {contactInfo.map((info, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Shad.Card className="bg-surface/50 dark:bg-surface hover:border-primary/50 transition-colors">
                    <Shad.CardContent className="p-4 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon
                          name={info.icon || "Mail"}
                          size={24}
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-muted mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground dark:text-white font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground dark:text-white font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </Shad.CardContent>
                  </Shad.Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Shad.Card className="bg-linear-to-br from-primary/10 to-secondary/10 border-primary/20">
              <Shad.CardContent className="p-6">
                <h4 className="font-semibold text-foreground dark:text-white mb-2">
                  Quick Response
                </h4>
                <p className="text-sm text-foreground-secondary dark:text-foreground-muted mb-4">
                  We typically respond within 24 hours. For urgent matters, feel
                  free to call us directly.
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <Icon name="Clock" size={16} />
                  <span>Mon - Fri, 9am - 6pm PST</span>
                </div>
              </Shad.CardContent>
            </Shad.Card>
          </motion.div>
        </FadeInRight>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
