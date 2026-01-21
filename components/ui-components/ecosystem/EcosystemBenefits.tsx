"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Benefit {
    id: string;
    title: string;
    description: string;
    metric?: string;
    icon: string;
}

const benefits: Benefit[] = [
    {
        id: "iteration",
        title: "Faster Iteration",
        description:
            "Modular architecture means changes propagate cleanly. Update one component without rebuilding everything.",
        metric: "10x",
        icon: "Zap",
    },
    {
        id: "rebuilds",
        title: "Fewer Rebuilds",
        description:
            "Built for evolution, not replacement. Your ecosystem grows with your business instead of hitting dead ends.",
        metric: "Zero",
        icon: "Shield",
    },
    {
        id: "expansion",
        title: "Easier Expansion",
        description:
            "New features, markets, and integrations plug into existing infrastructure without architectural rewrites.",
        metric: "Days",
        icon: "Layers",
    },
    {
        id: "stability",
        title: "Long-term Stability",
        description:
            "Proper foundations, monitoring, and maintenance. Systems that run reliably for years, not months.",
        metric: "99.9%",
        icon: "Activity",
    },
];

export function EcosystemBenefits() {
    return (
        <SectionWrapper id="benefits" variant="alternate" className="relative">
            {/* Background accent */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(93, 158, 255, 0.06) 0%, transparent 60%)",
                }}
            />

            {/* Section Header */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-8 h-px bg-linear-to-r from-transparent to-primary" />
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">
                        Value
                    </span>
                    <div className="w-8 h-px bg-linear-to-l from-transparent to-primary" />
                </div>
                <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                    Why Ecosystems Scale
                </h2>
                <p className="text-foreground-muted max-w-2xl mx-auto">
                    The difference between building features and building systems.
                </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                    },
                }}
            >
                {benefits.map((benefit) => (
                    <motion.div
                        key={benefit.id}
                        className={cn(
                            "group relative p-8 lg:p-10 rounded-2xl",
                            "system-card hover:border-primary/30 transition-all duration-500"
                        )}
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.95 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { duration: 0.6 },
                            },
                        }}
                    >
                        {/* Metric badge */}
                        {benefit.metric && (
                            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                                <span className="text-sm font-semibold text-primary">
                                    {benefit.metric}
                                </span>
                            </div>
                        )}

                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                            <Icon name={benefit.icon} size={28} className="text-primary" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                            {benefit.title}
                        </h3>

                        {/* Description */}
                        <p className="text-foreground-muted leading-relaxed">
                            {benefit.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom statement */}
            <motion.div
                className="mt-16 lg:mt-20 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <p className="text-lg text-foreground-muted leading-relaxed">
                    This is the difference between hiring developers and partnering with
                    system architects. We think in{" "}
                    <span className="text-foreground font-medium">decades</span>, not
                    deadlines.
                </p>
            </motion.div>
        </SectionWrapper>
    );
}
