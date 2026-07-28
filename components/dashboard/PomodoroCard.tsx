"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";

const INITIAL_TIME = 25 * 60;

const RADIUS = 48;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function PomodoroCard() {
  const [time, setTime] = useState(INITIAL_TIME);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const progress = (INITIAL_TIME - time) / INITIAL_TIME;
  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-red-500/20
      bg-gradient-to-br
      from-[#2B1114]
      via-[#1A1622]
      to-[#111C2E]
      p-6
      shadow-[0_20px_60px_rgba(255,70,70,.12)]
      "
    >
      {/* Tomato Watermark */}

      <div
        className="
        absolute
        -right-8
        -bottom-10
        text-[180px]
        opacity-[0.05]
        select-none
        pointer-events-none
        "
      >
        🍅
      </div>

      {/* Header */}

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-white text-2xl font-bold">
            Pomodoro
          </h2>

          <p className="text-red-300 mt-1 text-sm">
            Focus Session
          </p>

        </div>

        <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-semibold">
          25 MIN
        </div>

      </div>

      {/* Content */}

      <div className="flex items-center justify-between mt-8">

        {/* Circle */}

        <div className="relative w-32 h-32">

          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r={RADIUS}
              stroke="#40252A"
              strokeWidth="8"
              fill="none"
            />

            <motion.circle
              cx="60"
              cy="60"
              r={RADIUS}
              stroke="#EF4444"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              animate={{
                strokeDashoffset: dashOffset,
              }}
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">

            <span className="text-white text-xl font-bold tabular-nums">
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </span>

          </div>

        </div>

        {/* Right */}

        <div className="text-right">

          <p className="text-slate-400 text-sm">
            Stay focused.
          </p>

          <p className="text-white text-3xl font-bold mt-2">
            {Math.round(progress * 100)}%
          </p>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-3 mt-8">

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          onClick={() => setRunning(!running)}
          className="
          flex-1
          h-12
          rounded-xl
          bg-red-500
          text-white
          font-semibold
          flex
          items-center
          justify-center
          gap-2
          "
        >
          {running ? <Pause size={18} /> : <Play size={18} />}
          {running ? "Pause" : "Start"}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          onClick={() => {
            setRunning(false);
            setTime(INITIAL_TIME);
          }}
          className="
          w-12
          rounded-xl
          bg-white/5
          border
          border-white/10
          text-white
          flex
          items-center
          justify-center
          "
        >
          <RotateCcw size={18} />
        </motion.button>

      </div>

    </motion.div>
  );
}