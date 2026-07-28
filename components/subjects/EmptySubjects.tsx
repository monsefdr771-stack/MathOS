"use client";

import { motion } from "framer-motion";
import { BookOpen, Plus } from "lucide-react";
import { useDialog } from "@/components/providers/DialogProvider";

type EmptySubjectsProps = {};

export default function EmptySubjects({
  onCreateSubject,
}: EmptySubjectsProps) {
    const { openCreateSubject } = useDialog();
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="
      mt-10
      w-full
      rounded-3xl
      border
      border-[#24334D]
      bg-[#111C2E]
      px-8
      py-20
      flex
      flex-col
      items-center
      justify-center
      text-center
      "
    >
      {/* Icon */}

      <div
        className="
        w-24
        h-24
        rounded-full
        bg-indigo-500/15
        flex
        items-center
        justify-center
        mb-8
        "
      >
        <BookOpen
          size={42}
          className="text-indigo-400"
        />
      </div>

      {/* Title */}

      <h2 className="text-3xl font-bold text-white">
        No subjects yet
      </h2>

      {/* Description */}

      <p
        className="
        mt-4
        max-w-xl
        text-slate-400
        leading-7
        "
      >
        Build your own mathematical workspace.
        <br />
        Create your first subject to start organizing chapters,
        exercises, notes, books, AI tools, and study sessions.
      </p>

      {/* Button */}

      <motion.button
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={openCreateSubject}
        className="
        mt-10
        flex
        items-center
        gap-3
        rounded-2xl
        bg-gradient-to-r
        from-indigo-600
        to-violet-600
        px-6
        py-4
        text-white
        font-semibold
        shadow-lg
        shadow-indigo-700/30
        transition-all
        "
      >
        <Plus size={20} />

        Create Subject
      </motion.button>

      {/* Footer */}

      <p className="mt-6 text-sm text-slate-500">
        Your subjects will appear here after creation.
      </p>
    </motion.div>
  );
}