"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import SubjectHeader from "@/components/subjects/SubjectHeader";
import EmptySubjects from "@/components/subjects/EmptySubjects";

type Subject = {
  id: string;
  name: string;
  description?: string;
  color: string;
  icon: string;
};

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    async function loadSubjects() {
      const response = await fetch("/api/subjects");

      const data = await response.json();

      setSubjects(data);
    }

    loadSubjects();
  }, []);

  async function removeSubject(id: string) {
    console.log("Delete later:", id);
  }

  return (
    <main className="min-h-screen bg-[#08111F] p-8">
      <SubjectHeader totalSubjects={subjects.length} />

      {subjects.length === 0 ? (
        <EmptySubjects />
      ) : (
        <div className="mt-8 grid grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/subjects/${subject.id}`}
              className="
                rounded-3xl
                border
                border-[#24334D]
                bg-[#111C2E]
                p-6
                transition
                hover:scale-[1.02]
                hover:border-indigo-500
              "
            >
              <div className="flex items-start justify-between">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    text-3xl
                  "
                  style={{
                    backgroundColor: subject.color,
                  }}
                >
                  {subject.icon}
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeSubject(subject.id);
                  }}
                  className="
                    h-10
                    w-10
                    rounded-xl
                    bg-red-500/10
                    text-red-400
                    transition
                    hover:bg-red-500/20
                  "
                >
                  ✕
                </button>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white">
                {subject.name}
              </h2>

              <p className="mt-2 text-slate-400">
                {subject.description || "No description yet."}
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}