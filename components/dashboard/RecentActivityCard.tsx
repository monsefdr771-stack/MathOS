"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  BookOpen,
  Trophy,
  TimerReset,
  FileText,
} from "lucide-react";

const activities = [
  {
    icon: CheckCircle2,
    title: "Solved 12 Exercises",
    time: "5 min ago",
    color: "text-green-400",
    bg: "bg-green-500/15",
  },
  {
    icon: BookOpen,
    title: "Studied Analysis",
    time: "30 min ago",
    color: "text-indigo-400",
    bg: "bg-indigo-500/15",
  },
  {
    icon: Trophy,
    title: "Achievement Unlocked",
    time: "2 hours ago",
    color: "text-yellow-400",
    bg: "bg-yellow-500/15",
  },
  {
    icon: TimerReset,
    title: "Finished Pomodoro",
    time: "Today",
    color: "text-red-400",
    bg: "bg-red-500/15",
  },
  {
    icon: FileText,
    title: "Read 18 Pages",
    time: "Yesterday",
    color: "text-cyan-400",
    bg: "bg-cyan-500/15",
  },
];

export default function RecentActivityCard() {
  return (
    <div className="rounded-[28px] border border-[#24334D] bg-[#111C2E] p-6">

      <h2 className="text-2xl font-bold text-white">
        Recent Activity
      </h2>

      <p className="text-slate-400 mt-1">
        Your latest progress
      </p>

      <div className="mt-6 flex flex-col gap-4">

        {activities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                x: 6,
                backgroundColor: "#18263d",
              }}
              className="flex items-center justify-between rounded-2xl p-3 transition cursor-pointer"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}
                >
                  <Icon className={item.color} size={22} />
                </div>

                <div>
                  <p className="text-white font-medium">
                    {item.title}
                  </p>

                  <p className="text-slate-400 text-sm">
                    {item.time}
                  </p>
                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>
  );
}