"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  /** Array of words/phrases to cycle through */
  words: string[];
  /** Additional className for the container */
  className?: string;
  /** Typing speed in ms per character (default: 80) */
  typingSpeed?: number;
  /** Deleting speed in ms per character (default: 50) */
  deletingSpeed?: number;
  /** Pause duration after word is complete in ms (default: 1500) */
  pauseDuration?: number;
  /** Whether to show the cursor (default: true) */
  showCursor?: boolean;
  /** Whether animation is enabled (default: true) */
  enabled?: boolean;
}

/**
 * TypewriterText — Animated text with typing and deleting effect
 *
 * Cycles through an array of words with a calm, architectural feel.
 * Uses character-by-character animation for intentional motion.
 *
 * @example
 * <TypewriterText
 *   words={["systems", "infrastructure", "foundations"]}
 *   className="text-primary"
 * />
 */
const TypewriterText = ({
  words,
  className,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  enabled = true,
}: TypewriterTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = words[currentWordIndex];

  // Calculate the longest word for min-width to prevent layout shift
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  const tick = useCallback(() => {
    if (!enabled) return;

    if (isPaused) {
      return;
    }

    if (isDeleting) {
      // Deleting characters
      if (displayedText.length > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      // Typing characters
      if (displayedText.length < currentWord.length) {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
      } else {
        // Word complete, pause then delete
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    }
  }, [
    enabled,
    isPaused,
    isDeleting,
    displayedText,
    currentWord,
    words.length,
    pauseDuration,
  ]);

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(words[0]);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);

    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed, enabled, words]);

  // If animation is disabled, just show the first word
  if (!enabled) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span
      className="inline-flex items-baseline whitespace-nowrap"
      style={{
        // Use ch units based on longest word to prevent layout shift
        minWidth: `${longestWord.length}ch`,
      }}
    >
      <span className={className}>
        <AnimatePresence mode="popLayout">
          {displayedText.split("").map((char, index) => (
            <motion.span
              key={`${currentWordIndex}-${index}-${char}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{
                duration: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </AnimatePresence>
      </span>

      {/* Cursor */}
      {showCursor && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 relative top-[0.1em]"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
      )}
    </span>
  );
};

export default TypewriterText;
