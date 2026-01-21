"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui";
import { motion } from "framer-motion";

interface FooterProps {
  className?: string;
}

const socialLinks = [
  { name: "GitHub", icon: "Github", href: "https://github.com/cedarcore" },
  { name: "Twitter", icon: "Twitter", href: "https://twitter.com/cedarcore" },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    href: "https://linkedin.com/company/cedarcore",
  },
];

/**
 * Footer — Simplified, confident
 * Clean, minimal. No bloat.
 */
const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative bg-[#030305] text-white overflow-hidden",
        className,
      )}
    >
      {/* Top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-border to-transparent" />

      {/* Main CTA Section */}
      <div className="border-b border-border/20">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="heading-lg text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
              Ready to build something{" "}
              <span className="text-primary text-glow-subtle">exceptional</span>
              ?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-md mx-auto">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Project
              <Icon name="ArrowRight" size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-dark.png"
              alt="Cedar Core Logo"
              loading="eager"
              width={24}
              height={24}
              className="rounded-lg"
            />
            <span className="font-medium text-foreground">Cedar Core</span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface/50 flex items-center justify-center text-foreground-muted hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={link.name}
              >
                <Icon name={link.icon} size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-foreground-muted text-sm">
            © {currentYear} Cedar Core
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
