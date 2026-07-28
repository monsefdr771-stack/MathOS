"use client";

import Card from "../ui/Card";
import { motion } from "framer-motion";
import {
  Clock3,
  BookOpen,
  Sigma,
  Trophy,
  TrendingUp,
} from "lucide-react";

interface StatsCardProps {
  type: "study" | "exercise" | "proof" | "achievement";
  value: string;
  subtitle: string;
}

export default function StatsCard({
  type,
  value,
  subtitle,
}: StatsCardProps) {

  const data = {
    study: {
      title: "Study Hours",
      icon: <Clock3 size={26} />,
      color: "#6366F1",
      progress: 75,
    },

    exercise: {
      title: "Exercises",
      icon: <BookOpen size={26} />,
      color: "#22C55E",
      progress: 62,
    },

    proof: {
      title: "Proofs",
      icon: <Sigma size={26} />,
      color: "#F97316",
      progress: 48,
    },

    achievement: {
      title: "Achievements",
      icon: <Trophy size={26} />,
      color: "#EAB308",
      progress: 90,
    },
  };

  const item = data[type];

  return (
    <Card className="relative overflow-hidden p-6">

      <div
        className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-20"
        style={{
          background: item.color,
        }}
      />

      <div className="relative z-10">

        <div className="flex justify-between">

          <div>

            <p className="text-slate-400 text-sm">
              {item.title}
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mt-2"
            >
              {value}
            </motion.h2>

          </div>

          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: item.color + "22",
              color: item.color,
            }}
          >
            {item.icon}
          </div>

        </div>

        <div className="mt-6 h-2 rounded-full bg-slate-700 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${item.progress}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full"
            style={{
              background: item.color,
            }}
          />

        </div>

        <div className="flex justify-between mt-5">

          <p className="text-slate-400 text-sm">
            {subtitle}
          </p>

          <TrendingUp
            size={18}
            className="text-green-400"
          />

        </div>

      </div>

    </Card>
  );
}