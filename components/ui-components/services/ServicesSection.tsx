"use client";

import {
  SectionHeader,
  SectionWrapper,
} from "@/components/ui-components/shared";
import ServiceCard from "./ServiceCard";
import { getServices } from "@/config/helpers";
import { StaggerContainer, StaggerItem, motion } from "@/components/ui/motion";

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection = ({ className }: ServicesSectionProps) => {
  const services = getServices();

  return (
    <SectionWrapper id="services" variant="alternate" className={className}>
      <SectionHeader
        label="What We Do"
        title="Our Services"
        description="Comprehensive digital solutions tailored to your unique needs and goals."
      />

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <StaggerItem key={service.id}>
            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                features={service.features}
              />
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
};

export default ServicesSection;
