"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@/components/ui";

export function EcosystemHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
            {/* Background accent */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(93, 158, 255, 0.08) 0%, transparent 60%)",
                }}
            />

            {/* Grid pattern */}
            <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

            <motion.div
                className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                    },
                }}
            >
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="flex justify-center mb-8"
                    >
                        <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-surface border border-border backdrop-blur-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                            </span>
                            <span className="text-xs sm:text-sm font-mono text-primary uppercase tracking-wider font-semibold">
                                Systems Architecture
                            </span>
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="heading-xl text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-tight tracking-tight mb-8"
                    >
                        <span className="block">One ecosystem.</span>
                        <span className="block mt-2 gradient-text">
                            Every system connected.
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-xl sm:text-2xl text-foreground-muted leading-relaxed font-light max-w-2xl mx-auto mb-12"
                    >
                        We don&apos;t build isolated projects. We architect connected digital
                        systems that scale with your business—frontend to infrastructure,
                        data to automation.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                        {/* Primary CTA */}
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-linear-to-r from-primary to-secondary transition-all duration-300 group-hover:scale-105" />
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-primary to-secondary blur-xl" />
                            <span className="relative text-white font-semibold text-lg">
                                Build your ecosystem
                            </span>
                            <Icon
                                name="MoveRight"
                                size={20}
                                className="relative text-white transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        {/* Secondary CTA */}
                        <a
                            href="#architecture"
                            className="inline-flex items-center gap-2 px-6 py-4 text-foreground-muted hover:text-foreground transition-colors font-medium"
                        >
                            <span>See the architecture</span>
                            <motion.div
                                animate={{ y: [0, 4, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Icon name="ChevronDown" size={20} />
                            </motion.div>
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none z-10" />
        </section>
    );
}
