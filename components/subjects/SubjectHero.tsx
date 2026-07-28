type SubjectHeroProps = {
  icon: string;
  name: string;
  description: string;
  color: string;
};

export default function SubjectHero({
  icon,
  name,
  description,
  color,
}: SubjectHeroProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[#24334D]
        bg-[#111C2E]
        p-8
      "
    >
      <div className="flex items-center gap-5">

        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center text-5xl"
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>

        <div>
          <h1 className="text-4xl font-bold text-white">
            {name}
          </h1>

          <p className="mt-2 text-slate-400">
            {description || "No description yet."}
          </p>
        </div>

      </div>
    </div>
  );
}