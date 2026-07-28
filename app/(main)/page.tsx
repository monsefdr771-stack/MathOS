"use client";

import HeroCard from "@/components/dashboard/HeroCard";
import GoalCard from "@/components/dashboard/GoalCard";
import StatsCard from "@/components/dashboard/StatsCard";
import WeeklyChart from "@/components/dashboard/WeeklyChart";
import TasksCard from "@/components/dashboard/TasksCard";
import PomodoroCard from "@/components/dashboard/PomodoroCard";
import CalendarCard from "@/components/dashboard/CalendarCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import StudyHeatmap from "@/components/dashboard/StudyHeatmap";
import CoursesCard from "@/components/dashboard/CoursesCard";

import FloatingDock from "@/components/layout/FloatingDock";

import { AnimatePresence } from "framer-motion";

import { useDialog } from "@/components/providers/DialogProvider";

export default function Home() {
  const { commandOpen } = useDialog();

  return (
    <div className="bg-[#08111F]">
      <main>
        <div className="mx-auto max-w-[1500px] px-8 py-6">
          <AnimatePresence>
            {!commandOpen && <FloatingDock />}
          </AnimatePresence>

          {/* Hero + Goal */}

          <div className="mt-8 grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <HeroCard />
            </div>

            <div className="col-span-4">
              <GoalCard />
            </div>
          </div>

          {/* Stats */}

          <div className="mt-8 grid grid-cols-4 gap-6">
            <StatsCard
              type="study"
              value="42h"
              subtitle="+8 hours this week"
            />

            <StatsCard
              type="exercise"
              value="128"
              subtitle="+23 solved"
            />

            <StatsCard
              type="proof"
              value="19"
              subtitle="Completed"
            />

            <StatsCard
              type="achievement"
              value="7"
              subtitle="Unlocked"
            />
          </div>

          {/* Bottom Section */}

          <div className="mt-8 grid grid-cols-12 gap-6">
            <div className="col-span-8 flex flex-col gap-6">
              <WeeklyChart />
              <CalendarCard />
              <StudyHeatmap />
              <CoursesCard />
            </div>

            <div className="col-span-4 flex flex-col gap-6">
              <TasksCard />

              <PomodoroCard />

              <RecentActivityCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}