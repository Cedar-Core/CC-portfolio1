/**
 * Portfolio Configuration
 *
 * This module exports the centralized configuration for the portfolio.
 * All UI components should consume data from this config exclusively.
 *
 * @example
 * // Import the full config
 * import { config } from "@/config";
 *
 * // Import specific helpers
 * import { getProjects, getFeaturedSkills, getSocialLinks } from "@/config";
 *
 * // Import types
 * import type { Project, Skill, Experience } from "@/config";
 */

// Main configuration
export { default as config } from "./index";
export type { PortfolioConfig } from "./index";

// All types
export * from "./types";

// All helper functions
export * from "./helpers";
