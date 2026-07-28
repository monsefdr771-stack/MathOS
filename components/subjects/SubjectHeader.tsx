"use client";

import { Search, Plus } from "lucide-react";
import { useDialog } from "@/components/providers/DialogProvider";

type SubjectHeaderProps = {
  totalSubjects: number;
};

export default function SubjectHeader({
  totalSubjects,
}: SubjectHeaderProps) {
    const { openCreateSubject } = useDialog();
  return (
    <div className="flex flex-col gap-6">

      {/* Top */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Subjects
          </h1>

          <p className="mt-2 text-slate-400">
            Build your own mathematical workspace.
          </p>
        </div>

        <button
          onClick={openCreateSubject}
          className="
          flex
          items-center
          gap-2
          rounded-2xl
          bg-indigo-600
          px-5
          py-3
          text-white
          font-medium
          transition
          hover:bg-indigo-500
          "
        >
          <Plus size={18} />
          New Subject
        </button>

      </div>

      {/* Search */}
      <div
        className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-[#24334D]
        bg-[#111C2E]
        px-5
        py-4
        "
      >

        <div className="flex items-center gap-3 flex-1">

          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            type="text"
            placeholder="Search subjects..."
            className="
            w-full
            bg-transparent
            outline-none
            text-white
            placeholder:text-slate-500
            "
          />

        </div>

        <div
          className="
          rounded-xl
          bg-[#172338]
          px-4
          py-2
          text-sm
          text-slate-300
          "
        >
          {totalSubjects} Subjects
        </div>

      </div>

    </div>
  );
}