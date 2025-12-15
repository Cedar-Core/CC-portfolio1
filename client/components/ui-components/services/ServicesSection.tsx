import {
  SectionHeader,
  SectionWrapper,
} from "@/components/ui-components/shared";
import ServiceCard from "./ServiceCard";
import { getServices } from "@/config/helpers";

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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.shortDescription}
            features={service.features}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
