"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const colors = [
  { name: "Indigo", value: "#6366F1" },
  { name: "Blue", value: "#3B82F6" },
  { name: "Emerald", value: "#10B981" },
  { name: "Orange", value: "#F97316" },
  { name: "Red", value: "#EF4444" },
  { name: "Purple", value: "#A855F7" },
];

const icons = [
  "📘",
  "📗",
  "📙",
  "📕",
  "📓",
  "📚",
  "📖",
  "🧮",
  "📐",
  "📏",
];

type CreateSubjectDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateSubjectDialog({
  open,
  onClose,
}: CreateSubjectDialogProps) {
 

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#6366F1");
  const [icon, setIcon] = useState("📘");

  async function handleCreateSubject() {
  if (!name.trim()) return;

  try {
    const response = await fetch("/api/subjects", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        description,
        color,
        icon,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create subject");
    }

    await response.json();

    setName("");
    setDescription("");
    setColor("#6366F1");
    setIcon("📘");

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.25 }}
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
              Create New Subject
            </h2>

            <p className="mt-2 text-slate-400">
              Build your own mathematical workspace.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Subject Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Analysis, Algebra..."
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
                    transition
                    placeholder:text-slate-500
                    focus:border-indigo-500
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Description
                </label>

                <textarea
  rows={3}
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  placeholder="Write a short description..."
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
    transition
    placeholder:text-slate-500
    focus:border-indigo-500
  "
/>

</div>
                              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Color
                </label>

                <div className="flex flex-wrap gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => setColor(c.value)}
                      className={`
                        h-10
                        w-10
                        rounded-full
                        border-2
                        transition-all
                        ${
                          color === c.value
                            ? "scale-110 border-white"
                            : "border-transparent"
                        }
                      `}
                      style={{
                        backgroundColor: c.value,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Icon
                </label>

                <div className="grid grid-cols-5 gap-3">
                  {icons.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setIcon(emoji)}
                      className={`
                        h-14
                        rounded-2xl
                        border
                        text-2xl
                        transition-all
                        ${
                          icon === emoji
                            ? "border-indigo-500 bg-indigo-500/20"
                            : "border-[#24334D] bg-[#0C1424]"
                        }
                      `}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="
                  rounded-xl
                  border
                  border-[#32435F]
                  px-5
                  py-3
                  text-slate-300
                  transition
                  hover:bg-[#1B2840]
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleCreateSubject}
                className="
                  rounded-xl
                  bg-indigo-600
                  px-5
                  py-3
                  text-white
                  transition
                  hover:bg-indigo-500
                "
              >
                Create Subject
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}