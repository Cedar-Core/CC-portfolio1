"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { products } from "@/config/products.config";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";

interface ProductShowcaseProps {
  className?: string;
}

/**
 * ProductShowcase — Center-Focused Product Rail
 *
 * Uses shadcn Carousel (Embla) for smooth navigation.
 * Active product is centered, scaled up, and fully visible.
 * Adjacent products are visible with reduced prominence.
 *
 * All products are driven from config - no hardcoded data.
 */
const ProductShowcase = ({ className }: ProductShowcaseProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync carousel state with activeIndex
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // Initial sync

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Navigate to previous product
  const goToPrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  // Navigate to next product
  const goToNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  // Navigate to specific slide
  const goToSlide = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <div className={cn("relative w-full mt-24 md:mt-32", className)}>
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

      {/* Carousel Container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Navigation Buttons */}
        <motion.button
          onClick={goToPrevious}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all group"
          aria-label="Previous product"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon
            name="ChevronLeft"
            className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors"
          />
        </motion.button>

        <motion.button
          onClick={goToNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all group"
          aria-label="Next product"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon
            name="ChevronRight"
            size={20}
            className="text-foreground-muted group-hover:text-primary transition-colors"
          />
        </motion.button>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            containScroll: false,
          }}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {products.map((product, index) => {
              const isActive = index === activeIndex;
              const distance = Math.abs(index - activeIndex);
              // Handle loop wraparound for distance calculation
              const wrappedDistance = Math.min(
                distance,
                products.length - distance,
              );

              return (
                <CarouselItem
                  key={product.id}
                  className="pl-0 basis-[70%] md:basis-[50%] lg:basis-[40%]"
                >
                  <Link href={`/useCase/${products[activeIndex]?.id}`}>
                    <motion.div
                      className="relative flex items-center justify-center h-100 md:h-125 cursor-pointer"
                      animate={{
                        scale: isActive ? 1.05 : 0.8 - wrappedDistance * 0.1,
                        opacity: isActive ? 1 : 0.4 - wrappedDistance * 0.1,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={() => goToSlide(index)}
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
                          className="w-[350px] md:w-[450px] lg:w-[500px] h-auto object-contain select-none"
                          priority={index === 0}
                          draggable={false}
                        />

                        {/* Glow Effect - Beneath laptop */}
                        <motion.div
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] h-20 pointer-events-none"
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0.15,
                            scale: isActive ? 1 : 0.5,
                          }}
                          transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{
                            background: `radial-gradient(ellipse 100% 100% at center bottom, rgba(93, 158, 255, 0.6) 0%, rgba(82, 95, 249, 0.4) 30%, transparent 70%)`,
                            filter: "blur(25px)",
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Gradient Edges for Depth */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-linear-to-r from-background to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-linear-to-l from-background to-transparent pointer-events-none z-20" />
      </motion.div>

      {/* Active Product Title & Description */}
      <motion.div
        className="relative h-24 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
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
      </motion.div>

      {/* Navigation Dots */}
      <motion.div
        className="flex items-center justify-center gap-3 mt-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {products.map((product, index) => (
          <motion.button
            key={product.id}
            onClick={() => goToSlide(index)}
            className={cn(
              "relative w-2 h-2 rounded-full transition-all duration-300",
              index === activeIndex
                ? "bg-primary w-8"
                : "bg-foreground-muted/30 hover:bg-foreground-muted/50",
            )}
            aria-label={`Go to ${product.title}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.7 + index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {index === activeIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                layoutId="activeDot"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductShowcase;
