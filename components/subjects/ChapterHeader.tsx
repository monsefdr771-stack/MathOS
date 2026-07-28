"use client";

import { useDialog } from "@/components/providers/DialogProvider";

type ChapterHeaderProps = {
  subjectId: string;
};

export default function ChapterHeader({
  subjectId,
}: ChapterHeaderProps) {
  const { openCreateChapter } = useDialog();

  return (
    <div className="mt-8 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Chapters
        </h2>

        <p className="text-slate-400">
          Organize your lessons.
        </p>
      </div>

      <button
        onClick={() =>
          openCreateChapter(subjectId)
        }
        className="
          rounded-2xl
          bg-indigo-600
          px-5
          py-3
          text-white
          transition
          hover:bg-indigo-500
        "
      >
        + Create Chapter
      </button>
    </div>
  );
}