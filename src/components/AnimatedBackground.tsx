"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useTheme } from "next-themes";

// Wave + grid config
const WAVE_DISTORTION = {
  spacing: 50,
  timeScale: 1e-3,
  offsetMultiplier1: 0.005,
  offsetMultiplier2: 0.01,
  offsetAmpltitude: 5,
};

const X_EXTRA_MARGIN = 200; // Extra margin to the left/right of the canvas

// Fade config:
// The fade uses two stops:
//   1. FADE_EDGE% is the small region that remains fully opaque
//   2. FADE_END% is where we reach full transparency
// Example: 0% to 0.5% = pure color, 0.5% to 5% = transition to transparent
const FADE_EDGE = 1;
const FADE_END = 2;

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const xPos = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      // Increase width by X_EXTRA_MARGIN so extra grid is drawn off-screen
      canvas.width = (window.innerWidth + X_EXTRA_MARGIN) * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth + X_EXTRA_MARGIN}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set grid color based on theme
      const gridColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--background-grid")
        .trim();
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      const time = Date.now() * WAVE_DISTORTION.timeScale;

      // Draw vertical lines with wave distortion:
      for (
        let x = -X_EXTRA_MARGIN - WAVE_DISTORTION.spacing * 2;
        x < canvas.width;
        x += WAVE_DISTORTION.spacing
      ) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 10) {
          const offset =
            Math.sin(
              time +
                x * WAVE_DISTORTION.offsetMultiplier1 +
                y * WAVE_DISTORTION.offsetMultiplier2
            ) * WAVE_DISTORTION.offsetAmpltitude;
          const newX = x + offset;
          if (y === 0) {
            ctx.moveTo(newX, y);
          } else {
            ctx.lineTo(newX, y);
          }
        }
        ctx.stroke();
      }

      // Draw horizontal lines with wave distortion:
      for (
        let y = -WAVE_DISTORTION.spacing * 2;
        y < canvas.height;
        y += WAVE_DISTORTION.spacing
      ) {
        ctx.beginPath();
        for (let x = -X_EXTRA_MARGIN; x < canvas.width; x += 10) {
          const offset =
            Math.sin(
              time +
                y * WAVE_DISTORTION.offsetMultiplier1 +
                x * WAVE_DISTORTION.offsetMultiplier2
            ) * WAVE_DISTORTION.offsetAmpltitude;
          const newY = y + offset;
          if (x === -X_EXTRA_MARGIN) {
            ctx.moveTo(x, newY);
          } else {
            ctx.lineTo(x, newY);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  // Choose overlay color based on theme

  return (
    <>
      <motion.canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
        style={{ x: xPos, left: `-${X_EXTRA_MARGIN}px` }}
      />
      {mounted && (
        <div
          className="fixed inset-0 pointer-events-none -z-5"
          style={{
            // The key is having two stops:
            //   0% → overlayColor
            //   FADE_EDGE% → still overlayColor
            //   FADE_END% → fully transparent
            background: `
              linear-gradient(to right, var(--background) 0%, var(--background) ${FADE_EDGE}%, transparent ${FADE_END}%),
              linear-gradient(to left, var(--background) 0%, var(--background) ${FADE_EDGE}%, transparent ${FADE_END}%),
              linear-gradient(to bottom, var(--background) 0%, var(--background) ${FADE_EDGE}%, transparent ${FADE_END}%),
              linear-gradient(to top, var(--background) 0%, var(--background) ${FADE_EDGE}%, transparent ${FADE_END}%)
            `,
          }}
        />
      )}
    </>
  );
}
