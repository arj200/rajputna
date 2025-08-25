"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  // Motion values for background grid
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 40, damping: 20, mass: 0.5 });
  const smy = useSpring(my, { stiffness: 40, damping: 20, mass: 0.5 });
  const gridX = useTransform(smx, [0, 1], ["-18px", "18px"]);
  const gridY = useTransform(smy, [0, 1], ["-18px", "18px"]);

  // Motion values for tilt card
  const cardRef = useRef(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const tiltXS = useSpring(tiltX, { stiffness: 150, damping: 15 });
  const tiltYS = useSpring(tiltY, { stiffness: 150, damping: 15 });

  // Motion values for custom cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorS = useMotionValue(20);
  const cursorSS = useSpring(cursorS, { stiffness: 200, damping: 25 });
  const cursorC = useTransform(cursorS, [20, 40], ["#3F72AF", "#DBE2EF"]);

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);

      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      cursorS.set(20); // reset cursor size on move
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mx, my, cursorX, cursorY, cursorS]);

  // Motion Variants
  const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
  const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden flex items-center bg-[#0E1420] scroll-mt-20">
      {/* Background Grid */}
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
      <motion.div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-10 items-center" variants={staggerContainer} initial="hidden" animate="show">
        {/* Left Text */}
        <div className="pt-24 md:pt-0 text-center md:text-left space-y-6">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur text-xs sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#3F72AF]" />
            <span className="tracking-widest text-[#DBE2EF]/80">RAJPUTNA · INTERIOR DESIGN</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[#F9F7F7]">
            Crafted Spaces, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DBE2EF] via-[#3F72AF] to-[#112D4E]">
              International Standards
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-base sm:text-lg leading-relaxed text-[#DBE2EF]/80 max-w-xl mx-auto md:mx-0">
            Bespoke interiors for residences, retail and workspaces. Precision, material honesty and architectural clarity—elevated to a global brand experience.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#portfolio" className="px-6 py-3 rounded-full bg-[#3F72AF] text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition">Explore Portfolio</a>
            <a href="#cta" className="px-6 py-3 rounded-full border border-white/15 text-[#DBE2EF] text-sm sm:text-base hover:bg-white/5 transition">Start Your Project</a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-4 sm:gap-5 max-w-md mx-auto md:mx-0">
            {[{ k: "70+", v: "Projects" }, { k: "5★", v: "Rating" }, { k: "7+", v: "Years" }].map((item) => (
              <motion.div key={item.v} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur px-4 py-3 sm:px-5 sm:py-4">
                <div className="text-xl sm:text-2xl font-semibold text-[#F9F7F7]">{item.k}</div>
                <div className="text-xs sm:text-sm text-[#DBE2EF]/70">{item.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleCardMove}
          onMouseLeave={handleCardLeave}
          style={{ rotateX: tiltXS, rotateY: tiltYS, transformStyle: "preserve-3d" }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg max-w-[90%] mx-auto md:max-w-none"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image src="/hero-interior.jpg" alt="Signature Interior" width={820} height={560} className="block w-full h-auto object-cover" priority />
        </motion.div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ delay: 1, duration: 0.6 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#DBE2EF]/70 flex flex-col items-center">
        <div className="text-[10px] tracking-[0.3em]">SCROLL</div>
        <div className="mt-2 h-8 w-[2px] overflow-hidden rounded bg-white/15">
          <motion.span className="block h-8 w-[2px] bg-[#DBE2EF]/70" animate={{ y: [-32, 32] }} transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }} />
        </div>
      </motion.div>

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: cursorSS,
          height: cursorSS,
          backgroundColor: cursorC, // ✅ fixed
        }}
      />
    </section>
  );
}
