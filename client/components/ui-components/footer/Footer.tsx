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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-dark.png"
                alt="Cedar Core Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
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
          {footerSections.slice(0, 2).map((section) => (
            <FooterLinkSection
              key={section.title}
              title={section.title}
              links={section.links.map((link) => ({
                label: link.label,
                href: link.href,
              }))}
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
              <Button text="Join" className="px-4" />
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1e3a5f] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} {branding.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerSections.length > 2 &&
              footerSections[2].links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinkSection = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => (
  <div>
    <h4 className="font-semibold text-white mb-4">{title}</h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-slate-400 hover:text-primary transition-colors text-sm"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
