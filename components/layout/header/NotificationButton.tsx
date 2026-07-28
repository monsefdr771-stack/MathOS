"use client";

import { motion } from "framer-motion";
import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
      relative
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      border
      border-[#24334D]
      bg-[#111C2E]
      text-slate-300
      transition-all
      hover:border-indigo-500
      hover:text-white
      hover:shadow-[0_0_20px_rgba(99,102,241,.2)]
      "
    >
      <Bell size={22} />

      {/* Notification Badge */}

      <span
        className="
        absolute
        -top-1
        -right-1
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        bg-red-500
        text-[10px]
        font-bold
        text-white
        shadow-lg
        "
      >
        3
      </span>
    </motion.button>
  );
}