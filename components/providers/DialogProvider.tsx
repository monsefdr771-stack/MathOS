"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type DialogContextType = {
  // Subject

  openCreateSubject: () => void;
  closeCreateSubject: () => void;
  createSubjectOpen: boolean;

  // Chapter

  openCreateChapter: (
    subjectId: string
  ) => void;

  closeCreateChapter: () => void;

  createChapterOpen: boolean;

  currentSubjectId: string;

  // Command Palette

  commandOpen: boolean;

  setCommandOpen: (
    value: boolean
  ) => void;
};

const DialogContext = createContext<
  DialogContextType | undefined
>(undefined);

export function DialogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    createSubjectOpen,
    setCreateSubjectOpen,
  ] = useState(false);

  const [
    createChapterOpen,
    setCreateChapterOpen,
  ] = useState(false);

  const [
    currentSubjectId,
    setCurrentSubjectId,
  ] = useState("");

  const [commandOpen, setCommandOpen] =
    useState(false);

  // Subject

  function openCreateSubject() {
    setCreateSubjectOpen(true);
  }

  function closeCreateSubject() {
    setCreateSubjectOpen(false);
  }

  // Chapter

  function openCreateChapter(
    subjectId: string
  ) {
    setCurrentSubjectId(subjectId);

    setCreateChapterOpen(true);
  }

  function closeCreateChapter() {
    setCreateChapterOpen(false);
  }

  return (
    <DialogContext.Provider
      value={{
        // Subject

        createSubjectOpen,
        openCreateSubject,
        closeCreateSubject,

        // Chapter

        createChapterOpen,
        openCreateChapter,
        closeCreateChapter,
        currentSubjectId,

        // Command Palette

        commandOpen,
        setCommandOpen,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error(
      "useDialog must be used inside DialogProvider"
    );
  }

  return context;
}