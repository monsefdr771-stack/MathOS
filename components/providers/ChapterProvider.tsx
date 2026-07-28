"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Chapter = {
  id: string;
  subjectId: string;
  title: string;
  description: string;
};

type ChapterContextType = {
  chapters: Chapter[];
  addChapter: (chapter: Chapter) => void;
  removeChapter: (id: string) => void;
};

const ChapterContext = createContext<
  ChapterContextType | undefined
>(undefined);

export function ChapterProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [chapters, setChapters] = useState<Chapter[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("chapters");

    if (saved) {
      setChapters(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "chapters",
      JSON.stringify(chapters)
    );
  }, [chapters]);

  function addChapter(chapter: Chapter) {
    setChapters((prev) => [...prev, chapter]);
  }

  function removeChapter(id: string) {
    setChapters((prev) =>
      prev.filter((chapter) => chapter.id !== id)
    );
  }

  return (
    <ChapterContext.Provider
      value={{
        chapters,
        addChapter,
        removeChapter,
      }}
    >
      {children}
    </ChapterContext.Provider>
  );
}

export function useChapters() {
  const context = useContext(ChapterContext);

  if (!context) {
    throw new Error(
      "useChapters must be used inside ChapterProvider"
    );
  }

  return context;
}