import { SignIn } from "@clerk/nextjs";
import MathBackground from "@/components/auth/MathBackground";
import Scene3D from "@/components/auth/Scene3D";

export default function SignInPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#050B18]">
         <Scene3D />
        <MathBackground />
      {/* LEFT SIDE */}

      {/* LEFT SIDE */}

<div className="flex w-1/2 flex-col justify-center px-20">
  <h1
    className="
      text-8xl
      font-black
      tracking-tight
      drop-shadow-[0_0_50px_rgba(99,102,241,0.8)]
    "
  >
    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
      Math
    </span>

    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      OS
    </span>
  </h1>

  <div className="mt-6 flex gap-2">
    <div className="h-[4px] w-12 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />

    <div className="h-[4px] w-20 rounded-full bg-indigo-500 shadow-[0_0_25px_#6366f1]" />

    <div className="h-[4px] w-8 rounded-full bg-purple-500 shadow-[0_0_25px_#a855f7]" />
  </div>

  <p className="mt-8 text-3xl text-slate-300">
    The Operating System
  </p>

  <p className="text-3xl text-slate-300">
    for Mathematics Students
  </p>

  <div className="mt-10 flex gap-4 text-2xl">
    <span className="text-cyan-400">Think.</span>

    <span className="text-indigo-400">Learn.</span>

    <span className="text-purple-400">Solve.</span>

    <span className="text-cyan-300">Master.</span>
  </div>
</div>

      {/* RIGHT SIDE */}

      <div className="flex w-1/2 items-center justify-center">
        <div
  className="
    rounded-[35px]
    border
    border-cyan-400/20
    bg-white/[0.03]
    p-8
    backdrop-blur-3xl
    shadow-[0_0_80px_rgba(99,102,241,0.25)]
  "
>
          <SignIn
  appearance={{
    elements: {
      card: "bg-transparent shadow-none",
      headerTitle: "text-white",
      headerSubtitle: "text-slate-400",
      socialButtonsBlockButton:
        "bg-[#162033] border border-slate-700 text-white hover:bg-[#1f2a40]",
      formButtonPrimary:
        "bg-indigo-600 hover:bg-indigo-500",
      formFieldInput:
        "bg-[#0C1424] border border-slate-700 text-white",
      footerActionText: "text-slate-400",
      footerActionLink:
        "text-cyan-400 hover:text-cyan-300",
    },
  }}
/>
        </div>
      </div>
    </main>
  );
}