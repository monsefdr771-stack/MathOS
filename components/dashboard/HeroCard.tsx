"use client";

import { motion } from "framer-motion";
import GradientBackground from "../ui/GradientBackground";
import {
  BookOpen,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export default function HeroCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
      relative
      overflow-hidden
      rounded-[30px]
      border border-[#24334D]
      bg-[#111C2E]
      min-h-[320px]
      px-10
      py-10
      shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
    >
      <GradientBackground />

      <div className="relative z-10 flex min-h-[340px] justify-between items-center">

        {/* LEFT */}

        <div className="w-[60%] flex flex-col justify-center gap-8">

          <div>

            <span className="uppercase tracking-[0.25em] text-xs text-indigo-400 font-bold">
              MathOS
            </span>

            <h1 className="mt-3 text-[58px] leading-[62px] font-black text-white">
              Ready to study
              <br />
              mathematics?
            </h1>

            <p className="mt-5 max-w-[620px] text-lg leading-8 text-slate-400">
              Continue your study session, solve new problems,
              prove theorems and keep your mathematical streak alive.
            </p>

          </div>

          <div className="flex items-center gap-5 pt-2">

            <motion.button
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
              h-14
              px-7
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              text-white
              font-semibold
              flex
              items-center
              gap-3
              shadow-lg
              shadow-indigo-700/30
              "
            >
              <BookOpen size={20} />
              Continue Study
              <ArrowRight size={17} />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
              h-14
              px-7
              rounded-2xl
              border
              border-[#32435F]
              bg-[#172338]
              text-white
              flex
              items-center
              gap-3
              "
            >
              <CalendarDays size={20} />
              Planner
            </motion.button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative w-[40%] flex items-center justify-center">

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            text-[180px]
            font-black
            text-indigo-400/90
            drop-shadow-[0_0_40px_rgba(99,102,241,.45)]
            "
          >
            ∑
          </motion.div>

          <div className="absolute top-4 right-4 text-5xl text-white/10">
            π
          </div>

          <div className="absolute bottom-6 left-6 text-4xl text-white/10">
            ∫
          </div>

          <div className="absolute top-20 left-8 text-3xl text-white/10">
            √
          </div>

          <div className="absolute top-2 left-0 text-5xl text-white/10">
            ℝ
          </div>

        </div>

      </div>

    </motion.section>
  );
}