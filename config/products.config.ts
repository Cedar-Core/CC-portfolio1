// ============================================================================
// PRODUCT SHOWCASE CONFIGURATION
// Config-driven approach for Cedar Core product/portfolio items
// Add new products by simply adding objects to the array below
// ============================================================================

export interface ProductConfig {
  /** Unique identifier for the product */
  id: string;
  /** Display title for the product */
  title: string;
  /** Path to the image in /public folder */
  imageSrc: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional: Short description */
  description?: string;
  /** Optional: External link to live product */
  href?: string;
  /** Optional: Technology tags */
  technologies?: string[];
  /** Optional: Year completed */
  year?: number;
}

/**
 * Product showcase items
 *
 * To add a new product:
 * 1. Add your laptop mockup PNG to /public folder
 * 2. Add a new object to this array with the required fields
 * 3. The component will automatically pick it up
 */
export const products: ProductConfig[] = [
  {
    id: "dropx",
    title: "DropX",
    imageSrc: "/Laptop mockup Dropx.png",
    alt: "DropX platform displayed on laptop mockup",
    description: "E-commerce platform with real-time inventory management",
    technologies: ["Next.js", "PostgreSQL", "Redis"],
    year: 2025,
  },
  {
    id: "invoverse",
    title: "Invoverse",
    imageSrc: "/Laptop mockup invoverse.png",
    alt: "Invoverse application displayed on laptop mockup",
    description: "Invoice management system with automated workflows",
    technologies: ["React", "Node.js", "MongoDB"],
    year: 2024,
  },
  {
    id: "perfumes-legacy",
    title: "Perfumes Legacy",
    imageSrc: "/Laptop mockup perfumes legacy.png",
    alt: "Perfumes Legacy website displayed on laptop mockup",
    description: "Luxury e-commerce experience for premium fragrances",
    technologies: ["Next.js", "Shopify", "Tailwind"],
    year: 2024,
  },
];

export default products;
