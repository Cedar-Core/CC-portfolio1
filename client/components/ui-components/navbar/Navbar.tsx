"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui";
import { Button } from "@/components/ui-components/shared";
import { getMainNavigation, getBranding } from "@/config/helpers";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const navLinks = getMainNavigation();
  const branding = getBranding();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsOpen(false);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "services",
        "projects",
        "skills",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  const linkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <motion.nav
      variants={navVariants}
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5 dark:bg-[#031128]/70 dark:shadow-black/20"
          : "bg-transparent"
      )}
    >
      {/* Gradient line at top when scrolled */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary origin-left"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              <Image
                src="/logo-dark.png"
                alt="Cedar Core Logo"
                loading="eager"
                width={36}
                height={36}
                className="rounded-lg relative z-10"
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-bold text-foreground dark:text-white text-lg leading-none"
              >
                {branding.name}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[10px] text-foreground-muted uppercase tracking-widest hidden sm:block"
              >
                Creative Studio
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks
              .filter((link) => link.href !== "/")
              .map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={index}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg group",
                    activeSection === link.href
                      ? "text-primary"
                      : "text-foreground-secondary hover:text-foreground dark:text-foreground-muted dark:hover:text-white"
                  )}
                >
                  {link.label}
                  {/* Hover background */}
                  <motion.span
                    className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-lg -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Active indicator */}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="ml-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  text="Get in Touch"
                  className="rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isOpen
                ? "bg-primary/10 text-primary"
                : "text-foreground-secondary dark:text-foreground-muted hover:bg-surface"
            )}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon name={isOpen ? "X" : "Menu"} size={24} />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-2 border-t border-border/50">
                {navLinks
                  .filter((link) => link.href !== "/")
                  .map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className={cn(
                        "flex items-center gap-3 py-3 px-4 rounded-xl text-lg font-medium transition-all",
                        activeSection === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-foreground-secondary hover:bg-surface hover:text-foreground dark:text-foreground-muted dark:hover:text-white"
                      )}
                    >
                      {activeSection === link.href && (
                        <motion.span
                          layoutId="mobileDot"
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      )}
                      {link.label}
                    </motion.a>
                  ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <Button
                    text="Get in Touch"
                    className="w-full rounded-xl py-4 text-base shadow-lg shadow-primary/25"
                    onClick={() => {
                      setIsOpen(false);
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
