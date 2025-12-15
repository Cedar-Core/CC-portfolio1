import {
  SectionHeader,
  SectionWrapper,
  Button,
} from "@/components/ui-components/shared";
import ProjectCard from "./ProjectCard";
import { getFeaturedProjects } from "@/config/helpers";

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

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            description={project.shortDescription}
            technologies={project.techStack}
            gradient={`from-primary to-secondary`}
            href={`/projects/${project.slug}`}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          variant="outline"
          text="View All Projects"
          rightIconName="ArrowRight"
          className="rounded-xl px-6 py-3"
        />
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
