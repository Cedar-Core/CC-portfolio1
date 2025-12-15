"use client";

import {
  SectionHeader,
  SectionWrapper,
  Button,
} from "@/components/ui-components/shared";
import ProjectCard from "./ProjectCard";
import { getFeaturedProjects } from "@/config/helpers";
import {
  StaggerContainer,
  StaggerItem,
  FadeInUp,
  motion,
} from "@/components/ui/motion";

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  const projects = getFeaturedProjects();

  return (
    <SectionWrapper id="projects" variant="alternate" className={className}>
      <SectionHeader
        label="Our Work"
        title="Featured Projects"
        description="Explore some of our recent projects that showcase our expertise and commitment to delivering exceptional results."
      />

      <StaggerContainer className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.shortDescription}
                technologies={project.techStack}
                gradient={`from-primary to-secondary`}
                href={`/projects/${project.slug}`}
              />
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeInUp delay={0.4} className="text-center mt-12">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="outline"
            text="View All Projects"
            rightIconName="ArrowRight"
            className="rounded-xl px-6 py-3"
          />
        </motion.div>
      </FadeInUp>
    </SectionWrapper>
  );
};

export default ProjectsSection;
