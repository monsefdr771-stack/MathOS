"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <motion.button
      whileHover={{
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.99,
      }}
      className="
      group
      w-[500px]
      h-14
      rounded-2xl
      border
      border-[#24334D]
      bg-[#111C2E]
      px-5
      flex
      items-center
      justify-between
      transition-all
      hover:border-indigo-500
      hover:shadow-[0_0_25px_rgba(99,102,241,.15)]
      "
    >
      <div className="flex items-center gap-3">

        <Search
          size={20}
          className="
          text-slate-400
          group-hover:text-indigo-400
          transition
          "
        />

        <span className="text-slate-400">
          Search anything...
        </span>

      </div>

      <div
        className="
        rounded-lg
        border
        border-[#32435F]
        bg-[#172338]
        px-3
        py-1
        text-xs
        text-slate-300
        font-medium
        "
      >
        Ctrl + K
      </div>

    </motion.button>
  );
}