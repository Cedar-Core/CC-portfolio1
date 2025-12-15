"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui";
import { Button } from "@/components/ui-components/shared";
import { getMainNavigation, getBranding } from "@/config/helpers";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = getMainNavigation();
  const branding = getBranding();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border dark:bg-[#031128]/80"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-dark.png"
              alt="Cedar Core Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold text-foreground dark:text-white">
              {branding.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground-secondary hover:text-foreground dark:text-foreground-muted dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            <Button
              text="Get in Touch"
              className="rounded-lg"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground-secondary dark:text-foreground-muted"
            aria-label="Toggle menu"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            {navLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-foreground-secondary hover:text-foreground dark:text-foreground-muted dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            <Button
              text="Get in Touch"
              className="w-full mt-4 rounded-lg"
              onClick={() => {
                setIsOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
