"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/utils";

interface FlowStep {
    id: string;
    label: string;
    description: string;
    icon: string;
}

const flowSteps: FlowStep[] = [
    {
        id: "user",
        label: "User",
        description: "Interacts with your product",
        icon: "User",
    },
    {
        id: "app",
        label: "App",
        description: "Delivers the experience",
        icon: "Smartphone",
    },
    {
        id: "api",
        label: "API",
        description: "Processes requests",
        icon: "Code",
    },
    {
        id: "data",
        label: "Data",
        description: "Stores and retrieves",
        icon: "Database",
    },
    {
        id: "automation",
        label: "Automation",
        description: "Triggers workflows",
        icon: "RefreshCw",
    },
    {
        id: "growth",
        label: "Growth",
        description: "Drives optimization",
        icon: "TrendingUp",
    },
];

export function EcosystemFlow() {
    return (
        <SectionWrapper id="flow" variant="alternate" className="relative">
            {/* Background accent */}
            <div
                className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(93, 158, 255, 0.04) 0%, transparent 60%)",
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
                        Flow
                    </span>
                    <div className="w-8 h-px bg-linear-to-l from-transparent to-primary" />
                </div>
                <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                    How It All Connects
                </h2>
                <p className="text-foreground-muted max-w-2xl mx-auto">
                    From user interaction to business growth—a seamless flow through every
                    layer.
                </p>
            </motion.div>

            {/* Flow Diagram */}
            <motion.div
                className="max-w-5xl mx-auto"
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
                {/* Desktop: Horizontal Flow */}
                <div className="hidden lg:block">
                    <div className="relative flex items-center justify-between">
                        {/* Connection line */}
                        <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-linear-to-r from-primary/50 via-primary/30 to-primary/50 -translate-y-1/2" />

                        {/* Animated pulse */}
                        <motion.div
                            className="absolute top-1/2 left-[10%] w-4 h-4 rounded-full bg-primary -translate-y-1/2 blur-sm"
                            animate={{
                                left: ["10%", "90%"],
                                opacity: [0.8, 0.4, 0.8],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {flowSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="relative flex flex-col items-center"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.5 },
                                    },
                                }}
                            >
                                {/* Node */}
                                <div
                                    className={cn(
                                        "relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center",
                                        "system-card hover:border-primary/50 transition-all duration-300"
                                    )}
                                >
                                    <Icon name={step.icon} size={24} className="text-primary" />
                                </div>

                                {/* Label */}
                                <div className="mt-4 text-center">
                                    <div className="text-sm font-semibold text-foreground mb-1">
                                        {step.label}
                                    </div>
                                    <div className="text-xs text-foreground-muted max-w-[100px]">
                                        {step.description}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile/Tablet: Vertical Flow */}
                <div className="lg:hidden">
                    <div className="relative flex flex-col items-center gap-4">
                        {flowSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="relative w-full max-w-xs"
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { duration: 0.5 },
                                    },
                                }}
                            >
                                {/* Connection line */}
                                {index < flowSteps.length - 1 && (
                                    <div className="absolute left-8 top-16 w-px h-8 bg-linear-to-b from-border to-transparent" />
                                )}

                                {/* Card */}
                                <div className="flex items-center gap-4 p-4 rounded-xl system-card hover:border-primary/30 transition-colors">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-primary/10 border border-primary/20">
                                        <Icon name={step.icon} size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-foreground">
                                            {step.label}
                                        </div>
                                        <div className="text-xs text-foreground-muted">
                                            {step.description}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom annotation */}
                <motion.div
                    className="mt-16 text-center"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { delay: 0.8 } },
                    }}
                >
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-surface border border-border">
                        <div className="w-2 h-2 rounded-full bg-cedar animate-pulse" />
                        <span className="text-sm text-foreground-muted">
                            Continuous feedback loop—every interaction improves the system
                        </span>
                    </div>
                </motion.div>
            </motion.div>
        </SectionWrapper>
    );
}
