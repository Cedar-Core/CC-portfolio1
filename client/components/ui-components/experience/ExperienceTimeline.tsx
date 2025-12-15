import { cn } from "@/lib/utils";
import { SectionHeader, SectionWrapper } from "@/components/ui-components/shared";
import { Shad, Icon } from "@/components/ui";
import { getExperiences } from "@/config/helpers";

interface ExperienceTimelineProps {
  className?: string;
}

const ExperienceTimeline = ({ className }: ExperienceTimelineProps) => {
  const experiences = getExperiences();

  // Convert experiences to timeline events format
  const events = experiences.map((exp) => ({
    year: new Date(exp.startDate).getFullYear().toString(),
    title: exp.role,
    company: exp.company,
    description: exp.description,
    icon: exp.current ? "Sparkles" : "Briefcase",
  }));

  return (
    <SectionWrapper id="experience" variant="alternate" className={className}>
      <SectionHeader
        label="Our Journey"
        title="Experience & Milestones"
        description="A timeline of our growth, achievements, and the projects that shaped who we are."
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {/* Timeline Events */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={cn(
                "relative grid md:grid-cols-2 gap-6 md:gap-12",
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              )}
            >
              {/* Content */}
              <div
                className={cn(
                  "pl-8 md:pl-0",
                  index % 2 === 0 ? "md:order-1" : "md:order-2 md:pl-12"
                )}
              >
                <Shad.Card className="bg-card hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                  <Shad.CardContent className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground dark:text-white mb-1">
                      {event.title}
                    </h3>
                    {event.company && (
                      <p className="text-sm text-primary mb-2">
                        {event.company}
                      </p>
                    )}
                    <p className="text-sm text-foreground-secondary dark:text-foreground-muted">
                      {event.description}
                    </p>
                  </Shad.CardContent>
                </Shad.Card>
              </div>

              {/* Empty space for alignment */}
              <div
                className={cn(
                  "hidden md:block",
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                )}
              />

              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 -translate-x-1/2 md:-translate-x-1/2 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/25">
                <Icon
                  name={event.icon || "Circle"}
                  size={16}
                  className="text-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceTimeline;
