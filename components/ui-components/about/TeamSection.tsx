"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Shad } from "@/components/ui";
import { Icon } from "@/components/ui";

interface TeamSectionProps {
  className?: string;
}

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Lead Architect",
    bio: "10+ years building scalable systems. Former tech lead at Fortune 500 companies.",
    skills: ["System Design", "Cloud Architecture", "Team Leadership"],
    image: "/team/alex.jpg", // Placeholder
  },
  {
    name: "Sarah Johnson",
    role: "Senior Backend Engineer",
    bio: "Specializes in high-performance APIs and data platforms. Open source contributor.",
    skills: ["Node.js", "PostgreSQL", "Microservices"],
    image: "/team/sarah.jpg",
  },
  {
    name: "Marcus Rodriguez",
    role: "Frontend Specialist",
    bio: "Crafting exceptional user experiences with modern React and TypeScript.",
    skills: ["React", "TypeScript", "UI/UX"],
    image: "/team/marcus.jpg",
  },
  {
    name: "Emma Davis",
    role: "DevOps Engineer",
    bio: "Ensuring systems run smoothly at scale. Infrastructure as code expert.",
    skills: ["AWS", "Docker", "CI/CD"],
    image: "/team/emma.jpg",
  },
];

const TeamSection = ({ className }: TeamSectionProps) => {
  return (
    <section className={cn("relative py-20 md:py-32 px-6", className)}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 font-bold"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Meet Our Team
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Experienced engineers dedicated to building systems that scale and
            endure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Shad.Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-foreground-muted text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-surface rounded-full text-foreground-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Shad.Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
