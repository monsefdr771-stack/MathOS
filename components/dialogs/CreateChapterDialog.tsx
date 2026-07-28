"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CreateChapterDialogProps = {
  open: boolean;
  onClose: () => void;
  subjectId: string;
};

export default function CreateChapterDialog({
  open,
  onClose,
  subjectId,
}: CreateChapterDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleCreateChapter() {
    if (!title.trim()) return;

    try {
      const response = await fetch("/api/chapters", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
          description,
          subjectId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create chapter");
      }

      setTitle("");
      setDescription("");

      onClose();

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[101]
              w-[560px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-3xl
              border
              border-[#24334D]
              bg-[#111C2E]
              p-8
              shadow-2xl
            "
          >
            <h2 className="text-2xl font-bold text-white">
              Create Chapter
            </h2>

            <p className="mt-2 text-slate-400">
              Add a new chapter to this subject.
            </p>

            <div className="mt-8 space-y-5">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Chapter title..."
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#24334D]
                  bg-[#0C1424]
                  px-4
                  py-3
                  text-white
                  outline-none
                "
              />

              <textarea
                rows={4}
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Description..."
                className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-[#24334D]
                  bg-[#0C1424]
                  px-4
                  py-3
                  text-white
                  outline-none
                "
              />
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="
                  rounded-xl
                  border
                  border-[#32435F]
                  px-5
                  py-3
                  text-slate-300
                "
              >
                Cancel
              </button>

              <button
                onClick={handleCreateChapter}
                className="
                  rounded-xl
                  bg-indigo-600
                  px-5
                  py-3
                  text-white
                "
              >
                Create
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}