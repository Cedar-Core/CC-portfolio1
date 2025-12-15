/**
 * Portfolio Configuration Helpers
 * Utility functions for accessing and filtering portfolio data
 */

import config from "./index";
import type {
  Skill,
  SkillCategory,
  Project,
  Experience,
  Service,
  Testimonial,
  SocialLink,
  Statistic,
  NavItem,
  Certification,
  Education,
} from "./types";

// ==========================================================================
// Skills Helpers
// ==========================================================================

/**
 * Get all skills sorted by order
 */
export const getSkills = (): Skill[] => {
  return [...config.skills].sort((a, b) => a.order - b.order);
};

/**
 * Get featured skills
 */
export const getFeaturedSkills = (): Skill[] => {
  return getSkills().filter((skill) => skill.featured);
};

/**
 * Get skills by category
 */
export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return getSkills().filter((skill) => skill.category === category);
};

/**
 * Get skill categories with their skills
 */
export const getSkillsGroupedByCategory = (): Map<SkillCategory, Skill[]> => {
  const grouped = new Map<SkillCategory, Skill[]>();

  config.skillCategories
    .sort((a, b) => a.order - b.order)
    .forEach((cat) => {
      grouped.set(cat.id, getSkillsByCategory(cat.id));
    });

  return grouped;
};

/**
 * Get skill category config
 */
export const getSkillCategory = (id: SkillCategory) => {
  return config.skillCategories.find((cat) => cat.id === id);
};

// ==========================================================================
// Projects Helpers
// ==========================================================================

/**
 * Get all projects sorted by order
 */
export const getProjects = (): Project[] => {
  return [...config.projects].sort((a, b) => a.order - b.order);
};

/**
 * Get featured projects
 */
export const getFeaturedProjects = (): Project[] => {
  return getProjects().filter((project) => project.featured);
};

/**
 * Get projects by status
 */
export const getProjectsByStatus = (status: Project["status"]): Project[] => {
  return getProjects().filter((project) => project.status === status);
};

/**
 * Get projects by category
 */
export const getProjectsByCategory = (category: string): Project[] => {
  return getProjects().filter((project) => project.category === category);
};

/**
 * Get project by slug
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return config.projects.find((project) => project.slug === slug);
};

/**
 * Get unique project categories
 */
export const getProjectCategories = (): string[] => {
  const categories = new Set(config.projects.map((p) => p.category));
  return Array.from(categories);
};

/**
 * Get unique project tags
 */
export const getProjectTags = (): string[] => {
  const tags = new Set(config.projects.flatMap((p) => p.tags));
  return Array.from(tags);
};

// ==========================================================================
// Experience Helpers
// ==========================================================================

/**
 * Get all experiences sorted by order
 */
export const getExperiences = (): Experience[] => {
  return [...config.experience].sort((a, b) => a.order - b.order);
};

/**
 * Get current experience (if any)
 */
export const getCurrentExperience = (): Experience | undefined => {
  return config.experience.find((exp) => exp.current);
};

/**
 * Get total years of experience
 */
