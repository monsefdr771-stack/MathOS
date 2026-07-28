"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import SubjectHero from "@/components/subjects/SubjectHero";
import SubjectTabs from "@/components/subjects/SubjectTabs";

type Subject = {
  id: string;
  name: string;
  description?: string;
  color: string;
  icon: string;
};

export default function SubjectDetailsPage() {
  const params = useParams();

  const subjectId = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  const [subject, setSubject] =
    useState<Subject | null>(null);

  useEffect(() => {
    async function loadSubject() {
      const response = await fetch(
        "/api/subjects"
      );

      const data = await response.json();

      const currentSubject = data.find(
        (s: Subject) => s.id === subjectId
      );

      setSubject(currentSubject);
    }

    loadSubject();
  }, [subjectId]);

  if (!subject) {
    return (
      <main className="min-h-screen bg-[#08111F] p-8 text-white">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#08111F] p-8">
      <SubjectHero
        icon={subject.icon}
        name={subject.name}
        description={subject.description}
        color={subject.color}
      />

      <SubjectTabs subjectId={subject.id} />
    </main>
  );
}