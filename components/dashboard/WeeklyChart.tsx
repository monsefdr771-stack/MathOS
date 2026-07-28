"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const data = [
  { day: "Mon", value: 3 },
  { day: "Tue", value: 6 },
  { day: "Wed", value: 2 },
  { day: "Thu", value: 8 },
  { day: "Fri", value: 5 },
  { day: "Sat", value: 4 },
  { day: "Sun", value: 7, active: true },
];

export default function WeeklyChart() {
    const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="rounded-[28px] border border-[#24334D] bg-[#111C2E] p-6">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-white text-2xl font-bold">
            Weekly Study
          </h2>

          <p className="text-slate-400 mt-1">
            Hours studied this week
          </p>
        </div>

        <span className="text-indigo-400 text-2xl font-bold">
          35h
        </span>

      </div>

      <div className="relative mt-10 h-72">

        {/* Grid */}

        <div className="absolute inset-0 flex flex-col justify-between">

          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="border-t border-slate-700/40"
            />
          ))}

        </div>

        {/* Bars */}

        <div className="relative z-10 flex items-end justify-between h-full">

          {data.map((item, index) => (

            <div
              key={item.day}
              className="flex flex-col items-center gap-3"
            >

             <motion.div
  initial={{ height: 0 }}
  animate={{ height: item.value * 28 }}
  transition={{
    delay: index * 0.08,
    duration: 0.6,
  }}
  whileHover={{
    scale: 1.08,
    y: -6,
  }}
  onMouseEnter={() => setHovered(index)}
  onMouseLeave={() => setHovered(null)}
  className={`
    relative
    w-12
    rounded-full
    cursor-pointer
    transition-all
    ${
      item.active
        ? "bg-gradient-to-t from-indigo-700 via-violet-500 to-indigo-300 shadow-[0_0_35px_rgba(99,102,241,.55)]"
        : "bg-gradient-to-t from-slate-600 via-indigo-500 to-indigo-300"
    }
  `}
>

  <AnimatePresence>
    {hovered === index && (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: -10, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.9 }}
        className="
          absolute
          -top-16
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          rounded-xl
          bg-[#1B2840]
          border
          border-[#2D4061]
          px-3
          py-2
          text-center
          shadow-xl
          z-20
        "
      >
        <p className="text-xs text-slate-400">
          {item.day}
        </p>

        <p className="text-white font-bold">
          {item.value} Hours
        </p>
      </motion.div>
    )}
  </AnimatePresence>

</motion.div>

              <span
                className={`text-sm ${
                  item.active
                    ? "text-indigo-400 font-semibold"
                    : "text-slate-400"
                }`}
              >
                {item.day}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}