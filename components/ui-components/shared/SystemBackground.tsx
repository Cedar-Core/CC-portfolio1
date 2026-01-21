"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SystemBackgroundProps {
  className?: string;
  showGrid?: boolean;
  showParticles?: boolean;
  intensity?: "low" | "medium" | "high";
}

/**
 * SystemBackground — Atmospheric, layered background
 * Creates depth through gradients, subtle grid, and floating particles
 * Feels like "a living system" not a decoration
 */
const SystemBackground = ({
  className,
  showGrid = true,
  showParticles = true,
  intensity = "medium",
}: SystemBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Refined particle system - slower, more deliberate
  useEffect(() => {
    if (!showParticles) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }

    const particleCount =
      intensity === "high" ? 40 : intensity === "medium" ? 25 : 15;
    const particles: Particle[] = [];

    // More subtle color palette
    const colors = [
      "rgba(93, 158, 255, ", // Primary blue
      "rgba(82, 95, 249, ", // Secondary purple
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5, // Smaller particles
        speedX: (Math.random() - 0.5) * 0.15, // Slower movement
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.3 + 0.1, // More subtle
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with soft glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${particle.opacity})`;
        ctx.fill();

        // Subtle glow for larger particles
        if (particle.size > 1) {
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 4,
          );
          gradient.addColorStop(
            0,
            `${particle.color}${particle.opacity * 0.2})`,
          );
          gradient.addColorStop(1, `${particle.color}0)`);
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [showParticles, intensity]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-0 pointer-events-none overflow-hidden",
        className,
      )}
    >
      {/* Base - Near black background */}
      <div className="absolute inset-0 bg-[#050508]" />

      {/* Atmospheric layer 1 - Top left glow */}
      <div
        className="absolute top-0 left-0 w-[60%] h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(93, 158, 255, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Atmospheric layer 2 - Bottom right glow */}
      <div
        className="absolute bottom-0 right-0 w-[50%] h-[50%]"
        style={{
          background:
            "radial-gradient(ellipse at 80% 80%, rgba(82, 95, 249, 0.06) 0%, transparent 60%)",
        }}
      />

      {/* Atmospheric layer 3 - Center subtle glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(93, 158, 255, 0.03) 0%, transparent 50%)",
        }}
      />

      {/* Structural grid - Very subtle */}
      {showGrid && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(93, 158, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(93, 158, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      )}

      {/* Vignette effect - Depth at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(5, 5, 8, 0.6) 100%)",
        }}
      />

      {/* Particle canvas */}
      {showParticles && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}

      {/* Noise texture - Very subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default SystemBackground;
