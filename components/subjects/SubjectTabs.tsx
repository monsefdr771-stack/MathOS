"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ChapterHeader from "@/components/subjects/ChapterHeader";
import EmptyChapters from "@/components/subjects/EmptyChapters";
import ChapterCard from "@/components/subjects/ChapterCard";



const tabs = [
  "Chapters",
  "Notes",
  "Exercises",
  "Books",
  "Statistics",
  "Pomodoro",
];

type SubjectTabsProps = {
  subjectId: string;
};

export default function SubjectTabs({
  subjectId,
}: SubjectTabsProps) {
  const [activeTab, setActiveTab] =
    useState("Chapters");
    type Chapter = {
  id: string;
  title: string;
  description?: string;
  subjectId: string;
};

const [chapters, setChapters] = useState<
  Chapter[]
>([]);
useEffect(() => {
  async function loadChapters() {
    const response = await fetch(
      `/api/subjects`
    );

    const subjects = await response.json();

    const subject = subjects.find(
      (s: any) => s.id === subjectId
    );

    setChapters(subject?.chapters || []);
  }

  loadChapters();
}, [subjectId]);

  const subjectChapters = chapters.filter(
    (chapter) =>
      chapter.subjectId === subjectId
  );

  return (
    <div className="mt-8">
      {/* Tabs */}

      <div className="flex gap-8 border-b border-slate-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab)
            }
            className="
              relative
              py-4
              text-sm
              font-medium
              transition-colors
            "
          >
            <span
              className={
                activeTab === tab
                  ? "text-white"
                  : "text-slate-400"
              }
            >
              {tab}
            </span>

            {activeTab === tab && (
              <motion.div
                layoutId="active-tab"
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-[3px]
                  rounded-full
                  bg-indigo-500
                "
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}

      <div className="mt-8">
        {activeTab === "Chapters" && (
          <>
           <ChapterHeader subjectId={subjectId} />

            {subjectChapters.length ===
            0 ? (
              <EmptyChapters />
            ) : (
              <div className="mt-6 grid gap-4">
                {subjectChapters.map(
                  (chapter) => (
                    <ChapterCard
                      key={chapter.id}
                      title={
                        chapter.title
                      }
                      description={
                        chapter.description
                      }
                      onDelete={() =>
  console.log(
    "Delete later:",
    chapter.id
  )
}
                    />
                  )
                )}
              </div>
            )}
          </>
        )}

        {activeTab === "Notes" && (
          <div className="mt-6 rounded-3xl border border-[#24334D] bg-[#111C2E] p-8">
            <p className="text-slate-400">
              Notes will appear here.
            </p>
          </div>
        )}

        {activeTab ===
          "Exercises" && (
          <div className="mt-6 rounded-3xl border border-[#24334D] bg-[#111C2E] p-8">
            <p className="text-slate-400">
              Exercises will appear here.
            </p>
          </div>
        )}

        {activeTab === "Books" && (
          <div className="mt-6 rounded-3xl border border-[#24334D] bg-[#111C2E] p-8">
            <p className="text-slate-400">
              Books will appear here.
            </p>
          </div>
        )}

        {activeTab ===
          "Statistics" && (
          <div className="mt-6 rounded-3xl border border-[#24334D] bg-[#111C2E] p-8">
            <p className="text-slate-400">
              Statistics will appear here.
            </p>
          </div>
        )}

        {activeTab ===
          "Pomodoro" && (
          <div className="mt-6 rounded-3xl border border-[#24334D] bg-[#111C2E] p-8">
            <p className="text-slate-400">
              Pomodoro will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}