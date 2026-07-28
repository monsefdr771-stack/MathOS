"use client";

import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <>
      {/* Main Purple Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -top-28
        -left-24
        w-[520px]
        h-[520px]
        rounded-full
        bg-violet-600/20
        blur-[140px]
        "
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-10
        right-0
        w-[420px]
        h-[420px]
        rounded-full
        bg-indigo-500/20
        blur-[120px]
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-[-120px]
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[220px]
        bg-fuchsia-500/10
        blur-[120px]
        rounded-full
        "
      />

      {/* Noise Overlay */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[radial-gradient(circle,white_1px,transparent_1px)]
        bg-[length:22px_22px]
        "
      />

      {/* Huge Symbols */}
      <div className="absolute inset-0 pointer-events-none select-none">

        <div className="absolute left-10 top-12 text-[220px] font-black text-white/[0.035]">
          Σ
        </div>

        <div className="absolute right-12 top-16 text-[170px] font-black text-white/[0.04]">
          π
        </div>

        <div className="absolute left-[48%] bottom-[-20px] text-[240px] text-white/[0.035]">
          ∫
        </div>

        <div className="absolute right-72 top-24 text-[90px] text-white/[0.05]">
          ℝ
        </div>

        <div className="absolute right-80 bottom-24 text-[80px] text-white/[0.05]">
          √
        </div>

        <div className="absolute left-[38%] top-12 text-[70px] text-white/[0.04]">
          ∞
        </div>

      </div>

      {/* Vignette */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-indigo-900/10
        via-transparent
        to-violet-900/20
        "
      />
    </>
  );
}