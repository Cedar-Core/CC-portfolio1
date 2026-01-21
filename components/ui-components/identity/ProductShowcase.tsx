"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { products, type ProductConfig } from "@/config/products.config";
import Icon from "@/components/ui/icon";

interface ProductShowcaseProps {
  className?: string;
}

/**
 * ProductShowcase — Center-Focused Product Rail
 *
 * A cinematic focus rail that highlights one product at a time.
 * Active product is centered, scaled up, and fully visible.
 * Adjacent products are positioned to the sides with reduced prominence.
 *
 * All products are driven from config - no hardcoded data.
 */
const ProductShowcase = ({ className }: ProductShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalProducts = products.length;

  // Navigate to previous product
  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalProducts) % totalProducts);
  }, [totalProducts]);

  // Navigate to next product
  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalProducts);
  }, [totalProducts]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Calculate visual properties based on position relative to active
  const getItemStyles = (index: number) => {
    const distance = index - activeIndex;
    const absDistance = Math.abs(distance);

    // Active item
    if (distance === 0) {
      return {
        x: 0,
        scale: 1.1,
        opacity: 1,
        zIndex: 30,
        filter: "blur(0px)",
      };
    }

    // Adjacent items (1 position away)
    if (absDistance === 1) {
      return {
        x: distance * 320,
        scale: 0.75,
        opacity: 0.5,
        zIndex: 20,
        filter: "blur(1px)",
      };
    }

    // Far items (2+ positions away)
    return {
      x: distance * 280,
      scale: 0.55,
      opacity: 0.2,
      zIndex: 10,
      filter: "blur(2px)",
    };
  };

  // Get glow intensity based on active state
  const getGlowStyles = (index: number) => {
    const isActive = index === activeIndex;
    return {
      opacity: isActive ? 1 : 0.3,
      scale: isActive ? 1 : 0.7,
    };
  };

  return (
    <div
      className={cn("relative w-full mt-24 md:mt-32", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Label */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
          Software We&apos;ve Built
        </span>
      </motion.div>

      {/* Showcase Container */}
      <div className="relative h-[400px] md:h-[500px]">
        {/* Navigation Buttons */}
        <AnimatePresence>
          {(isHovered || true) && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={goToPrevious}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all group"
                aria-label="Previous product"
              >
                <Icon
                  name="ChevronLeft"
                  className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors"
                />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all group"
                aria-label="Next product"
              >
                <Icon
                  name="ChevronRight"
                  size={20}
                  className="text-foreground-muted group-hover:text-primary transition-colors"
                />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Products Rail */}
        <div className="absolute inset-0 flex items-center justify-center">
          {products.map((product, index) => {
            const styles = getItemStyles(index);
            const glowStyles = getGlowStyles(index);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={product.id}
                className="absolute cursor-pointer"
                initial={false}
                animate={{
                  x: styles.x,
                  scale: styles.scale,
                  opacity: styles.opacity,
                  zIndex: styles.zIndex,
                  filter: styles.filter,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${product.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveIndex(index);
                  }
                }}
              >
                {/* Product Image with Float Animation */}
                <motion.div
                  className="relative"
                  animate={
                    isActive
                      ? {
                          y: [0, -8, 0],
                        }
                      : { y: 0 }
                  }
                  transition={
                    isActive
                      ? {
                          duration: 4,
                          ease: "easeInOut",
                          repeat: Infinity,
                        }
                      : {}
                  }
                >
                  <Image
                    src={product.imageSrc}
                    alt={product.alt}
                    width={600}
                    height={400}
                    className="w-[400px] md:w-[500px] h-auto object-contain select-none"
                    priority={index === 0}
                    draggable={false}
                  />

                  {/* Glow Effect - Beneath laptop */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] md:w-[450px] h-20 pointer-events-none"
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0.2,
                      scale: isActive ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      background: `radial-gradient(ellipse 100% 100% at center bottom, rgba(93, 158, 255, 0.6) 0%, rgba(82, 95, 249, 0.4) 30%, transparent 70%)`,
                      filter: "blur(25px)",
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Gradient Edges for Depth */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent pointer-events-none z-30" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent pointer-events-none z-30" />
      </div>

      {/* Active Product Title & Description */}
      <div className="relative h-24 mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              {products[activeIndex]?.title}
            </h3>
            {products[activeIndex]?.description && (
              <p className="text-sm md:text-base text-foreground-muted max-w-md">
                {products[activeIndex].description}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-3 mt-6">
        {products.map((product, index) => (
          <button
            key={product.id}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative w-2 h-2 rounded-full transition-all duration-300",
              index === activeIndex
                ? "bg-primary w-8"
                : "bg-foreground-muted/30 hover:bg-foreground-muted/50"
            )}
            aria-label={`Go to ${product.title}`}
          >
            {index === activeIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                layoutId="activeDot"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tech Stack Pills - Active Product 
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="flex items-center justify-center gap-2 mt-6 flex-wrap px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {products[activeIndex]?.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-surface border border-border/50 text-foreground-muted"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
          */}
    </div>
  );
};

export default ProductShowcase;
