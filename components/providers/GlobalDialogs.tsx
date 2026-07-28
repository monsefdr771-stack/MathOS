"use client";

import CreateSubjectDialog from "@/components/subjects/CreateSubjectDialog";
import CreateChapterDialog from "@/components/dialogs/CreateChapterDialog";

import { useDialog } from "./DialogProvider";

export default function GlobalDialogs() {
  const {
    createSubjectOpen,
    closeCreateSubject,

    createChapterOpen,
    closeCreateChapter,

    currentSubjectId,
  } = useDialog();

  return (
    <>
      <CreateSubjectDialog
        open={createSubjectOpen}
        onClose={closeCreateSubject}
      />

      <CreateChapterDialog
        open={createChapterOpen}
        onClose={closeCreateChapter}
        subjectId={currentSubjectId}
      />
    </>
  );
}