"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const initialTasks = [
  { id: 1, text: "Complete Analysis Exercises", done: false },
  { id: 2, text: "Read Algebra Chapter 3", done: true },
  { id: 3, text: "Solve 5 Probability Problems", done: false },
  { id: 4, text: "Review Calculus Notes", done: false },
];

export default function TasksCard() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, done: !task.done }
        : task
    ));
  };

  const completed = tasks.filter(t => t.done).length;
  const progress = (completed / tasks.length) * 100;

  return (
    <div className="rounded-[28px] border border-[#24334D] bg-[#111C2E] p-6">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Today's Tasks
          </h2>

          <p className="text-slate-400 text-sm">
            {completed} of {tasks.length} completed
          </p>
        </div>

        <span className="text-indigo-400 font-bold">
          {Math.round(progress)}%
        </span>

      </div>

      <div className="mt-6 h-2 rounded-full bg-slate-700 overflow-hidden">

        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: .4 }}
          className="h-full bg-gradient-to-r from-indigo-600 to-violet-500"
        />

      </div>

      <div className="mt-6 space-y-4">

        {tasks.map(task => (

          <motion.button
            key={task.id}
            whileHover={{ x: 4 }}
            onClick={() => toggleTask(task.id)}
            className="w-full flex items-center gap-4 text-left"
          >

            <div
              className={`
                w-6 h-6 rounded-lg border flex items-center justify-center
                ${
                  task.done
                    ? "bg-indigo-600 border-indigo-600"
                    : "border-slate-600"
                }
              `}
            >

              {task.done && <Check size={15} color="white" />}

            </div>

            <span
              className={`
                ${
                  task.done
                    ? "line-through text-slate-500"
                    : "text-white"
                }
              `}
            >
              {task.text}
            </span>

          </motion.button>

        ))}

      </div>

    </div>
  );
}