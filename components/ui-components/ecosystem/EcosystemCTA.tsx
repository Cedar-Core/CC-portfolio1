"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";

export function EcosystemCTA() {
    return (
        <SectionWrapper id="cta" className="relative">
            {/* Background accent */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(93, 158, 255, 0.08) 0%, transparent 60%)",
                }}
            />

            <motion.div
                className="max-w-3xl mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15 },
                    },
                }}
            >
                {/* Pre-heading */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="mb-6"
                >
                    <span className="text-sm text-primary/80 font-medium tracking-wide uppercase">
                        Ready to start?
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="heading-lg text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8"
                >
                    Build your ecosystem
                </motion.h2>

                {/* Supporting text */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="text-xl text-foreground-muted leading-relaxed mb-12 max-w-xl mx-auto"
                >
                    Let&apos;s discuss your vision and architect a connected digital system
                    that scales with your ambition.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Primary CTA */}
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-linear-to-r from-primary to-secondary transition-all duration-300 group-hover:scale-105" />
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-primary to-secondary blur-xl" />
                        <span className="relative text-white font-semibold text-lg">
                            Start the conversation
                        </span>
                        <Icon
                            name="MoveRight"
                            size={20}
                            className="relative text-white transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>

                    {/* Secondary CTA */}
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 px-6 py-4 text-foreground-muted hover:text-foreground transition-colors font-medium"
                    >
                        <Icon
                            name="MoveLeft"
                            size={16}
                            className="transition-transform group-hover:-translate-x-1"
                        />
                        <span>Back to home</span>
                    </Link>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="mt-16 pt-8 border-t border-border"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-foreground-muted">
                        <div className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-cedar" />
                            <span>No commitment consultation</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-border" />
                        <div className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-cedar" />
                            <span>Response within 24 hours</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-border" />
                        <div className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-cedar" />
                            <span>Technical team available</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </SectionWrapper>
    );
}
