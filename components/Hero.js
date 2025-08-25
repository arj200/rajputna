"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 40, damping: 20, mass: 0.5 });
  const smy = useSpring(my, { stiffness: 40, damping: 20, mass: 0.5 });

  const gridX = useTransform(smx, [0, 1], ["-18px", "18px"]);
  const gridY = useTransform(smy, [0, 1], ["-18px", "18px"]);
  const spot1X = useTransform(smx, [0, 1], ["-6%", "6%"]);
  const spot1Y = useTransform(smy, [0, 1], ["-4%", "4%"]);
  const spot2X = useTransform(smx, [0, 1], ["6%", "-6%"]);
  const spot2Y = useTransform(smy, [0, 1], ["4%", "-4%"]);

  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const cardRef = useRef(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const tiltXS = useSpring(tiltX, { stiffness: 150, damping: 15 });
  const tiltYS = useSpring(tiltY, { stiffness: 150, damping: 15 });

  const handleCardMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(py * -10);
    tiltY.set(px * 10);
  };
  const handleCardLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden flex items-center bg-[#0E1420] scroll-mt-20"
    >
      {/* Background layers */}
      <motion.div aria-hidden className="absolute inset-0 z-0" style={{ x: gridX, y: gridY }}>
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(219,226,239,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(219,226,239,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Text */}
        <div className="pt-24 md:pt-0 text-center md:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur text-xs sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#3F72AF]" />
            <span className="tracking-widest text-[#DBE2EF]/80">
              RAJPUTNA · INTERIOR DESIGN
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
            className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[#F9F7F7]"
          >
            Crafted Spaces, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DBE2EF] via-[#3F72AF] to-[#112D4E]">
              International Standards
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-[#DBE2EF]/80 max-w-xl mx-auto md:mx-0"
          >
            Bespoke interiors for residences, retail and workspaces. Precision,
            material honesty and architectural clarity—elevated to a global brand
            experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full bg-[#3F72AF] text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition"
            >
              Explore Portfolio
            </a>
            <a
              href="#cta"
              className="px-6 py-3 rounded-full border border-white/15 text-[#DBE2EF] text-sm sm:text-base hover:bg-white/5 transition"
            >
              Start Your Project
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-10 grid grid-cols-3 gap-4 sm:gap-5 max-w-md mx-auto md:mx-0"
          >
            {[
              { k: "70+", v: "Projects" },
              { k: "5★", v: "Rating" },
              { k: "7+", v: "Years" },
            ].map((item) => (
              <div
                key={item.v}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur px-4 py-3 sm:px-5 sm:py-4"
              >
                <div className="text-xl sm:text-2xl font-semibold text-[#F9F7F7]">{item.k}</div>
                <div className="text-xs sm:text-sm text-[#DBE2EF]/70">{item.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Hero Image */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleCardMove}
          onMouseLeave={handleCardLeave}
          style={{ rotateX: tiltXS, rotateY: tiltYS, transformStyle: "preserve-3d" }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg max-w-[90%] mx-auto md:max-w-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-interior.jpg"
            alt="Signature Interior"
            width={820}
            height={560}
            className="block w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#DBE2EF]/70 flex flex-col items-center"
      >
        <div className="text-[10px] tracking-[0.3em]">SCROLL</div>
        <div className="mt-2 h-8 w-[2px] overflow-hidden rounded bg-white/15">
          <motion.span
            className="block h-8 w-[2px] bg-[#DBE2EF]/70"
            animate={{ y: [-32, 32] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
