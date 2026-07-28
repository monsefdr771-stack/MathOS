"use client";

import { motion } from "framer-motion";

const symbols = [
  "π",
  "∑",
  "∫",
  "√x",
  "f(x)",
  "∞",
  "Δ",
  "α",
  "β",
  "∂",
  "dx",
  "∇",
  "lim",
  "sin(x)",
  "cos(x)",
  "∫ f(x)dx",
  "x²+y²=z²",
  "eᶦπ+1=0",
];

const lines = [...Array(20)];

export default function MathBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid */}

      <div
        className="
          absolute inset-0 opacity-[0.05]
          [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Moving symbols */}

      {symbols.map((symbol, index) => (
        <motion.div
          key={index}
          className="absolute text-5xl font-light text-indigo-400/20"
          initial={{
            x: Math.random() * 1800,
            y: Math.random() * 1000,
            opacity: 0.2,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: [null, -120, 120],
            x: [null, 40, -40],
            rotate: [0, 360],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Neon lines */}

      {lines.map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] w-40 rounded-full bg-cyan-400/30"
          initial={{
            x: Math.random() * 1800,
            y: Math.random() * 1000,
            rotate: -25,
          }}
          animate={{
            x: [
              Math.random() * 1800,
              Math.random() * 1800,
            ],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Left glow */}

      <div className="absolute left-[-300px] bottom-[-300px] h-[700px] w-[700px] rounded-full bg-purple-700/20 blur-[180px]" />

      {/* Right glow */}

      <div className="absolute right-[-200px] top-[-200px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[180px]" />

      {/* Bottom wave */}

      <div className="absolute bottom-[-200px] left-[-10%] h-[450px] w-[120%] rounded-[100%] border border-purple-500/20 blur-sm" />

      <div className="absolute bottom-[-250px] left-[-10%] h-[500px] w-[120%] rounded-[100%] border border-cyan-500/20 blur-sm" />

      {/* Stars */}

      {[...Array(80)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute h-[3px] w-[3px] rounded-full bg-white/60"
          initial={{
            x: Math.random() * 1920,
            y: Math.random() * 1080,
            opacity: Math.random(),
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}