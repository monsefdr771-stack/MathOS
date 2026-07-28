"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Flame,
  Brain,
  BookOpen,
  Lock,
} from "lucide-react";

const achievements = [
  {
    title: "First Proof",
    subtitle: "Completed",
    icon: Trophy,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    unlocked: true,
  },
  {
    title: "30 Day Streak",
    subtitle: "12 / 30 Days",
    icon: Flame,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    progress: 40,
    unlocked: false,
  },
  {
    title: "100 Study Hours",
    subtitle: "42 / 100 Hours",
    icon: BookOpen,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    progress: 42,
    unlocked: false,
  },
  {
    title: "Problem Solver",
    subtitle: "128 Exercises",
    icon: Brain,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    unlocked: true,
  },
];

export default function AchievementsCard() {
  return (
    <div className="rounded-[30px] border border-[#24334D] bg-[#111C2E] p-6">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-white text-xl font-bold">
            Achievements
          </h2>

          <p className="text-slate-400 text-sm">
            Your mathematical journey
          </p>

        </div>

        <span className="text-yellow-400 text-2xl">
          🏆
        </span>

      </div>

      <div className="space-y-4">

        {achievements.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * .1 }}
              whileHover={{
                scale: 1.02,
              }}
              className="
              rounded-2xl
              border
              border-white/5
              bg-[#182235]
              p-4
              "
            >

              <div className="flex gap-4 items-center">

                <div
                  className={`
                  w-12
                  h-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  ${item.bg}
                  `}
                >

                  <Icon className={item.color} size={22} />

                </div>

                <div className="flex-1">

                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {item.subtitle}
                  </p>

                  {!item.unlocked && item.progress && (

                    <div className="mt-3">

                      <div className="h-2 rounded-full bg-slate-700 overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: `${item.progress}%`,
                          }}
                          transition={{
                            duration: .8,
                          }}
                          className="h-full bg-indigo-500 rounded-full"
                        />

                      </div>

                    </div>

                  )}

                </div>

                {!item.unlocked && (
                  <Lock
                    size={18}
                    className="text-slate-500"
                  />
                )}

              </div>

            </motion.div>

          );

        })}

      </div>

    </div>
  );
}