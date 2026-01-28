"use client";

import { ReactLenis } from "lenis/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { LenisRef } from "lenis/react";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

/**
 * SmoothScrollProvider
 * Wraps the application with Lenis smooth scrolling.
 * Handles route changes, accessibility (reduced motion), and global configuration.
 */
export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [enabled, setEnabled] = useState(true);

  // 1. Accessibility Check: Disable smoothing if user prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotionPreference = (
      e: MediaQueryListEvent | MediaQueryList,
    ) => {
      setEnabled(!e.matches);
    };

    handleMotionPreference(mediaQuery);
    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  // 2. Navigation Sync: Ensure scroll resets immediately on route change
  // This prevents the "scrolling up" animation on every navigation.
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, searchParams]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard expo-out
        lerp: 0.1,
        syncTouch: false, // Use native mobile scroll physics
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
