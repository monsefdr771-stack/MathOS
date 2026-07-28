"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function GoalCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
      h-[290px]
      rounded-[28px]
      border
      border-[#24334D]
      bg-[#111C2E]
      p-6
      shadow-lg
      "
    >
      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 flex items-center justify-center">

          <Target
            size={24}
            className="text-indigo-400"
          />

        </div>

        <div>

          <h2 className="text-white text-xl font-bold">
            Today's Goal
          </h2>

          <p className="text-slate-400 text-sm">
            Daily Progress
          </p>

        </div>

      </div>

      <div className="mt-10">

        <h3 className="text-5xl font-bold text-white">
          2h
        </h3>

        <p className="text-slate-400 mt-2">
          out of 4 hours
        </p>

      </div>

      <div className="mt-8">

        <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
          />

        </div>

      </div>

      <div className="flex justify-between mt-5">

        <span className="text-slate-400">
          50%
        </span>

        <span className="text-indigo-400 font-semibold">
          Keep Going 🚀
        </span>

      </div>

    </motion.div>
  );
}