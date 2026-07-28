"use client";

import { motion } from "framer-motion";
import {
  Timer,
  Plus,
  NotebookPen,
  BookOpen,
  FilePlus,
  Brain,
} from "lucide-react";

const items = [
  {
    icon: Timer,
    label: "Start Focus",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Plus,
    label: "New Task",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: NotebookPen,
    label: "Quick Note",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: BookOpen,
    label: "New Session",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: FilePlus,
    label: "Upload PDF",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    label: "Ask AI",
    color: "from-pink-500 to-purple-500",
  },
];

export default function FloatingDock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-5 z-50 flex justify-center mt-5 mb-3"
    >
      <div
        className="
        flex
        items-center
        gap-3
        rounded-full
        border
        border-[#2E3D5B]
        bg-[#111C2E]/80
        backdrop-blur-xl
        px-4
        py-3
        shadow-[0_20px_60px_rgba(0,0,0,.45)]
        "
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.label}
              whileHover={{
                scale: 1.18,
                y: -5,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
              relative
              group
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              text-slate-300
              transition-all
              hover:bg-[#1B2840]
              hover:text-white
              "
            >
              {/* Glow */}

              <div
                className={`
                absolute
                inset-0
                rounded-full
                opacity-0
                blur-xl
                transition-all
                duration-300
                group-hover:opacity-100
                bg-gradient-to-br
                ${item.color}
                `}
              />

              {/* Icon */}

              <Icon
                size={21}
                className="relative z-10"
              />

              {/* Tooltip */}

              <div
                className="
                pointer-events-none
                absolute
                top-16
                whitespace-nowrap
                rounded-xl
                border
                border-[#32435F]
                bg-[#1B2840]
                px-3
                py-1.5
                text-xs
                text-white
                opacity-0
                transition-all
                group-hover:opacity-100
                "
              >
                {item.label}
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}