type ChapterCardProps = {
  title: string;
  description: string;
  onDelete: () => void;
};

export default function ChapterCard({
  title,
  description,
  onDelete,
}: ChapterCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[#24334D]
        bg-[#111C2E]
        p-6
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 text-slate-400">
            {description || "No description yet."}
          </p>
        </div>

        <button
          onClick={onDelete}
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
    </div>
  );
}