"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui";
import { SocialLinks, Button } from "@/components/ui-components/shared";
import {
  getFooterNavigation,
  getSocialLinks,
  getBranding,
} from "@/config/helpers";
import { motion } from "framer-motion";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const footerSections = getFooterNavigation();
  const socialLinks = getSocialLinks();
  const branding = getBranding();

  return (
    <footer
      className={cn(
        "bg-[#020a18] dark:bg-[#010812] text-white py-16 px-6",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/logo-dark.png"
                  alt="Cedar Core Logo"
                  loading="eager"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </motion.div>
              <span className="font-semibold text-white">{branding.name}</span>
            </Link>
            <p className="text-slate-400 text-sm mb-6">{branding.tagline}</p>
            <SocialLinks
              links={socialLinks.map((link) => ({
                name: link.platform,
                href: link.url,
                icon: link.icon,
              }))}
              className="[&>a]:bg-[#0a2240] [&>a]:text-slate-400 [&>a:hover]:bg-primary [&>a:hover]:text-white"
            />
          </div>

          {/* Dynamic Footer Sections */}
          {footerSections.slice(0, 2).map((section, index) => (
            <FooterLinkSection
              key={section.title}
              title={section.title}
              links={section.links.map((link) => ({
                label: link.label,
                href: link.href,
              }))}
              delay={index * 0.1}
            />
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#0a2240] border-[#1e3a5f] text-white placeholder-slate-500 text-sm"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button text="Join" className="px-4" />
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-[#1e3a5f] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-400 text-sm">
            © {currentYear} {branding.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerSections.length > 2 &&
              footerSections[2].links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const FooterLinkSection = ({
  title,
  links,
  delay = 0,
}: {
  title: string;
  links: FooterLink[];
  delay?: number;
}) => (
  <div>
    <h4 className="font-semibold text-white mb-4">{title}</h4>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={link.label}>
          <motion.a
            href={link.href}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            className="text-slate-400 hover:text-primary transition-colors text-sm inline-block"
          >
            {link.label}
          </motion.a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
