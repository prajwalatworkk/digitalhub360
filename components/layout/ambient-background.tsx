"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Fixed full-viewport animated backdrop:
//  - three drifting brand-color orbs, each on its own scroll-parallax layer
//  - a rotating conic "orbit sweep"
//  - a spring-lagged glow that chases the cursor (desktop only)
//  - floating particles
// Everything is transform/opacity only (GPU-composited); the global
// prefers-reduced-motion rule freezes the CSS keyframe layers.

const particles = [
  { left: "6%", top: "18%", size: 6, duration: 9, delay: 0 },
  { left: "14%", top: "72%", size: 5, duration: 12, delay: 1.2 },
  { left: "22%", top: "38%", size: 7, duration: 10, delay: 2.4 },
  { left: "31%", top: "84%", size: 5, duration: 13, delay: 0.8 },
  { left: "38%", top: "12%", size: 6, duration: 11, delay: 3.1 },
  { left: "47%", top: "56%", size: 5, duration: 12, delay: 1.9 },
  { left: "54%", top: "26%", size: 7, duration: 10, delay: 0.4 },
  { left: "62%", top: "78%", size: 5, duration: 12, delay: 2.7 },
  { left: "70%", top: "44%", size: 6, duration: 9, delay: 1.5 },
  { left: "78%", top: "16%", size: 5, duration: 13, delay: 3.6 },
  { left: "85%", top: "64%", size: 7, duration: 11, delay: 0.9 },
  { left: "92%", top: "34%", size: 5, duration: 12, delay: 2.1 },
  { left: "10%", top: "50%", size: 4, duration: 14, delay: 4.2 },
  { left: "58%", top: "8%", size: 4, duration: 15, delay: 1.1 },
  { left: "88%", top: "88%", size: 4, duration: 13, delay: 3.3 },
  { left: "42%", top: "92%", size: 4, duration: 14, delay: 2.9 }
];

export function AmbientBackground() {
  const { scrollY } = useScroll();
  const parallaxSlow = useTransform(scrollY, [0, 2400], [0, -180]);
  const parallaxMid = useTransform(scrollY, [0, 2400], [0, 260]);
  const parallaxFast = useTransform(scrollY, [0, 2400], [0, -360]);

  const mouseX = useMotionValue(-800);
  const mouseY = useMotionValue(-800);
  const glowX = useSpring(mouseX, { stiffness: 55, damping: 16, mass: 0.5 });
  const glowY = useSpring(mouseY, { stiffness: 55, damping: 16, mass: 0.5 });
  const [glowActive, setGlowActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setGlowActive(true);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: parallaxSlow }} className="absolute inset-0">
        <div className="ambient-orb ambient-orb-navy" />
      </motion.div>
      <motion.div style={{ y: parallaxMid }} className="absolute inset-0">
        <div className="ambient-orb ambient-orb-red" />
      </motion.div>
      <motion.div style={{ y: parallaxFast }} className="absolute inset-0">
        <div className="ambient-orb ambient-orb-gold" />
      </motion.div>

      <div className="ambient-sweep" />

      <motion.div
        className="ambient-cursor-glow"
        style={{ x: glowX, y: glowY }}
        animate={{ opacity: glowActive ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {particles.map((p, i) => (
        <span
          key={i}
          className="ambient-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  );
}
