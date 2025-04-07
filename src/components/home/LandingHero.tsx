"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const names = ["Rishi Khiroya", "Vrish"];

const TYPING_SPEED = 200;
const BACKSPACE_SPEED = 100;
const POST_TYPE_DELAY = 5000;

export default function LandingHero({
  learnMoreTag,
}: {
  learnMoreTag: string;
}) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = names[index];

    if (!deleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, TYPING_SPEED);
    } else if (deleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, BACKSPACE_SPEED);
    } else if (!deleting && displayText === current) {
      timeout = setTimeout(() => setDeleting(true), POST_TYPE_DELAY);
    } else if (deleting && displayText === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % names.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting, index]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
    >
      {/* Author credit with typewriter effect */}
      <a
        href="https://vrish.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
      >
        Brought to you by{" "}
        <span className="inline-block underline underline-offset-4 min-w-[14ch] text-left text-nowrap">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      </a>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
      >
        <Image
          src="/assets/logo-transparent-bg.png"
          alt="SMPLRX Logo"
          width={10000}
          height={10000}
          className="w-150 h-150"
        />
        <div>
          <h1 className="text-8xl md:text-10xl font-bold tracking-tight text-center md:text-left">
            SMPLRX
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground mt-4 text-center md:text-left">
            An AI-powered audio sample toolkit — intelligently identify,
            classify and generate samples, and unlock your library’s potential.
          </p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-16"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a
          href={learnMoreTag}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ↓ Learn more
        </a>
      </motion.div>
    </section>
  );
}
