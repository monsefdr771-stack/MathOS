"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sigma,
  FunctionSquare,
  BarChart3,
} from "lucide-react";

const courses = [
  {
    title: "Analysis II",
    progress: 82,
    chapter: "Chapter 6",
    icon: FunctionSquare,
    color: "from-indigo-500 to-violet-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Algebra II",
    progress: 71,
    chapter: "Chapter 4",
    icon: Sigma,
    color: "from-pink-500 to-purple-500",
    bg: "bg-pink-500/10",
  },
  {
    title: "Probability",
    progress: 93,
    chapter: "Chapter 8",
    icon: BarChart3,
    color: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-500/10",
  },
];

export default function CoursesCard() {
  return (
    <div className="rounded-[28px] border border-[#24334D] bg-[#111C2E] p-6">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Current Courses
          </h2>

          <p className="text-slate-400 mt-1">
            Continue where you stopped
          </p>
        </div>

        <button className="text-indigo-400 hover:text-white transition">
          View All
        </button>

      </div>

      <div className="mt-7 flex flex-col gap-5">

        {courses.map((course, index) => {

          const Icon = course.icon;

          return (

            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              whileHover={{
                scale: 1.02,
              }}
              className="rounded-2xl bg-[#182235] border border-[#24334D] p-5"
            >

              <div className="flex justify-between items-center">

                <div className="flex gap-4 items-center">

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${course.bg}`}>

                    <Icon size={28} className="text-white"/>

                  </div>

                  <div>

                    <h3 className="text-white text-lg font-bold">
                      {course.title}
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      {course.chapter}
                    </p>

                  </div>

                </div>

                <button className="text-indigo-400 hover:text-white transition">
                  <ArrowRight />
                </button>

              </div>

              <div className="mt-5">

                <div className="flex justify-between text-sm mb-2">

                  <span className="text-slate-400">
                    Progress
                  </span>

                  <span className="text-white font-semibold">
                    {course.progress}%
                  </span>

                </div>

                <div className="h-2 rounded-full bg-slate-700 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                  />

                </div>

              </div>

            </motion.div>

          );

        })}

      </div>

    </div>
  );
}