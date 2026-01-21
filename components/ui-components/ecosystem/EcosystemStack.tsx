"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui-components/shared";
import { cn } from "@/lib/utils";

interface Layer {
    id: string;
    name: string;
    description: string;
    width: string;
}

const layers: Layer[] = [
    {
        id: "frontend",
        name: "Frontend Experiences",
        description: "Websites • Web Apps • Mobile Apps",
        width: "w-full",
    },
    {
        id: "backend",
        name: "Backend Systems",
        description: "APIs • Authentication • Business Logic",
        width: "w-[92%]",
    },
    {
        id: "data",
        name: "Data Layer",
        description: "Databases • Analytics • Reporting",
        width: "w-[84%]",
    },
    {
        id: "integrations",
        name: "Integrations",
        description: "Payments • CRMs • Third-party Services",
        width: "w-[76%]",
    },
    {
        id: "infrastructure",
        name: "Infrastructure",
        description: "Hosting • Storage • Security • Scalability",
        width: "w-[68%]",
    },
    {
        id: "operations",
        name: "Operations",
        description: "Automation • Monitoring • Maintenance",
        width: "w-[60%]",
    },
];

export function EcosystemStack() {
    return (
        <SectionWrapper id="stack" className="relative">
            {/* Background accent */}
            <div
                className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(93, 158, 255, 0.05) 0%, transparent 60%)",
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
                        Layers
                    </span>
                    <div className="w-8 h-px bg-linear-to-l from-transparent to-primary" />
                </div>
                <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                    Architecture Layers
                </h2>
                <p className="text-foreground-muted max-w-2xl mx-auto">
                    Every layer connects. Every system communicates. One unified ecosystem.
                </p>
            </motion.div>

            {/* Layered Stack Visualization */}
            <motion.div
                className="max-w-4xl mx-auto"
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
                {/* Layers */}
                <div className="flex flex-col items-center gap-4">
                    {layers.map((layer, index) => (
                        <motion.div
                            key={layer.id}
                            className={cn("relative", layer.width)}
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
                            {/* Layer card */}
                            <div className="relative px-6 py-5 rounded-2xl system-card hover:scale-[1.02] transition-transform duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <div className="flex items-center gap-3">
                                        {/* Layer number */}
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-mono">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                            {layer.name}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-foreground-muted sm:text-right pl-11 sm:pl-0">
                                        {layer.description}
                                    </p>
                                </div>
                            </div>

                            {/* Vertical connector */}
                            {index < layers.length - 1 && (
                                <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-px h-4 bg-linear-to-b from-border to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom annotation */}
                <motion.div
                    className="mt-12 text-center"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { delay: 0.6 } },
                    }}
                >
                    <p className="text-foreground-muted text-sm font-light italic">
                        Each layer is designed to communicate seamlessly with the others
                    </p>
                </motion.div>
            </motion.div>
        </SectionWrapper>
    );
}
