"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function StreakBadge() {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -2,
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
      shadow-lg
      "
    >
      <div
        className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        bg-gradient-to-br
        from-orange-500
        to-red-500
        text-white
        "
      >
        <Flame size={20} />
      </div>

      <div>
        <p className="text-xs text-slate-400">
          Study Streak
        </p>

        <p className="text-white font-bold">
          17 Days
        </p>
      </div>
    </motion.div>
  );
}