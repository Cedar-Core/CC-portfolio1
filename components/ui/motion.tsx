"use client";

import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

// Animation variants for reusable animations
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Default transition
export const defaultTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

// Viewport settings for scroll animations
export const viewportSettings = {
  once: true,
  margin: "-100px",
};

// Motion wrapper components
interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export const FadeInUp = ({
  children,
  delay = 0,
  className,
  ...props
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    variants={fadeInUp}
    transition={{ ...defaultTransition, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const FadeInDown = ({
  children,
  delay = 0,
  className,
  ...props
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    variants={fadeInDown}
    transition={{ ...defaultTransition, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({
  children,
  delay = 0,
  className,
  ...props
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    variants={fadeIn}
    transition={{ ...defaultTransition, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const FadeInLeft = ({
  children,
  delay = 0,
  className,
  ...props
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    variants={fadeInLeft}
    transition={{ ...defaultTransition, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const FadeInRight = ({
  children,
  delay = 0,
  className,
  ...props
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    variants={fadeInRight}
    transition={{ ...defaultTransition, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({
  children,
  delay = 0,
  className,
  ...props
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    variants={scaleIn}
    transition={{ ...defaultTransition, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({
  children,
  className,
  ...props
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    variants={staggerContainer}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
  ...props
}: Omit<MotionWrapperProps, "delay">) => (
  <motion.div
    variants={staggerItem}
    transition={defaultTransition}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Re-export motion for custom usage
export { motion };
