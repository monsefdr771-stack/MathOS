"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ProfileButton() {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-[#24334D]
      bg-[#111C2E]
      px-4
      py-3
      hover:border-indigo-500
      transition-all
      "
    >
      <div
        className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-indigo-500
        to-violet-600
        text-white
        font-bold
        "
      >
        M
      </div>

      <div className="text-left">
        <p className="text-sm font-semibold text-white">
          Monsef
        </p>

        <p className="text-xs text-slate-400">
          Student
        </p>
      </div>

      <ChevronDown
        size={18}
        className="text-slate-400"
      />
    </motion.button>
  );
}