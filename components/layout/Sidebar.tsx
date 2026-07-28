"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  BookOpen,
  NotebookPen,
  CalendarDays,
  Library,
  Brain,
  ChevronDown,
} from "lucide-react";

const mainItems = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    label: "Subjects",
    icon: BookOpen,
    href: "/subjects",
  },
  {
    label: "Notes",
    icon: NotebookPen,
    href: "/notes",
  },
  {
    label: "Planner",
    icon: CalendarDays,
    href: "/planner",
  },
  {
    label: "Library",
    icon: Library,
    href: "/library",
  },
  {
    label: "AI Assistant",
    icon: Brain,
    href: "/ai",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-[220px] h-full shrink-0 bg-[#0C1424] border-r border-[#24334D] flex flex-col">

      {/* Logo */}
      <div className="p-7">

        <h1 className="text-3xl font-bold text-white">
          MathOS
        </h1>

        <p className="text-slate-400 text-sm mt-2 leading-6">
          The Operating System
          <br />
          for Mathematics Students
        </p>

        {/* Navigation */}

        <div className="mt-10">

          <p className="text-xs tracking-[0.25em] text-slate-500 mb-5">
            NAVIGATION
          </p>

          <div className="space-y-2">

            {mainItems.map((item) => {
  const Icon = item.icon;

  return (
    <Link
      key={item.label}
      href={item.href}
      className={`
      w-full
      flex
      items-center
      gap-3
      rounded-2xl
      px-4
      py-3
      transition-all
      ${
        pathname === item.href
          ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-700/20"
          : "text-slate-400 hover:bg-[#172338] hover:text-white"
      }
      `}
    >
      <Icon size={20} />

      <span className="font-medium">
        {item.label}
      </span>
    </Link>
  );
})}

          </div>

        </div>

      </div>

      {/* Profile */}

      <div className="mt-auto p-5 border-t border-[#24334D]">

        <button
          className="
          w-full
          flex
          items-center
          justify-between
          rounded-2xl
          bg-[#172338]
          px-4
          py-3
          hover:bg-[#1B2840]
          transition
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
              w-11
              h-11
              rounded-full
              bg-gradient-to-br
              from-indigo-500
              to-violet-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              "
            >
              M
            </div>

            <div className="text-left">

              <h3 className="text-white font-semibold">
                Monsef Dria
              </h3>

              <p className="text-xs text-slate-400">
                Mathematics Student
              </p>

            </div>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />

        </button>

      </div>

    </aside>
  );
}