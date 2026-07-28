"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const days = [
  null, null,
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31,
];

const studiedDays = [3, 4, 7, 10, 15, 18, 22, 23, 28];
const today = 23;

export default function CalendarCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      rounded-[30px]
      border
      border-[#24334D]
      bg-[#111C2E]
      p-6
      overflow-hidden
      relative
      "
    >
      {/* Glow */}
      <div className="absolute -top-24 -right-20 w-60 h-60 rounded-full bg-indigo-600/10 blur-[100px]" />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-white text-xl font-bold">
              Calendar
            </h2>

            <p className="text-slate-400 text-sm mt-1">
              July 2026
            </p>

          </div>

          <div className="flex gap-2">

            <button className="w-9 h-9 rounded-xl bg-[#1B2840] flex items-center justify-center text-slate-300 hover:bg-indigo-600 transition">
              <ChevronLeft size={18} />
            </button>

            <button className="w-9 h-9 rounded-xl bg-[#1B2840] flex items-center justify-center text-slate-300 hover:bg-indigo-600 transition">
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

        {/* Week */}

        <div className="grid grid-cols-7 gap-2 mt-8">

          {weekDays.map(day => (
            <div
              key={day}
              className="text-center text-xs text-slate-500 font-semibold"
            >
              {day}
            </div>
          ))}

        </div>

        {/* Days */}

        <div className="grid grid-cols-7 gap-2 mt-4">

          {days.map((day, index) => {

            if (!day)
              return <div key={index} />;

            const studied = studiedDays.includes(day);
            const active = day === today;

            return (

              <motion.button

                whileHover={{
                  scale: 1.08,
                }}

                whileTap={{
                  scale: .95,
                }}

                key={day}
                className={`
                relative
                h-11
                rounded-xl
                transition
                ${
                  active
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-700/40"
                    : studied
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "bg-[#182235] text-slate-400 hover:bg-[#22304B]"
                }
                `}
              >

                {day}

                {studied && !active && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                )}

              </motion.button>

            );

          })}

        </div>

        {/* Footer */}

        <div className="mt-6 rounded-2xl bg-[#182235] p-4 flex justify-between items-center">

          <div>

            <p className="text-slate-400 text-sm">
              Study Streak
            </p>

            <h3 className="text-white text-2xl font-bold">
              🔥 12 Days
            </h3>

          </div>

          <div className="text-right">

            <p className="text-slate-400 text-sm">
              This Month
            </p>

            <h3 className="text-indigo-400 text-2xl font-bold">
              76h
            </h3>

          </div>

        </div>

      </div>

    </motion.div>
  );
}