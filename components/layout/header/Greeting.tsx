"use client";

export default function Greeting() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <div>
      <h1 className="text-[38px] font-bold text-white tracking-tight">
        {greeting}, Monsef 👋
      </h1>

      <p className="mt-2 text-slate-400 text-lg">
        Mathematics is the language of nature.
      </p>
    </div>
  );
}