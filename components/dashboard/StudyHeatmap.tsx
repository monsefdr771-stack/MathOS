"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const weeks = 18;
const days = 7;

const colors = [
  "bg-[#182235]",
  "bg-indigo-900",
  "bg-indigo-700",
  "bg-indigo-500",
  "bg-violet-400",
];

export default function StudyHeatmap() {
  const grid = useMemo(() => {
    return [...Array(weeks)].map((_, col) =>
      [...Array(days)].map((_, row) => ({
        id: `${col}-${row}`,
        level: Math.floor(
          Math.random() * colors.length
        ),
      }))
    );
  }, []);

  return (
    <div className="rounded-[28px] border border-[#24334D] bg-[#111C2E] p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Study Activity
          </h2>

          <p className="mt-1 text-slate-400">
            Your consistency over the last months
          </p>
        </div>

        <div className="text-right">
          <h3 className="text-3xl font-bold text-indigo-400">
            132h
          </h3>

          <p className="text-sm text-slate-400">
            Total Study Time
          </p>
        </div>
      </div>

      {/* Grid */}

      <div className="mt-8 flex gap-[5px]">

        {grid.map((column, col) => (

          <div
            key={col}
            className="flex flex-col gap-[5px]"
          >

            {column.map((cell, row) => (

              <motion.div
                key={cell.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay:
                    (col * days + row) * 0.01,
                }}
                whileHover={{
                  scale: 1.4,
                }}
                className={`
                  h-5
                  w-5
                  cursor-pointer
                  rounded-md
                  transition
                  ${colors[cell.level]}
                `}
              />

            ))}

          </div>

        ))}

      </div>

      {/* Legend */}

      <div className="mt-8 flex items-center justify-between">

        <span className="text-sm text-slate-400">
          Less
        </span>

        <div className="flex gap-2">

          {colors.map((color, index) => (

            <div
              key={index}
              className={`h-5 w-5 rounded ${color}`}
            />

          ))}

        </div>

        <span className="text-sm text-slate-400">
          More
        </span>

      </div>

    </div>
  );
}