"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui";

export default function UnderConstruction() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        {/* Icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-6"
        >
          <Icon name="Construction" size={56} className="text-[#525ff9]" />
        </motion.div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
          style={{ fontFamily: "Oswald", color: "#5d9eff" }}
        >
          Under Construction
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-xl mx-auto text-base md:text-lg opacity-80"
          style={{ fontFamily: "Poppins", color: "#5d9eff" }}
        >
          We’re building something powerful here.  
          This section will be live soon.
        </p>

        {/* Divider */}
        <div className="mt-8 flex justify-center">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#525ff9] to-transparent" />
        </div>

        {/* Footer note */}
        <p
          className="mt-6 text-sm opacity-60"
          style={{ fontFamily: "Poppins", color: "#5d9eff" }}
        >
          © Cedar Core
        </p>
      </motion.div>
    </section>
  );
}
