import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Shad, Icon } from "@/components/ui";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  gradient?: string;
  href?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  category,
  description,
  technologies,
  imageUrl,
  gradient = "from-primary to-secondary",
  href = "#",
  className,
}: ProjectCardProps) => {
  return (
    <Shad.Card
      className={cn(
        "group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all",
        className
      )}
    >
      {/* Project Image/Placeholder */}
      <div
        className={cn(
          "aspect-video bg-linear-to-br flex items-center justify-center overflow-hidden",
          gradient
        )}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-white/20 text-6xl font-bold">
            {title.charAt(0)}
          </div>
        )}
      </div>

      <Shad.CardContent className="p-6">
        <span className="text-primary text-sm font-medium">{category}</span>
        <h3 className="text-xl font-semibold text-foreground dark:text-white mt-2 mb-3">
          {title}
        </h3>
        <p className="text-foreground-secondary dark:text-foreground-muted mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <Badge
              key={i}
              variant="outline"
              className="text-xs bg-background dark:bg-surface"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Link */}
        <a
          href={href}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
        >
          View Case Study
          <Icon name="ArrowRight" size={16} />
        </a>
      </Shad.CardContent>
    </Shad.Card>
  );
};

export default ProjectCard;
