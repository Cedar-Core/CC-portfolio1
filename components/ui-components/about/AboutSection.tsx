"use client";

import {
  SectionWrapper,
  SectionHeader,
} from "@/components/ui-components/shared";
import { Shad, Icon } from "@/components/ui";
import {
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/ui/motion";
import Image from "next/image";
import { getValues, getPersonalInfo, getBranding } from "@/config/helpers";

interface AboutSectionProps {
  imageUrl?: string;
  className?: string;
}

const AboutSection = ({ imageUrl, className }: AboutSectionProps) => {
  const values = getValues();
  const personalInfo = getPersonalInfo();
  const branding = getBranding();

  return (
    <SectionWrapper id="about" className={className}>
      <SectionHeader
        label={`About ${branding.name}`}
        title="Building Digital Excellence"
        description={personalInfo.bio}
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Visual / Image Side */}
        <FadeInLeft className="relative">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="About Cedar Core"
              className="rounded-2xl shadow-2xl"
            />
          ) : (
            <div className="aspect-square bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Abstract design elements */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.4, 0.3] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/30 rounded-full blur-3xl"
                />
              </div>
              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 mx-auto mb-4 bg-linear-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25"
                >
                  <Icon name="Globe" size={40} className="text-white" />
                </motion.div>
                <p className="text-foreground-secondary dark:text-foreground-muted text-sm">
                  Crafting digital excellence since 2020
                </p>
              </div>
            </div>
          )}
        </FadeInLeft>

        {/* Content Side */}
        <FadeInRight className="space-y-6">
          <div className="space-y-4">
            <p className="text-foreground-secondary dark:text-foreground-muted leading-relaxed">
              At Cedar Core, we believe in the power of technology to transform
              businesses. Our approach combines creative design thinking with
              robust engineering practices to deliver solutions that not only
              look stunning but perform exceptionally.
            </p>
            <p className="text-foreground-secondary dark:text-foreground-muted leading-relaxed">
              From startups to established enterprises, we partner with
              organizations that share our vision for innovation and excellence.
              Every project is an opportunity to push boundaries and create
              something remarkable.
            </p>
          </div>

          {/* Values Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4 pt-4">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Shad.Card className="bg-surface/50 dark:bg-surface border-border/50 hover:border-primary/50 transition-colors">
                    <Shad.CardContent className="p-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Icon
                          name={value.icon}
                          size={20}
                          className="text-primary"
                        />
                      </div>
                      <h4 className="font-semibold text-foreground dark:text-white text-sm mb-1">
                        {value.title}
                      </h4>
                      <p className="text-xs text-foreground-muted">
                        {value.description}
                      </p>
                    </Shad.CardContent>
                  </Shad.Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeInRight>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
