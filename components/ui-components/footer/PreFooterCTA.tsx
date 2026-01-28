"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import PreFooterRibbon from "./PreFooterRibbon";
import { Icon } from "@/components/ui/";

/**
 * PreFooterCTA - Main hero-style call to action
 * Text surrounds the laptop anchor, creating visual flow:
 * BUILD WEBSITES (above) → LAPTOP (center anchor) → & APPS (below)
 */
const PreFooterCTA = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "relative w-full overflow-visible", // overflow-visible for seamless curves
        className,
      )}
      style={{
        background: "transparent", // Inherit parent background for seamless look
      }}
    >
      {/* Curves extend beyond section bounds */}
      <PreFooterRibbon />

      <div className="relative z-20 max-w-6xl mx-auto px-4 py-20 md:py-28">
        {/* Main composition container */}
        <div className="relative flex flex-col items-center">
          {/* BUILD WEBSITES - Top headline, tightly stacked */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-30 text-center uppercase font-heading mb-4 md:mb-0"
            style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif" }}
          >
            <h2
              className="text-white font-bold leading-[0.9] tracking-tighter drop-shadow-2xl"
              style={{
                fontSize: "clamp(4rem, 15vw, 11rem)",
                letterSpacing: "-0.04em",
                textShadow: "0 4px 30px rgba(0,0,0,0.4)",
                transform: "rotate(-5deg)",
              }}
            >
              BUILD
            </h2>
            <h2
              className="text-white font-bold leading-[0.9] tracking-tighter drop-shadow-2xl"
              style={{
                fontSize: "clamp(4rem, 15vw, 11rem)",
                letterSpacing: "-0.04em",
                textShadow: "0 4px 30px rgba(0,0,0,0.4)",
                transform: "rotate(-5deg)",
              }}
            >
              WEBSITES
            </h2>
          </motion.div>

          {/* LAPTOP - The visual anchor between text blocks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-20 -mt-2 md:-mt-8 mb-0"
            style={{
              filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
            }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Image
                src="/Laptop mockup Dropx 1.png"
                alt="Cedar Core laptop preview"
                width={480}
                height={290}
                priority
                className="relative z-10 w-48 md:w-64 lg:w-80 xl:w-120"
                style={{
                  transform: "rotate(-10deg)",
                  height: "auto",
                }}
              />
            </motion.div>
          </motion.div>

          {/* & APPS - Below laptop, gradient text, separate visual beat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative z-30 text-center uppercase font-heading -mt-1 md:-mt-6"
            style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif" }}
          >
            <h2
              className="font-bold leading-[0.9] tracking-tighter"
              style={{
                fontSize: "clamp(4.5rem, 16vw, 12rem)",
                letterSpacing: "-0.04em",
                background:
                  "linear-gradient(135deg, #5d9eff 0%, #7eb8ff 30%, #525ff9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 2px 20px rgba(93, 158, 255, 0.3))",
                transform: "rotate(-5deg)",
              }}
            >
              & APPS
            </h2>
          </motion.div>

          {/* CTA Button - Clean, modern pill style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif" }}
            className="cursor-pointer mt-10"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-linear-to-r from-primary to-secondary text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
            >
              <span>Contact us</span>
              <Icon
                name="MoveRight"
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