export const getTotalExperienceYears = (): number => {
  const startDates = config.experience.map((exp) => new Date(exp.startDate));
  const earliest = new Date(Math.min(...startDates.map((d) => d.getTime())));
  const now = new Date();
  return Math.floor(
    (now.getTime() - earliest.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
};

// ==========================================================================
// Education Helpers
// ==========================================================================

/**
 * Get all education entries sorted by order
 */
export const getEducation = (): Education[] => {
  return [...config.education].sort((a, b) => a.order - b.order);
};

// ==========================================================================
// Certifications Helpers
// ==========================================================================

/**
 * Get all certifications sorted by order
 */
export const getCertifications = (): Certification[] => {
  return [...config.certifications].sort((a, b) => a.order - b.order);
};

/**
 * Get featured certifications
 */
export const getFeaturedCertifications = (): Certification[] => {
  return getCertifications().filter((cert) => cert.featured);
};

/**
 * Get valid (non-expired) certifications
 */
export const getValidCertifications = (): Certification[] => {
  const now = new Date();
  return getCertifications().filter((cert) => {
    if (!cert.expiryDate) return true;
    return new Date(cert.expiryDate) > now;
  });
};

// ==========================================================================
// Services Helpers
// ==========================================================================

/**
 * Get all services sorted by order
 */
export const getServices = (): Service[] => {
  return [...config.services].sort((a, b) => a.order - b.order);
};

/**
 * Get service by id
 */
export const getServiceById = (id: string): Service | undefined => {
  return config.services.find((service) => service.id === id);
};

// ==========================================================================
// Testimonials Helpers
// ==========================================================================

/**
 * Get all testimonials sorted by order
 */
export const getTestimonials = (): Testimonial[] => {
  return [...config.testimonials].sort((a, b) => a.order - b.order);
};

/**
 * Get featured testimonials
 */
export const getFeaturedTestimonials = (): Testimonial[] => {
  return getTestimonials().filter((testimonial) => testimonial.featured);
};

/**
 * Get testimonials for a specific project
 */
export const getTestimonialsForProject = (projectId: string): Testimonial[] => {
  return getTestimonials().filter((t) => t.projectId === projectId);
};

// ==========================================================================
// Social Links Helpers
// ==========================================================================

/**
 * Get all social links sorted by order
 */
export const getSocialLinks = (): SocialLink[] => {
  return [...config.socialLinks].sort((a, b) => a.order - b.order);
};

/**
 * Get social link by platform
 */
export const getSocialLinkByPlatform = (
  platform: SocialLink["platform"]
): SocialLink | undefined => {
  return config.socialLinks.find((link) => link.platform === platform);
};

// ==========================================================================
// Navigation Helpers
// ==========================================================================

/**
 * Get main navigation items sorted by order
 */
export const getMainNavigation = (): NavItem[] => {
  return [...config.navigation.main].sort((a, b) => a.order - b.order);
};

/**
 * Get footer navigation sections
 */
export const getFooterNavigation = () => {
  return config.navigation.footer.sections;
};

// ==========================================================================
// Statistics Helpers
// ==========================================================================

/**
 * Get all statistics sorted by order
 */
export const getStatistics = (): Statistic[] => {
  return [...config.statistics].sort((a, b) => a.order - b.order);
};

// ==========================================================================
// SEO Helpers
// ==========================================================================

/**
 * Get SEO config for a specific page
 */
export const getPageSEO = (page: string) => {
  return (
    config.pageSEO[page] || {
      title: config.seo.defaultTitle,
      description: config.seo.description,
    }
  );
};

/**
 * Generate full page title using template
 */
export const getFullPageTitle = (pageTitle?: string): string => {
  if (!pageTitle) return config.seo.defaultTitle;
  return config.seo.titleTemplate.replace("%s", pageTitle);
};

// ==========================================================================
// CTA Helpers
// ==========================================================================

/**
 * Get CTA by id
 */
export const getCTA = (id: string) => {
  return config.ctas[id];
};

// ==========================================================================
// Personal Info Helpers
// ==========================================================================

/**
 * Get personal info
 */
export const getPersonalInfo = () => config.personal;

/**
 * Get branding config
 */
export const getBranding = () => config.branding;

/**
 * Get contact links
 */
export const getContactLinks = () => config.personal.contact;

/**
 * Get availability status
 */
export const getAvailability = () => config.personal.availability;

/**
 * Get company values
 */
export const getValues = () => config.values;

// ==========================================================================
// Feature Flags Helpers
// ==========================================================================

/**
 * Check if a feature is enabled
 */
export const isFeatureEnabled = (
  feature: keyof typeof config.features
): boolean => {
  return config.features[feature];
};

// ==========================================================================
// Tech Stack Helpers
// ==========================================================================

/**
 * Get all unique technologies used across projects
 */
export const getAllTechnologies = (): string[] => {
  const techs = new Set<string>();

  config.projects.forEach((p) => p.techStack.forEach((t) => techs.add(t)));
  config.experience.forEach((e) => e.techStack.forEach((t) => techs.add(t)));

  return Array.from(techs).sort();
};

/**
 * Get projects that use a specific technology
 */
export const getProjectsByTechnology = (tech: string): Project[] => {
  return getProjects().filter((p) =>
    p.techStack.some((t) => t.toLowerCase() === tech.toLowerCase())
  );
};
