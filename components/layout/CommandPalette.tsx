"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  Calendar,
  Timer,
  CheckSquare,
  BarChart3,
  Library,
  Brain,
} from "lucide-react";

const actions = [
  { icon: BookOpen, label: "Subjects" },
  { icon: Calendar, label: "Planner" },
  { icon: Timer, label: "Start Pomodoro" },
  { icon: CheckSquare, label: "Tasks" },
  { icon: BarChart3, label: "Statistics" },
  { icon: Library, label: "Library" },
  { icon: Brain, label: "AI Assistant" },
];

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CommandPalette({
  open,
  setOpen,
}: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="
            fixed
            left-1/2
            top-24
            -translate-x-1/2
            w-[650px]
            rounded-3xl
            border
            border-[#24334D]
            bg-[#111C2E]
            shadow-2xl
            overflow-hidden
            z-[9999]
            "
          >
            <div className="flex items-center gap-3 p-5 border-b border-[#24334D]">
              <Search className="text-slate-500" />

              <input
                autoFocus
                placeholder="Search anything..."
                className="
                flex-1
                bg-transparent
                outline-none
                text-white
                placeholder:text-slate-500
                "
              />
            </div>

            <div className="p-3">
              {actions.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    className="
                    flex
                    items-center
                    gap-4
                    w-full
                    p-4
                    rounded-2xl
                    hover:bg-[#1B2840]
                    transition
                    text-left
                    "
                  >
                    <Icon className="text-indigo-400" />

                    <span className="text-white">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}