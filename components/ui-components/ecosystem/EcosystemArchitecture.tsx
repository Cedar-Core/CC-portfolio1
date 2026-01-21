"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/utils";

interface SystemComponent {
    id: string;
    title: string;
    purpose: string;
    capabilities: string[];
    icon: string;
}

const components: SystemComponent[] = [
    {
        id: "frontend",
        title: "Frontend",
        purpose: "User-facing experiences that engage and convert",
        capabilities: [
            "Responsive web applications",
            "Native mobile experiences",
            "Progressive web apps (PWA)",
        ],
        icon: "Monitor",
    },
    {
        id: "backend",
        title: "Backend",
        purpose: "Robust systems that power your business logic",
        capabilities: [
            "RESTful & GraphQL APIs",
            "Secure authentication",
            "Business rule engines",
        ],
        icon: "Server",
    },
    {
        id: "data",
        title: "Data",
        purpose: "Structured storage and intelligent insights",
        capabilities: [
            "Scalable databases",
            "Real-time analytics",
            "Automated reporting",
        ],
        icon: "Database",
    },
    {
        id: "integrations",
        title: "Integrations",
        purpose: "Seamless connections to external services",
        capabilities: [
            "Payment processing",
            "CRM synchronization",
            "Third-party APIs",
        ],
        icon: "Plug",
    },
    {
        id: "infrastructure",
        title: "Infrastructure",
        purpose: "Reliable foundation that scales with demand",
        capabilities: [
            "Cloud hosting",
            "CDN & edge delivery",
            "Security hardening",
        ],
        icon: "Cloud",
    },
    {
        id: "operations",
        title: "Operations",
        purpose: "Continuous improvement and monitoring",
        capabilities: [
            "Workflow automation",
            "Performance monitoring",
            "Maintenance & updates",
        ],
        icon: "Settings",
    },
];

export function EcosystemArchitecture() {
    return (
        <SectionWrapper id="architecture" className="relative">
            {/* Background accent */}
            <div
                className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
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
                        Components
                    </span>
                    <div className="w-8 h-px bg-linear-to-l from-transparent to-primary" />
                </div>
                <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                    Ecosystem Components
                </h2>
                <p className="text-foreground-muted max-w-2xl mx-auto">
                    Each layer is purpose-built, production-ready, and designed to
                    integrate seamlessly.
                </p>
            </motion.div>

            {/* Components Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
                {components.map((component) => (
                    <motion.div
                        key={component.id}
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.95 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { duration: 0.6 },
                            },
                        }}
                        className={cn(
                            "group relative p-6 lg:p-8 rounded-2xl system-card",
                            "hover:border-primary/30 transition-all duration-500 hover-glow"
                        )}
                    >
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                            <Icon name={component.icon} size={24} className="text-primary" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            {component.title}
                        </h3>

                        {/* Purpose */}
                        <p className="text-foreground-muted text-sm mb-5 leading-relaxed">
                            {component.purpose}
                        </p>

                        {/* Capabilities */}
                        <ul className="space-y-2.5">
                            {component.capabilities.map((capability, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm">
                                    <Icon
                                        name="Check"
                                        size={16}
                                        className="text-primary mt-0.5 shrink-0"
                                    />
                                    <span className="text-foreground-secondary">
                                        {capability}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
