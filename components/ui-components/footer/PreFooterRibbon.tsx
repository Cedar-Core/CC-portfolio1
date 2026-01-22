"use client";

import { motion } from "framer-motion";

const PreFooterRibbon = () => {
  return (
    <>
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 55%, rgba(82,95,249,0.12), transparent 70%)",
        }}
      />

      <motion.svg
        viewBox="0 0 1600 900"
        className="absolute inset-0 w-[140%] h-[140%] -left-[20%] -top-[20%] z-10 pointer-events-none"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* POSITION + STRETCH */}
        <g transform="translate(-170 90) scale(2.2 1.35)">
          {/* RIGHT → LEFT CURVE */}
          <path
            d="M439.5 326.275C468.5 263.275 460.338 128.874 507.875 147.411C555.412 165.948 585.108 310.593 650.933 307.143C716.757 303.693 616.978 79.6081 659.195 25.3242C682.344 -4.44145 705.058 35.0646 731.17 81.4839"
            stroke="url(#paint0)"
            strokeWidth="50"
            strokeLinecap="round"
            fill="none"
          />

          {/* LEFT → RIGHT CURVE */}
          <path
            d="M439.38 326.729C424.384 358.529 402.167 385.549 372.5 370.229C311.5 338.729 280 160.729 235 212.729C190 264.729 277.915 493.729 212 493.729C146.085 493.729 124 347.729 77.498 326.729C30.9961 305.73 15.001 352.229 15 427.229"
            stroke="url(#paint1)"
            strokeWidth="50"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <defs>
          {/* Gradient for right curve */}
          <linearGradient id="paint0" x1="662" y1="0" x2="740" y2="320">
            <stop offset="0%" stopColor="#5D9EFF" />
            <stop offset="100%" stopColor="#525FF9" />
          </linearGradient>

          {/* Gradient for left curve */}
          <linearGradient id="paint1" x1="440" y1="350" x2="0" y2="350">
            <stop offset="0%" stopColor="#525FF9" />
            <stop offset="100%" stopColor="#5D9EFF" />
          </linearGradient>
        </defs>
      </motion.svg>
    </>
  );
};

export default PreFooterRibbon;
